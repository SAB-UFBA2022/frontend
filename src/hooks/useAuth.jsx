import { useContext } from 'react'
import AuthContext from '../context/Auth/AuthProvider'

const UseAuth = () => {
  return useContext(AuthContext)
}

export default UseAuth
