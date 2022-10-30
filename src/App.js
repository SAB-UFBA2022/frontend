import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ForgetPassword from './pages/ForgetPassword'
import RequireAuth from './context/requireAuth'
import DiscentePerfil from './pages/Discente/Perfil'
import {
  AdminDashboard,
  AdminLista,
  AdminBolsasExpiradas,
  DiscenteDashboard,
  DocenteDashboard,
  DocenteLista,
  DocenteBolsasExpiradas,
  Login,
  Page404,
  DiscenteEditarPerfil
} from './pages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Rotas de usuário discente */}
        <Route element={<RequireAuth allowedRoles="STUDENT" />}>
          <Route path="discente/dashboard" element={<DiscenteDashboard />} />
          <Route path="discente/profile" element={<DiscentePerfil />} />
          <Route path="discente/profile/edit" element={<DiscenteEditarPerfil />} />
        </Route>

        {/* Rotas de usuário docente */}
        <Route element={<RequireAuth allowedRoles="ADVISOR" />}>
          <Route path="docente/dashboard" element={<DocenteDashboard />} />
          <Route path="docente/lista" element={<DocenteLista />} />
          <Route path="docente/bolsas/expiradas" element={<DocenteBolsasExpiradas />} />
        </Route>

        {/* Rotas de usuário administrador */}
        <Route element={<RequireAuth allowedRoles="ADMIN" />}>
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="admin/lista" element={<AdminLista />} />
          <Route path="admin/bolsas/expiradas" element={<AdminBolsasExpiradas />} />
        </Route>

        {/* Qualquer rota */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}
