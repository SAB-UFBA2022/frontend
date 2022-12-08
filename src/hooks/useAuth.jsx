import { useContext } from 'react'
import AuthContext from '../context/requireAuth'

const UseAuth = () => {
  return useContext(AuthContext)
}

export default UseAuth
