/* eslint-disable react/jsx-no-constructed-context-values */
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
  CLEAR_FILTERS,
  GET_STUDENTS_BEGIN,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  CHANGE_PAGE,
  SAVE_USER_BEGIN,
  SAVE_USER_SUCCESS,
  SAVE_USER_ERROR,
  PRE_SAVE_USER_BEGIN,
  PRE_SAVE_USER_SUCCESS,
  PRE_SAVE_USER_ERROR
} from './actions'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const roles = localStorage.getItem('role')
const username = localStorage.getItem('name')
const useremail = localStorage.getItem('email')
const userphone = localStorage.getItem('phone')
const userpassword = localStorage.getItem('password')
const usertax_id = localStorage.getItem('tax_id')

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
  search: '',
  searchStatus: 'Todos',
  searchType: 'Todos',
  sort: 'Mais recente',
  sortOptions: ['Mais recente', 'Mais antigo', 'a-z', 'z-a'],
  username: username || '',
  useremail: useremail || '',
  userphone: userphone || '',
  userpassword: userpassword || '',
  usertax_id: usertax_id || ''
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

  const saveUserToLocalStorage = (nameId, taxId, emailId, phoneId, password) => {
    localStorage.setItem('name', nameId)
    localStorage.setItem('taxId', taxId)
    localStorage.setItem('email', emailId)
    localStorage.setItem('phone', phoneId)
    localStorage.setItem('password', password)
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

  const preSaveUser = async (dataUser) => {
    dispatch({ type: PRE_SAVE_USER_BEGIN })
    try {
      const { name_id, tax_id, email_id, phone_id, password } = dataUser
      dispatch({
        type: PRE_SAVE_USER_SUCCESS,
        payload: { name_id, tax_id, email_id, phone_id, password }
      })
      saveUserToLocalStorage(name_id, tax_id, email_id, phone_id, password)
    } catch (error) {
      if (!error?.response) {
        dispatch({ type: PRE_SAVE_USER_ERROR, payload: 'Erro inesperado.Tente novamente' })
      }
    }
  }

  const saveUser = async (dataUser) => {
    dispatch({ type: SAVE_USER_BEGIN })
    try {
      const { data } = await axios.post(
        `https://aux-bolsistas-dev.herokuapp.com/v1/students`,
        dataUser
      )
      const {
        id,
        tax_id,
        enrollment_number,
        name,
        email,
        course,
        link_lattes,
        advisor_id,
        enrollment_date_pgcomp,
        defense_prediction,
        phone_number,
        role,
        articles,
        scholarship
      } = data
      dispatch({
        type: SAVE_USER_SUCCESS,
        payload: {
          id,
          tax_id,
          enrollment_number,
          name,
          email,
          course,
          link_lattes,
          advisor_id,
          enrollment_date_pgcomp,
          defense_prediction,
          phone_number,
          role,
          articles,
          scholarship
        }
      })
    } catch (error) {
      if (!error?.response) {
        dispatch({ type: SAVE_USER_ERROR, payload: 'Sem resposta do servidor' })
      } else if (error?.response?.status === 400) {
        dispatch({ type: SAVE_USER_ERROR, payload: error?.response })
      } else if (error?.response?.status === 401) {
        dispatch({ type: SAVE_USER_ERROR, payload: 'Cadastro não autorizado' })
      } else {
        dispatch({ type: SAVE_USER_ERROR, payload: 'Erro inesperado.Tente novamente' })
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

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }

  const getStudents = async () => {
    const { currentPage, search, searchStatus, searchType, sort } = state

    let url = `v1/students/list/all?page=${currentPage}&status=${searchStatus}&course=${searchType}&sort=${sort}`
    if (search) {
      url += `&search=${search}`
    }
    dispatch({ type: GET_STUDENTS_BEGIN })
    try {
      const { data } = await axios.get(`https://aux-bolsistas-dev.herokuapp.com/${url}`)
      const { items, meta } = data
      dispatch({
        type: GET_STUDENTS_SUCCESS,
        payload: {
          items,
          meta
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        loginUser,
        logoutUser,
        clearFilters,
        toggleSidebar,
        getStudents,
        changePage,
        preSaveUser,
        saveUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
