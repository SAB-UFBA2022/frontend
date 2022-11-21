import Sidebar from '../../../components/Sidebar'

export default function DiscenteDashboard() {
  return (
    <div className="flex h-screen flex-col gap-x-6 bg-gray-100 md:flex-row">
      <Sidebar userType="student" />
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <h1 className="font-poppins text-4xl font-semibold">
          Sistema de acompanhamento de bolsistas do PGCOMP
        </h1>
      </div>
    </div>
  )
}
