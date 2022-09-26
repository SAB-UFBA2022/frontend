import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAppContext } from './appContext'

function RequireAuth({ allowedRoles }) {
  const { name, userRole } = useAppContext()
  const location = useLocation()

  return allowedRoles === userRole ? (
    <Outlet />
  ) : name ? (
    <Navigate to="/404" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}

export default RequireAuth
