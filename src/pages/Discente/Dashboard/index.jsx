import { useAppContext } from '../../../context/appContext'
import Sidebar from '../../../components/Sidebar/Discente'

export default function DiscenteDashboard() {
  const { name } = useAppContext()
  return (
    <div className="flex h-screen gap-x-6 bg-gray-100">
      <div className="w-[400px]">
        <Sidebar />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <h1 className="font-poppins text-4xl font-semibold">Discente Dashboard</h1>
        <p className="text-4xl font-medium">Olá, {name}</p>
      </div>
    </div>
  )
}
