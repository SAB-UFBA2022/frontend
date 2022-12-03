import Sidebar from '../../../components/Sidebar'
import Button from '../../../components/Button'

export default function DocenteRelatorios() {
  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-100 md:flex-row">
      <Sidebar userType="teacher" />
      <section className="flex w-full justify-center py-6">
        <div className="shadow-base flex h-max w-full flex-col items-center space-y-8 rounded-lg bg-white p-6 pb-16 md:w-10/12 2xl:max-w-[1280px]">
          <div className="mb-8 flex items-center gap-x-4 self-start">
            <div className="rounded-md bg-red-400 p-3">
              <img src="/assets/icons/paper.svg" alt="Paper" />
            </div>
            <h2 className="poppins text-xl font-semibold text-gray-900">
              Relatório de bolsas alocadas
            </h2>
          </div>
          <Button>
            <a
              href={`${process.env.REACT_APP_BASE_URL}/v1/article/generate-pdf`}
              className="flex h-full w-full items-center justify-center"
            >
              Download PDF
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
