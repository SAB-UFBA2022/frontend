import List from '../../../components/Lists'
import Sidebar from '../../../components/Sidebar'

export default function AdminLista() {
  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-100 md:flex-row">
      <Sidebar userType="admin" />
      <section className="flex w-full justify-center py-6">
        <div className="shadow-base h-max w-full space-y-8 rounded-lg bg-white p-6 lg:max-w-[1120px]">
          <div className="mb-8 flex items-center gap-x-4">
            <div className="rounded-md bg-blue-400 p-3">
              <img src="/assets/icons/list.svg" alt="Lista" />
            </div>
            <div>
              <h2 className="poppins text-xl font-semibold text-gray-900">Lista de Bolsistas</h2>
            </div>
          </div>
          <List listType="finalizacao" />
        </div>
      </section>
    </div>
  )
}
