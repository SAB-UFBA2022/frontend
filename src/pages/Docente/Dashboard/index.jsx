import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import { useAppContext } from '../../../context/appContext'

export default function DocenteDashboard() {
  const { name } = useContext(useAppContext)
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gray-100">
      <h1 className="font-poppins text-4xl font-semibold">Docente Dashboard</h1>
      <p className="text-4xl font-medium">Olá, {name}</p>
      <Button type="button">
        <Link to="/" className="flex h-full w-full items-center justify-center">
          Voltar para a página inicial
        </Link>
      </Button>
    </div>
  )
}
