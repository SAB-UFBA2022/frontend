import { useState } from 'react'
import { FormInput, Button, FormSelect } from '..'

const initialState = {
  matricula_id: '',
  curso_id: '',
  modalidade_id: '',
  orientador_id: '',
  curriculo_id: '',
  agencia_id: '',
  inicio_id: '',
  fim_id: ''
}

export default function CompleteCadastroForm() {
  const [values, setValues] = useState(initialState)
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const [loading] = useState(false)

  return (
    <form className="tablet:grid-cols-2 flex w-full flex-wrap items-center justify-center gap-y-2 font-inter">
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
          patternErro="Matrícula inválida, formato esperado: 111111000"
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormSelect
          label="Curso"
          id="curso_id"
          name="curso_id"
          value={{ elements: ['mestrado', 'doutorado'] }}
          handleChange={handleChange}
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormSelect
          label="Modalidade"
          id="modalidade_id"
          name="modalidade_id"
          value={{
            elements: ['Mestrado - GM', 'Doutorado - GD', 'Doutorado Sanduíche no país - SWP']
          }}
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
            elements: ['teste']
          }}
          handleChange={handleChange}
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <div className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <FormInput
          label="Link currículo Lattes"
          type="text"
          id="curriculo_id"
          name="curriculo_id"
          value={values.curriculo_id}
          placeholder="Link Lattes"
          autoComplete="off"
          handleChange={handleChange}
          // pattern="(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])"
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
            elements: ['teste']
          }}
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
          // pattern="^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$"
          patternErro="Bolsa inválida, formato esperado: R$1000"
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
