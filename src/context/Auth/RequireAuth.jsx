import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './AuthProvider'

function RequireAuth({ allowedRoles }) {
  const { auth } = useContext(AuthContext)
  const location = useLocation()

  return Object.keys(auth).includes('access_token') && allowedRoles === auth.role ? (
    <Outlet />
  ) : auth?.name ? (
    <Navigate to="/404" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}

export default RequireAuth
