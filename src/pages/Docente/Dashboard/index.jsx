import { Link } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar/Docente'

export default function DiscenteDashboard() {
  return (
    <div className="flex h-screen flex-col gap-x-6 overflow-y-auto bg-gray-100 md:flex-row">
      <Sidebar />
      <div className="ml-auto flex w-full flex-col items-center justify-center gap-y-8 overflow-y-auto">
        <div className="space-y-1.5 text-center">
          <h1 className="font-poppins text-4xl font-semibold">Dashboard</h1>
          <p className="font-inter text-base font-medium">
            Escolha uma das opções para seguir na plataforma
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <Link
            to="/docente/lista"
            className="flex h-64 w-72 flex-col items-center justify-center gap-y-4 rounded-md bg-blue-400 transition-colors duration-300 hover:bg-blue-500"
          >
            <img src="/assets/icons/list.svg" alt="List" className="w-16" />
            <p className="font-poppins text-xl font-medium">Lista de estudantes</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
