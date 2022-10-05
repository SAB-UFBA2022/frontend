import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormInput, Button } from '..'

const initialState = {
  matricula_id: ''
}

export default function CompleteCadastroForm() {
  const [values, setValues] = useState(initialState)
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const {
    register,
    formState: { errors }
  } = useForm()

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
      <label
        htmlFor="curso_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Curso
        <select
          id="curso_id"
          aria-invalid={errors.curso_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('curso_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        >
          <option value="mestrado">Mestrado</option>
          <option value="doutorado">Doutorado</option>
        </select>
        <span role="alert" className="font-inter text-xs text-red-500 md:text-sm">
          {errors?.curso_id?.message}
        </span>
      </label>
      <label
        htmlFor="modalidade_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Modalidade
        <select
          id="modalidade_id"
          aria-invalid={errors.modalidade_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('modalidade_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        >
          <option value="mestrado">Test</option>
        </select>
      </label>
      <label
        htmlFor="orientador_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Nome do orientador
        <select
          id="orientador_id"
          aria-invalid={errors.orientador_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('orientador_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        >
          <option value="mestrado">Test</option>
        </select>
      </label>
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
          pattern="(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])"
          patternErro="Lattes inválido, formato esperado: http://lattes.cnpq.br/9001443717831147"
          className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
      </div>
      <label
        htmlFor="agencia_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Agência
        <select
          id="agencia_id"
          aria-invalid={errors.agencia_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('agencia_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        >
          <option value="mestrado">Test</option>
        </select>
      </label>
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
          pattern="^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$"
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
