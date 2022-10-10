import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import reducer from './reducer' // eslint-disable-line

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  GET_STUDENTS_BEGIN,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  CHANGE_PAGE,
  HANDLE_CHANGE
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const roles = localStorage.getItem('role')
const username = localStorage.getItem('name')

const initialState = {
  isLoading: false,
  showAlert: false,
  showToast: false,
  alertType: '',
  alertText: '',
  expandSidebar: false,
  user: user || null,
  token: token || '',
  userRole: roles || '',
  name: username || '',
  students: [],
  totalItems: 0,
  totalPages: 1,
  currentPage: 1,
  itemsPerPage: 0,
  itemCount: 0,
  allItems: 'Todos',
  courseType: '',
  courseOptions: ['Mestrado', 'Doutorado'],
  scholarshipDate: '',
  scholarshipOptions: ['Bolsas recentes', 'Bolsas próximas de encerrar'],
  sort: '',
  sortOptions: ['A-Z', 'Z-A'],
  selectedItem: ''
}

const AppContext = React.createContext()

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const addUserToLocalStorage = (taxId, accessToken, userRole, userName) => {
    localStorage.setItem('user', JSON.stringify(taxId))
    localStorage.setItem('token', accessToken)
    localStorage.setItem('role', userRole)
    localStorage.setItem('name', userName)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
  }

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      const { data } = await axios.post(
        'https://aux-bolsistas-dev.herokuapp.com/login',
        currentUser
      )
      const { tax_id, access_token, role, name } = data
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { tax_id, access_token, role, name }
      })
      addUserToLocalStorage(tax_id, access_token, role, name)
    } catch (error) {
      if (!error?.response) {
        dispatch({ type: LOGIN_USER_ERROR, payload: 'Sem resposta do servidor' })
      } else if (error?.response?.status === 400) {
        dispatch({ type: LOGIN_USER_ERROR, payload: 'Credenciais inválidas!' })
      } else if (error?.response?.status === 401) {
        dispatch({ type: LOGIN_USER_ERROR, payload: 'Login não autorizado' })
      } else {
        dispatch({ type: LOGIN_USER_ERROR, payload: 'Erro inesperado.Tente novamente' })
      }
    }
  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const getStudents = async (defineType, name) => {
    const { currentPage } = state
    const url = `v1/students/list/all?page=${currentPage}`
    dispatch({ type: GET_STUDENTS_BEGIN })

    try {
      let studentList
      let metaList
      if (defineType !== 'all' && name !== '-') {
        const { data } = await axios.get(
          `https://aux-bolsistas-dev.herokuapp.com/v1/students/not-paginate/list/all`
        )
        switch (defineType) {
          case 'course':
            studentList = data.filter((student) => student.course === name)
            break
          case 'scholarship':
            studentList = data.sort((a, b) => {
              if (name === 'Mais recente') {
                return a.scholarship.scholarship_starts_at > b.scholarship.scholarship_starts_at
              }
              if (name === 'Mais antigo') {
                return a.scholarship.scholarship_ends_at > b.scholarship.scholarship_ends_at
              }
              return 0
            })
            break
          case 'sort':
            studentList = data.sort((a, b) => {
              if (name === 'A-Z') {
                return a.name > b.name
              }
              if (name === 'Z-A') {
                return a.name < b.name
              }
              return 0
            })
            break
          default:
            break
        }
        metaList = {
          totalItems: studentList.length,
          itemCount: studentList.length,
          itemsPerPage: studentList.length,
          totalPages: 1,
          currentPage: 1
        }
      } else {
        const { data } = await axios.get(`https://aux-bolsistas-dev.herokuapp.com/${url}`)
        const { items, meta } = data
        studentList = items
        metaList = meta
      }
      dispatch({
        type: GET_STUDENTS_SUCCESS,
        payload: {
          studentList,
          metaList
        }
      })
    } catch (error) {
      dispatch({ type: GET_STUDENTS_ERROR, payload: 'Erro ao carregar lista de usuários' })
    }

    clearAlert()
  }

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } })
  }

  const handleChange = ({ name, value, id }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value, id } })
  }

  return <AppContext.Provider value={{ ...state, displayAlert, loginUser, logoutUser, toggleSidebar, getStudents, changePage, handleChange }}>{children}</AppContext.Provider>// eslint-disable-line
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
