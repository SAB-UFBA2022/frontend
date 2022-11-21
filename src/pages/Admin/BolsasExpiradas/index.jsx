import Sidebar from '../../../components/Sidebar'
import List from '../../../components/Lists'

export default function AdminBolsasExpiradas() {
  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-100 md:flex-row">
      <Sidebar userType="admin" />
      <section className="flex w-full justify-center py-6">
        <div className="shadow-base h-max w-full space-y-8 rounded-lg bg-white p-6 lg:w-10/12">
          <div className="mb-8 flex items-center gap-x-4">
            <div className="rounded-md bg-green-400 p-3">
              <img src="/assets/icons/cancel.svg" alt="Expirado" className="w-7" />
            </div>
            <div>
              <h2 className="poppins text-xl font-semibold text-gray-900">Lista de bolsistas</h2>
              <p className="poppins font-medium text-gray-500">Bolsas expiradas</p>
            </div>
          </div>
          <List listType="expirado" />
        </div>
      </section>
    </div>
  )
}
