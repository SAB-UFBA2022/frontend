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
  FORGET_PASSWORD_BEGIN,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_ERROR,
  TOGGLE_SIDEBAR,
  GET_STUDENTS_BEGIN,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_ERROR,
  CHANGE_PAGE,
  HANDLE_CHANGE,
  GET_EXPIRED_STUDENTS_SUCCESS,
  GET_EXPIRED_STUDENTS_ERROR,
  GET_EXPIRED_STUDENTS_BEGIN,
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
const usertax_id = localStorage.getItem('taxId')

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
  selectedItem: '',
  search: '',
  searchStatus: 'Todos',
  searchType: 'Todos',
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
    dispatch({ type: DISPLAY_ALERT, payload: 'Por favor, preencha todos os campos' })
    clearAlert()
  }

  const displayFormAlert = (text) => {
    dispatch({ type: DISPLAY_ALERT, payload: text })
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

  const forgetPassword = async (forgestPasswordData) => {
    const { email } = forgestPasswordData
    dispatch({ type: FORGET_PASSWORD_BEGIN })
    try {
      const { data } = await axios.get(
        `https://aux-bolsistas-dev.herokuapp.com/v1/students/find/byemail?email=${email}`
      )
      if (data) {
        await axios.post(
          'https://aux-bolsistas-dev.herokuapp.com/v1/password-recovery/request',
          forgestPasswordData
        )
        dispatch({
          type: FORGET_PASSWORD_SUCCESS
        })
      }
    } catch (error) {
      if (!error?.response) {
        dispatch({ type: FORGET_PASSWORD_ERROR, payload: 'Sem resposta do servidor' })
      } else if (error?.response?.status === 404) {
        displayFormAlert('Usuário não encontrado.')
      } else {
        dispatch({ type: FORGET_PASSWORD_ERROR, payload: 'Erro inesperado. Tente novamente' })
      }
    }
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
    const { name_id, tax_id, email_id, phone_id, password } = dataUser
    if (name_id && tax_id && email_id && phone_id && password) {
      saveUserToLocalStorage(name_id, tax_id, email_id, phone_id, password)
      dispatch({
        type: PRE_SAVE_USER_SUCCESS,
        payload: { name_id, tax_id, email_id, phone_id, password }
      })
    } else {
      dispatch({ type: PRE_SAVE_USER_ERROR, payload: 'Preencha todos os campos' })
    }
  }

  const saveUser = async (dataUser) => {
    dispatch({ type: SAVE_USER_BEGIN })
    try {
      await axios.post(`https://aux-bolsistas-dev.herokuapp.com/v1/students`, dataUser)
      dispatch({
        type: SAVE_USER_SUCCESS
      })
    } catch (error) {
      if (!error?.response) {
        dispatch({ type: SAVE_USER_ERROR, payload: 'Sem resposta do servidor' })
      } else if (error?.response?.status === 400) {
        dispatch({ type: SAVE_USER_ERROR, payload: error?.response?.message })
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

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        loginUser,
        logoutUser,
        toggleSidebar,
        getStudents,
        changePage,
        handleChange,
        getExpiredStudents,
        getStudentsEndDate,
        forgetPassword,
        displayFormAlert,
        preSaveUser,
        saveUser
      }}
    >
      {children}
    </AppContext.Provider>
  ) // eslint-disable-line
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
