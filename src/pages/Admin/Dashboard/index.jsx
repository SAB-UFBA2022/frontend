import { Link } from 'react-router-dom'
import { useAppContext } from '../../../context/appContext'
import Button from '../../../components/Button'

export default function DiscenteDashboard() {
  const { name, logoutUser } = useAppContext()
  return (
    <div className="flex h-screen flex-col gap-x-6 bg-gray-100 md:flex-row">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <h1 className="font-poppins text-4xl font-semibold">Admin Dashboard</h1>
        <p className="text-4xl font-medium">Olá, {name}</p>
        <Link to="/" className="w-80" onClick={logoutUser}>
          <Button>Sair</Button>
        </Link>
      </div>
    </div>
  )
}
