import Sidebar from '../../../components/Sidebar/Docente'
import ScholarshipExpired from '../../../components/Lists/Scholarship/Expired'

export default function BolsasExpiradas() {
  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-100 md:flex-row">
      <Sidebar />
      <section className="w-full py-6 md:ml-auto md:max-w-[70vw] xl:max-w-[80vw]">
        <div className="shadow-base mb-6 w-full space-y-8 lg:w-10/12">
          <div className="shadow-base rounded-lg bg-white p-8">
            <div className="mb-8 flex items-center gap-x-4">
              <div className="rounded-md bg-blue-400 p-3">
                <img src="/assets/icons/cancel.svg" alt="Expirado" className="w-7" />
              </div>
              <h2 className="poppins text-xl font-semibold text-gray-900">
                Estudantes com bolsas expiradas
              </h2>
            </div>
            <ScholarshipExpired />
          </div>
        </div>
      </section>
    </div>
  )
}
