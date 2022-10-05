import { toast } from 'react-toastify'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
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

  if (action.type === SAVE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === SAVE_USER_SUCCESS) {
    const { tax_id, role } = action.payload
    toast.success('Cadastro realizado com sucesso.')
    return {
      ...state,
      isLoading: false,
      user: tax_id,
      userRole: role
    }
  }
  if (action.type === SAVE_USER_ERROR) {
    toast.error(action.payload)
    return {
      ...state,
      isLoading: false
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
