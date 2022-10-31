/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import { FormInput, Button, FormSelect } from '..'

const initialState = {
  matricula_id: '',
  curso_id: 'Mestrado',
  orientador_id: 1,
  curriculo_id: '',
  agencia_id: 1,
  inicio_id: '',
  fim_id: '',
  defesa_id: '',
  bolsa_id: ''
}

export default function CompleteCadastroForm() {
  // const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const [loading] = useState(false)
  const { displayAlert, saveUser, usertax_id, username, useremail, userphone, userpassword } =
    useAppContext()
  let flag = true
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {
      matricula_id,
      curso_id,
      orientador_id,
      curriculo_id,
      agencia_id,
      bolsa_id,
      inicio_id,
      fim_id,
      defesa_id
    } = values
    if (!matricula_id || !curriculo_id || !bolsa_id || !inicio_id || !fim_id || !defesa_id) {
      displayAlert()
      flag = false
    }
    const dataUser = {
      tax_id: usertax_id,
      enrollment_number: matricula_id,
      name: username,
      email: useremail,
      course: curso_id,
      link_lattes: curriculo_id,
      advisor_id: Number(orientador_id),
      enrollment_date_pgcomp: defesa_id,
      phone_number: userphone,
      password: userpassword,
      role: 'STUDENT',
      scholarship: {
        scholarship_starts_at: inicio_id,
        scholarship_ends_at: fim_id,
        salary: Number(bolsa_id),
        agency_id: Number(agencia_id),
        active: true,
        model: 'model teste'
      }
    }
    if (flag) {
      saveUser(dataUser)
      // navigate('/', { replace: true })
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="tablet:grid-cols-2 flex w-full flex-wrap items-center justify-center gap-y-2 font-inter"
    >
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormInput
          label="Número matrícula"
          type="text"
          id="matricula_id"
          name="matricula_id"
          value={values.matricula_id}
          placeholder="Digite seu número de matrícula"
          autoComplete="off"
          handleChange={handleChange}
          pattern="[0-9]{9}"
          patternErro="Matrícula inválida, formato esperado: 9 dígitos"
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <label className="text-base font-medium leading-7 text-gray-800">Curso</label>
        <select
          id="curso_id"
          name="curso_id"
          onChange={handleChange}
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
          defaultValue="Mestrado"
        >
          <option value="Mestrado">Mestrado</option>
          <option value="Doutorado">Doutorado</option>
        </select>
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormInput
          label="Data prevista para defesa"
          type="date"
          id="defesa_id"
          name="defesa_id"
          value={values.defesa_id}
          placeholder="Selecione data da defesa"
          autoComplete="off"
          handleChange={handleChange}
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormSelect
          label="Nome do orientador"
          id="orientador_id"
          name="orientador_id"
          value={{
            elements: {
              1: 'Fred Durão',
              10: 'Leobino'
            }
          }}
          defaultValue="Fred Durão"
          handleChange={handleChange}
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormInput
          label="Url Lattes"
          type="text"
          id="curriculo_id"
          name="curriculo_id"
          value={values.curriculo_id}
          placeholder="Url Lattes"
          autoComplete="off"
          handleChange={handleChange}
          pattern="https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$"
          patternErro="Lattes inválido, formato esperado: http://lattes.cnpq.br/9001443717831147"
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormSelect
          label="Agência"
          id="agencia_id"
          name="agencia_id"
          value={{
            elements: {
              1: 'CNPQ',
              2: 'Fapesb',
              3: 'Capes'
            }
          }}
          defaultValue="CNPQ"
          handleChange={handleChange}
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormInput
          label="Valor da bolsa"
          type="text"
          id="bolsa_id"
          name="bolsa_id"
          value={values.bolsa_id}
          placeholder="Digite o valor da bolsa"
          autoComplete="off"
          handleChange={handleChange}
          pattern="[0-9]{4}"
          patternErro="Bolsa inválida, formato esperado: 1000"
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormInput
          label="Início da bolsa"
          type="date"
          id="inicio_id"
          name="inicio_id"
          value={values.inicio_id}
          placeholder="Selecione data de início"
          autoComplete="off"
          handleChange={handleChange}
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormInput
          label="Fim da bolsa"
          type="date"
          id="fim_id"
          name="fim_id"
          value={values.fim_id}
          placeholder="Selecione data de término"
          autoComplete="off"
          handleChange={handleChange}
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className=" flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <Button type="submit" color="blue" loading={loading}>
          Salvar
        </Button>
      </div>
    </form>
  )
}
