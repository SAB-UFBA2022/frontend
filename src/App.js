import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/esqueci-a-senha" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  )
}
