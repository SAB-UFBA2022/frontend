import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RequireAuth from './context/requireAuth'
import {
  AdminDashboard,
  AdminLista,
  AdminBolsasExpiradas,
  AdminRelatorios,
  DiscenteDashboard,
  DiscenteEstenderBolsa,
  DocenteDashboard,
  ForgetPassword,
  DocenteLista,
  DocenteBolsasExpiradas,
  DocenteRelatorios,
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
        <Route element={<RequireAuth allowedRoles="STUDENT" />}>
          <Route path="discente/dashboard" element={<DiscenteDashboard />} />
          <Route path="discente/estender" element={<DiscenteEstenderBolsa />} />
        </Route>

        {/* Rotas de usuário docente */}
        <Route element={<RequireAuth allowedRoles="ADVISOR" />}>
          <Route path="docente/dashboard" element={<DocenteDashboard />} />
          <Route path="docente/lista" element={<DocenteLista />} />
          <Route path="docente/bolsas/expiradas" element={<DocenteBolsasExpiradas />} />
          <Route path="docente/relatorios" element={<DocenteRelatorios />} />
        </Route>

        {/* Rotas de usuário administrador */}
        <Route element={<RequireAuth allowedRoles="ADMIN" />}>
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="admin/lista" element={<AdminLista />} />
          <Route path="admin/bolsas/expiradas" element={<AdminBolsasExpiradas />} />
          <Route path="admin/relatorios" element={<AdminRelatorios />} />
        </Route>

        {/* Qualquer rota */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}
