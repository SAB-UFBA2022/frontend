import { Button, FormInput, Dropdown, DateInput } from '../../../components'
import Sidebar from '../../../components/Sidebar/Discente'

export default function DiscentePerfil() {
  return (
    <div className="flex flex-col bg-gray-100 md:flex-row">
      <Sidebar />
      <div className="mx-80 flex h-screen flex-col justify-center">
        <div className="flex flex-wrap justify-between gap-7">
          <FormInput label="Nome Completo" />
          <FormInput label="CPF" />
          <FormInput label="E-mail" />
          <FormInput label="Telefone" />
          <Dropdown label="Curso" />
          <Dropdown label="Orientador" />
          <FormInput label="Curriculo Lattes" />
          <DateInput label="Inicio da Bolsa" />
          <DateInput label="Fim da Bolsa" />
          <Dropdown label="Agência" />
        </div>
        <div className="flex justify-center">
          <Button>Editar Perfil</Button>
        </div>
      </div>
    </div>
  )
}
