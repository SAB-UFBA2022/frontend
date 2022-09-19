import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import AuthContext from '../../../context/Auth/AuthProvider'

export default function DiscenteDashboard() {
  const { auth } = useContext(AuthContext)
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gray-100">
      <h1 className="font-poppins text-4xl font-semibold">Discente Dashboard</h1>
      <p className="text-4xl font-medium">Olá, {auth.name}</p>
      <Button type="button">
        <Link to="/" className="flex h-full w-full items-center justify-center">
          Voltar para a página inicial
        </Link>
      </Button>
    </div>
  )
}
