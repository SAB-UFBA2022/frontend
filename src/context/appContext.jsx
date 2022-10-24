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
  HANDLE_CHANGE,
  GET_EXPIRED_STUDENTS_SUCCESS,
  GET_EXPIRED_STUDENTS_ERROR,
  GET_EXPIRED_STUDENTS_BEGIN
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

  const getStudents = async () => {
    dispatch({ type: GET_STUDENTS_BEGIN })

    try {
      const { data } = await axios.get(
        `https://aux-bolsistas-dev.herokuapp.com/v1/students/not-paginate/list/all`
      )
      dispatch({
        type: GET_STUDENTS_SUCCESS,
        payload: data
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

  const getExpiredStudents = async () => {
    dispatch({ type: GET_EXPIRED_STUDENTS_BEGIN })
    try {
      const { data } = await axios.get(
        `https://aux-bolsistas-dev.herokuapp.com/v1/students/not-paginate/list/all`
      )
      const expiredStudents = data.filter((student) => student.scholarship.active === false)
      dispatch({ type: GET_EXPIRED_STUDENTS_SUCCESS, payload: expiredStudents })
    } catch (error) {
      dispatch({ type: GET_EXPIRED_STUDENTS_ERROR, payload: 'Erro ao carregar lista de usuários' })
    }
  }

  const getStudentsEndDate = async () => {
    dispatch({ type: GET_STUDENTS_BEGIN })

    try {
      const { data } = await axios.get(
        `https://aux-bolsistas-dev.herokuapp.com/v1/students/not-paginate/list/all`
      )
      const studentList = data.sort((a, b) => {
        return (
          new Date(a.scholarship.scholarship_ends_at) - new Date(b.scholarship.scholarship_ends_at)
        )
      })
      dispatch({
        type: GET_STUDENTS_SUCCESS,
        payload: studentList
      })
    } catch (error) {
      dispatch({ type: GET_STUDENTS_ERROR, payload: 'Erro ao carregar lista de usuários' })
    }

    clearAlert()
  }

  return <AppContext.Provider value={{ ...state, displayAlert, loginUser, logoutUser, toggleSidebar, getStudents, changePage, handleChange, getExpiredStudents, getStudentsEndDate }}>{children}</AppContext.Provider>// eslint-disable-line
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
