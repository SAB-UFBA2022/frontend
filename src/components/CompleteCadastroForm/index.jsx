import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'

export default function CompleteCadastroForm() {
  const {
    register,
    formState: { errors }
  } = useForm()

  const [loading] = useState(false)

  return (
    <form className="tablet:grid-cols-2 flex w-full flex-wrap items-center justify-center gap-y-2 font-inter">
      <label
        htmlFor="tax_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Número matrícula
        <input
          type="number"
          id="tax_id"
          placeholder="Digite seu número de matrícula"
          aria-invalid={errors.tax_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('tax_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        />
        <span role="alert" className="font-inter text-xs text-red-500 md:text-sm">
          {errors?.tax_id?.message}
        </span>
      </label>
      <label
        htmlFor="curso_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Curso
        <select
          id="curso_id"
          placeholder="Digite seu número de matrícula"
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
          placeholder="Digite seu número de matrícula"
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
          placeholder="Digite seu número de matrícula"
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
      <label
        htmlFor="curriculo_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Link currículo Lattes
        <input
          type="number"
          id="curriculo_id"
          placeholder="Link Lattes"
          aria-invalid={errors.curriculo_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('curriculo_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        />
        <span role="alert" className="font-inter text-xs text-red-500 md:text-sm">
          {errors?.curriculo_id?.message}
        </span>
      </label>
      <label
        htmlFor="agencia_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Agência
        <select
          id="agencia_id"
          placeholder="Digite seu número de matrícula"
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
      <label
        htmlFor="bolsa_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Valor da bolsa
        <input
          type="number"
          id="bolsa_id"
          placeholder="Digite o valor da bolsa"
          aria-invalid={errors.bolsa_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('bolsa_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        />
        <span role="alert" className="font-inter text-xs text-red-500 md:text-sm">
          {errors?.bolsa_id?.message}
        </span>
      </label>
      <label
        htmlFor="inicio_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Início da bolsa
        <input
          type="date"
          id="inicio_id"
          placeholder="Selecione data de início"
          aria-invalid={errors.inicio_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('inicio_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        />
        <span role="alert" className="font-inter text-xs text-red-500 md:text-sm">
          {errors?.inicio_id?.message}
        </span>
      </label>
      <label
        htmlFor="fim_id"
        className="flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800"
      >
        Fim da bolsa
        <input
          type="date"
          id="fim_id"
          placeholder="Selecione data de término"
          aria-invalid={errors.fim_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('fim_id', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        />
        <span role="alert" className="font-inter text-xs text-red-500 md:text-sm">
          {errors?.fim_id?.message}
        </span>
      </label>
      <div className=" flex h-[109px] w-1/3 flex-col gap-y-1.5 px-2 text-base font-medium leading-7 text-gray-800">
        <Button type="submit" color="blue" loading={loading}>
          Salvar
        </Button>
      </div>
    </form>
  )
}
