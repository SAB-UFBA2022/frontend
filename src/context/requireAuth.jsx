import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useAppContext } from './appContext'

function RequireAuth({ allowedRoles }) {
  const { userRole } = useAppContext()
  const location = useLocation()

  return allowedRoles === userRole ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}

export default RequireAuth
