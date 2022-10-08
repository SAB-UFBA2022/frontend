import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ForgetPassword from './pages/ForgetPassword'
import RequireAuth from './context/requireAuth'
import DiscentePerfil from './pages/Discente/Perfil'
import {
  AdminDashboard,
  DiscenteDashboard,
  DocenteDashboard,
  DocenteLista,
  Login,
  Page404
} from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/esqueci-a-senha" element={<ForgetPassword />} />

        {/* Rotas de usuário discente */}
        <Route>
          <Route path="discente/dashboard" element={<DiscenteDashboard />} />
          <Route path="discente/perfil" element={<DiscentePerfil />} />
        </Route>

        {/* Rotas de usuário docente */}
        <Route element={<RequireAuth allowedRoles="ADVISOR" />}>
          <Route path="docente/dashboard" element={<DocenteDashboard />} />
          <Route path="docente/lista" element={<DocenteLista />} />
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
  )
}
