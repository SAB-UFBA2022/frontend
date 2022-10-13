import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppContext } from '../../../context/appContext'
import { Button, FormInput, Dropdown, DateInput } from '../../../components'
import Sidebar from '../../../components/Sidebar/Discente'
import Loading from '../../../components/Loading'

export default function DiscentePerfil() {
  const { userId, getLoggedStudent, isLoading, loggedStudent } = useAppContext()

  useEffect(() => {
    getLoggedStudent(userId)
  }, [userId])

  return (
    <div className="flex flex-col bg-gray-100 md:flex-row">
      <Sidebar />
      {isLoading || loggedStudent === null ? (
        <div className="flex w-full items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="mx-80 flex h-screen flex-col justify-center">
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold">Perfil</h1>
          </div>
          <div className="my-16 flex flex-wrap justify-between gap-7">
            <FormInput disabled label="Nome completo" value={loggedStudent.name} />
            <FormInput disabled label="CPF" value={loggedStudent.tax_id} />
            <FormInput disabled label="E-mail" value={loggedStudent.email} />
            <FormInput disabled label="Telefone" value={loggedStudent.phone_number} />
            <Dropdown
              disabled
              label="Curso"
              value={loggedStudent.course}
              list={[loggedStudent.course]}
            />
            {/* // TODO cade o orientador */}
            <Dropdown disabled label="Orientador" value={loggedStudent.name} />
            <FormInput disabled label="Link curriculo Lattes" value={loggedStudent.link_lattes} />
            <DateInput
              disabled
              label="Inicio da bolsa"
              value={new Date(loggedStudent.scholarship.scholarship_starts_at)}
            />
            <DateInput
              disabled
              label="Fim da bolsa"
              value={new Date(loggedStudent.scholarship.scholarship_ends_at)}
            />
            {/* // TODO a agencia */}
            <Dropdown disabled label="Agência" value={loggedStudent.scholarship.agency_id} />
          </div>
          <div className="flex justify-center">
            <Link to="edit" className=" w-80">
              <Button>Editar Perfil</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
