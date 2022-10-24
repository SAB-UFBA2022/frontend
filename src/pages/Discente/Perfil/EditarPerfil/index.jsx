import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppContext } from '../../../../context/appContext'
import { Button, FormInput, PasswordInput, Dropdown, DateInput } from '../../../../components'
import Sidebar from '../../../../components/Sidebar/Discente'

export default function DiscentePerfil() {
  const { userId, getLoggedStudent, loggedStudent } = useAppContext()

  useEffect(() => {
    getLoggedStudent(userId)
  }, [userId])

  return (
    <div className="flex flex-col bg-gray-100 md:flex-row">
      <Sidebar />
      <div className="mx-80 flex h-screen flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">Perfil</h1>
        </div>
        <div className="my-16 flex flex-wrap justify-between gap-7">
          <FormInput label="Nome completo" value={loggedStudent.name} />
          <FormInput label="CPF" value={loggedStudent.tax_id} />
          <FormInput label="E-mail" value={loggedStudent.email} />
          <FormInput label="Telefone" value={loggedStudent.phone_number} />
          <Dropdown label="Curso" value={loggedStudent.course} list={[loggedStudent.course]} />
          {/* // TODO cade o orientador */}
          <Dropdown label="Orientador" value="Fred Durão" list={['Fred Durao', 'Outro']} />
          <FormInput label="Link curriculo Lattes" value={loggedStudent.link_lattes} />
          <DateInput
            label="Inicio da bolsa"
            value={new Date(loggedStudent.scholarship.scholarship_starts_at)}
          />
          <DateInput
            label="Fim da bolsa"
            value={new Date(loggedStudent.scholarship.scholarship_ends_at)}
          />
          {/* // TODO a agencia */}
          <Dropdown label="Agência" value="Capes" list={['Capes', 'CNPQ', 'Fapesb']} />
          <PasswordInput label="Senha" />
          <PasswordInput label="Confirmar senha" />
        </div>
        <div className="flex justify-center">
          <Link to="/discente/profile" className=" w-80">
            <Button color="green">Salvar</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
