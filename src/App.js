import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './contexts/Auth/AuthProvider'
import Login from './pages/Login'
import UserDashboard from './pages/User/Dashboard'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={3000} />
    </AuthProvider>
  )
}
