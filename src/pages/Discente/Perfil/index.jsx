import { Link } from 'react-router-dom'
import { Button, FormInput, Dropdown, DateInput } from '../../../components'
import Sidebar from '../../../components/Sidebar/Discente'

export default function DiscentePerfil() {
  return (
    <div className="flex flex-col bg-gray-100 md:flex-row">
      <Sidebar />
      <div className="mx-80 flex h-screen flex-col justify-center">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">Perfil</h1>
        </div>
        <div className="my-16 flex flex-wrap justify-between gap-7">
          <FormInput disabled label="Nome completo" />
          <FormInput disabled label="CPF" />
          <FormInput disabled label="E-mail" />
          <FormInput disabled label="Telefone" />
          <Dropdown disabled label="Curso" />
          <Dropdown disabled label="Orientador" />
          <FormInput disabled label="Link curriculo Lattes" />
          <DateInput disabled label="Inicio da bolsa" />
          <DateInput disabled label="Fim da bolsa" />
          <Dropdown disabled label="Agência" />
        </div>
        <div className="flex justify-center">
          <Link to="editar" className=" w-80">
            <Button>Editar Perfil</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
