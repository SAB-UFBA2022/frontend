import { toast } from 'react-toastify'
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
  EXTEND_END_DATE_BEGIN,
  EXTEND_END_DATE_SUCCESS,
  EXTEND_END_DATE_ERROR
} from './actions'

import { initialState } from './appContext' // eslint-disable-line

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'error',
      alertText: action.payload
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      isLoading: false,
      showAlert: false,
      alertType: '',
      alertText: ''
    }
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    const { tax_id, access_token, role, id } = action.payload
    toast.success('Login realizado com sucesso.')
    return {
      ...state,
      isLoading: false,
      user: tax_id,
      userRole: role,
      token: access_token,
      id
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userRole: ''
    }
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      expandSidebar: !state.expandSidebar
    }
  }
  if (action.type === GET_STUDENTS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === GET_STUDENTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      students: action.payload
    }
  }
  if (action.type === GET_STUDENTS_ERROR) {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }

  if (action.type === FORGET_PASSWORD_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === FORGET_PASSWORD_ERROR) {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }

  if (action.type === FORGET_PASSWORD_SUCCESS) {
    toast.success('Email enviado com sucesso.')
    return {
      ...state,
      isLoading: false
    }
  }

  if (action.type === CHANGE_PAGE) {
    return { ...state, currentPage: action.payload.page }
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      currentPage: 1,
      [action.payload.name]: action.payload.value,
      selectedItem: action.payload.id
    }
  }
  if (action.type === 'GET_EXPIRED_STUDENTS_BEGIN') {
    return { ...state, isLoading: true, showAlert: false }
  }
  if (action.type === 'GET_EXPIRED_STUDENTS_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      students: action.payload
    }
  }
  if (action.type === 'GET_EXPIRED_STUDENTS_ERROR') {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }
  if (action.type === EXTEND_END_DATE_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === EXTEND_END_DATE_SUCCESS) {
    toast.success(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }
  if (action.type === EXTEND_END_DATE_ERROR) {
    return {
      ...state,
      isLoading: false
    }
  }
  throw new Error(`Não existe ação : ${action.type}`)
}

export default reducer
