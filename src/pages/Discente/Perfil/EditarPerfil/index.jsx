import { Link } from 'react-router-dom'
import { Button, FormInput, PasswordInput, Dropdown, DateInput } from '../../../../components'
import Sidebar from '../../../../components/Sidebar/Discente'

export default function DiscenteEditarPerfil() {
  return (
    <div className="flex flex-col bg-gray-100 md:flex-row">
      <Sidebar />
      <div className="mx-80 flex h-screen flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">Perfil</h1>
        </div>
        <div className="my-16 flex flex-wrap justify-between gap-7">
          <FormInput label="Nome completo" />
          <FormInput label="CPF" />
          <FormInput label="E-mail" />
          <FormInput label="Telefone" />
          <Dropdown label="Curso" />
          <Dropdown label="Orientador" />
          <FormInput label="Link curriculo Lattes" />
          <DateInput disabled label="Inicio da bolsa" />
          <DateInput disabled label="Fim da bolsa" />
          <Dropdown disabled label="Agência" />
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
