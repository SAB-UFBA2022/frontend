import { useContext } from 'react'
import { AuthContext } from '../../../contexts/Auth/AuthProvider'

export default function Dashboard() {
  const { auth } = useContext(AuthContext)
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{auth?.tax_id}</h2>
    </div>
  )
}
