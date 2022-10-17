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
  CLEAR_FILTERS,
  SAVE_USER_BEGIN,
  SAVE_USER_SUCCESS,
  SAVE_USER_ERROR,
  PRE_SAVE_USER_BEGIN,
  PRE_SAVE_USER_SUCCESS,
  PRE_SAVE_USER_ERROR
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
    const { tax_id, access_token, role } = action.payload
    toast.success('Login realizado com sucesso.')
    return {
      ...state,
      isLoading: false,
      user: tax_id,
      userRole: role,
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
      students: action.payload.items,
      totalItems: action.payload.meta.totalItems,
      totalPages: action.payload.meta.totalPages,
      currentPage: action.payload.meta.currentPage,
      itemsPerPage: action.payload.meta.itemsPerPage,
      itemCount: action.payload.meta.itemCount
    }
  }
  if (action.type === GET_STUDENTS_ERROR) {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }

  if (action.type === SAVE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === SAVE_USER_SUCCESS) {
    toast.success('Cadastro realizado com sucesso.')
    return {
      ...state,
      isLoading: false
    }
  }
  if (action.type === SAVE_USER_ERROR) {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }
  if (action.type === CHANGE_PAGE) {
    return { ...state, currentPage: action.payload.page }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: '',
      searchStatus: 'Todos',
      searchType: 'Todos',
      sort: 'Mais recente'
    }
  }

  if (action.type === PRE_SAVE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === PRE_SAVE_USER_SUCCESS) {
    const { tax_id, role } = action.payload
    toast.success('Pré Cadastro realizado com sucesso.')
    return {
      ...state,
      isLoading: false,
      user: tax_id,
      userRole: role
    }
  }
  if (action.type === PRE_SAVE_USER_ERROR) {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
    }
  }
  throw new Error(`Não existe ação : ${action.type}`)
}

export default reducer
