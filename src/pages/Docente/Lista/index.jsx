import { useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import Sidebar from '../../../components/Sidebar/Docente'
import Loading from '../../../components/Loading'
import Paginacao from '../../../components/Paginacao'

export default function DiscenteLista() {
  const { getStudents, students, isLoading, totalItems, currentPage, totalPages } = useAppContext()

  useEffect(() => {
    getStudents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const formatDate = (date) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('pt-BR')
  }

  return (
    <div className="flex h-screen flex-col overflow-auto bg-gray-100 md:flex-row">
      <Sidebar />
      <section className="w-full p-6 py-6 md:ml-auto md:max-w-[70vw] xl:max-w-[80vw]">
        <div className="shadow-base w-full space-y-8 lg:w-10/12">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <h3 className="font-poppins text-lg font-medium text-gray-800">
                {totalItems} Estudante{students.length > 1 && 's'} encontrados
              </h3>
              <div className="grid gap-4 xl:grid-cols-2">
                {students.map((student) => {
                  return (
                    <article
                      key={student.id}
                      className="shadow-base h-[300px] w-full overflow-y-auto rounded-lg bg-white p-4 text-left font-inter text-base leading-7 text-gray-600"
                    >
                      <div className="flex items-center gap-x-4 pb-2">
                        <div
                          className={`${
                            student.id % 2 === 0 ? 'bg-blue-100' : 'bg-red-100'
                          } max-w-max rounded-md p-3`}
                        >
                          <img src="/assets/icons/person.svg" alt="Person" className="w-6" />
                        </div>
                        <div>
                          <h2 className="font-poppins text-xl font-semibold text-gray-900">
                            {student.name}
                          </h2>
                          <p className="font-inter">{student.course}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="grid w-full grid-cols-2 content-between gap-y-4 pt-4">
                        <div className="flex items-center gap-x-2">
                          <img src="/assets/icons/email.svg" alt="Email" className="w-5" />
                          <p className="font-inter text-sm font-semibold text-gray-800">E-mail</p>
                        </div>
                        <p className="font-inter text-sm text-gray-800">{student.email}</p>
                        <div className="flex items-center gap-x-2">
                          <img src="/assets/icons/telephone.svg" alt="Telephone" className="w-5" />
                          <p className="font-inter text-sm font-semibold text-gray-800">Telefone</p>
                        </div>
                        <p className="font-inter text-sm text-gray-800">{student.phone_number}</p>
                        <div className="flex items-center gap-x-2">
                          <img
                            src="/assets/icons/university.svg"
                            alt="University"
                            className="w-5"
                          />
                          <p className="font-inter text-sm font-semibold text-gray-800">
                            Número de matrícula
                          </p>
                        </div>
                        <p className="font-inter text-sm text-gray-800">
                          {student.enrollment_number}
                        </p>
                        <div className="flex items-center gap-x-2">
                          <img src="/assets/icons/calendar.svg" alt="Calendar" className="w-5" />
                          <p className="pr-1 font-inter text-sm font-semibold text-gray-800">
                            Data de matrícula PGCOMP
                          </p>
                        </div>
                        <p className="font-inter text-sm text-gray-800">
                          {formatDate(student.enrollment_date_pgcomp)}
                        </p>
                        <div className="flex items-center gap-x-2">
                          <img src="/assets/icons/chain.svg" alt="Chain" className="w-5" />
                          <a
                            href={`https://${student.link_lattes}`}
                            className="font-inter text-sm font-semibold text-blue-500"
                          >
                            Lattes
                          </a>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </>
          )}
          {totalPages > 1 && <Paginacao />}
        </div>
      </section>
    </div>
  )
}
