import { toast } from 'react-toastify'
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
  GET_LOGGED_STUDENT_BEGIN,
  GET_LOGGED_STUDENT_SUCCESS,
  GET_LOGGED_STUDENT_ERROR
} from './actions'

import { initialState } from './appContext' // eslint-disable-line

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'error',
      alertText: 'Por favor, preencha todos os campos'
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
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
      userId: id,
      token: access_token
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
      students: action.payload.studentList,
      totalItems: action.payload.metaList.totalItems,
      totalPages: action.payload.metaList.totalPages,
      currentPage: action.payload.metaList.currentPage,
      itemsPerPage: action.payload.metaList.itemsPerPage,
      itemCount: action.payload.metaList.itemCount
    }
  }
  if (action.type === GET_STUDENTS_ERROR) {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }
  if (action.type === GET_LOGGED_STUDENT_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === GET_LOGGED_STUDENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      loggedStudent: action.payload
    }
  }
  if (action.type === GET_LOGGED_STUDENT_ERROR) {
    toast.error(action.payload)
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
  throw new Error(`Não existe ação : ${action.type}`)
}

export default reducer
