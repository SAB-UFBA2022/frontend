import { useAppContext } from '../../../context/appContext'
import Sidebar from '../../../components/Sidebar'

export default function DiscenteDashboard() {
  const { name } = useAppContext()
  return (
    <div className="flex h-screen flex-col gap-x-6 bg-gray-100 md:flex-row">
      <Sidebar userType="student" />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <h1 className="font-poppins text-4xl font-semibold">Discente Dashboard</h1>
        <p className="text-4xl font-medium">Olá, {name}</p>
      </div>
    </div>
  )
}
