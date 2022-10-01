import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/Auth/AuthProvider'
import RequireAuth from './context/Auth/RequireAuth'
import Login from './pages/Login'
import DiscenteDashboard from './pages/Discente/Dashboard'
import DocenteDashboard from './pages/Docente/Dashboard'
import AdminDashboard from './pages/Admin/Dashboard'
import Page404 from './pages/Page404'
import Cadastro from './pages/Cadastro'
import CompleteCadastro from './pages/CompleteCadastro'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Login />} />

          {/* Rotas públicas */}
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/complete-cadastro" element={<CompleteCadastro />} />

          {/* Rotas de usuário discente */}
          <Route element={<RequireAuth allowedRoles="STUDENT" />}>
            <Route path="discente/dashboard" element={<DiscenteDashboard />} />
          </Route>

          {/* Rotas de usuário docente */}
          <Route element={<RequireAuth allowedRoles="TEACHER" />}>
            <Route path="docente/dashboard" element={<DocenteDashboard />} />
          </Route>

          {/* Rotas de usuário administrador */}
          <Route element={<RequireAuth allowedRoles="ADMIN" />}>
            <Route path="admin/dashboard" element={<AdminDashboard />} />
          </Route>

          {/* Qualquer rota */}
          <Route path="*" element={<Page404 />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  )
}
