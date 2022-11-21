import Sidebar from '../../../components/Sidebar'
import List from '../../../components/Lists'

export default function DocenteLista() {
  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-100 md:flex-row">
      <Sidebar userType="teacher" />
      <section className="flex w-full justify-center py-6">
        <div className="shadow-base h-max w-full space-y-8 rounded-lg bg-white p-6 md:w-10/12 2xl:max-w-[1280px]">
          <div className="mb-8 flex items-center gap-x-4">
            <div className="rounded-md bg-yellow-400 p-3">
              <img src="/assets/icons/list.svg" alt="Lista" />
            </div>
            <h2 className="poppins text-xl font-semibold text-gray-900">Lista de bolsistas</h2>
          </div>
          <List listType="todos" />
        </div>
      </section>
    </div>
  )
}
