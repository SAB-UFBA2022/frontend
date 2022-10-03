import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import AuthContext from '../../context/Auth/AuthProvider'
import Button from '../Button'

const { CADASTRO_URL } = process.env

export default function CadastroForm() {
  const { setAuth } = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [visiblityPassword, setVisiblityPassword] = useState(false)
  const [visiblityConfirm, setVisiblityConfirm] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleVisiblityPassword = () => {
    setVisiblityPassword(!visiblityPassword)
  }

  const handleVisiblityConfirm = () => {
    setVisiblityConfirm(!visiblityConfirm)
  }

  const definePath = () => {
    return '/'
  }

  async function onSubmit(data) {
    try {
      setLoading(true)
      const response = await axios.post(CADASTRO_URL, data)
      const { name_id, tax_id, contact_id, password, confirm } = response.data
      setAuth({ name_id, tax_id, contact_id, password, confirm })
      toast.success('Login realizado com sucesso!')
      navigate(definePath(), { replace: true })
      reset()
    } catch (error) {
      if (!error?.response) {
        toast.error('Sem resposta do servidor')
      } else if (error?.response?.status === 400) {
        toast.error('CPF ou senha inválidas')
      } else if (error?.response?.status === 401) {
        toast.error('Login não autorizado')
      } else {
        toast.error('Erro inesperado.Tente novamente.')
      }
    }

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[395px] flex-col gap-y-2 font-inter"
    >
      <label
        htmlFor="name_id"
        className="flex h-[89px] flex-col gap-y-0.5 text-base font-medium leading-7 text-gray-800"
      >
        Nome completo
        <input
          type="text"
          id="name_id"
          placeholder="Insira seu nome"
          aria-invalid={errors.name_id ? 'true' : 'false'}
          autoComplete="off"
          {...register('name_id', {
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
          {errors?.name_id?.message}
        </span>
      </label>
      <label
        htmlFor="tax_id"
        className="flex h-[89px] flex-col gap-y-0.5 text-base font-medium leading-7 text-gray-800"
      >
        CPF
        <input
          type="number"
          id="tax_id"
          placeholder="Insira seu CPF"
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
        htmlFor="contact_id"
        className="flex h-[89px] flex-col gap-y-0.5 text-base font-medium leading-7 text-gray-800"
      >
        Contato
        <div className="flex flex-1">
          <input
            type="text"
            id="email_id"
            placeholder="Digite seu email"
            aria-invalid={errors.email_id ? 'true' : 'false'}
            autoComplete="off"
            {...register('email_id', {
              required: {
                value: true,
                message: 'Campo Obrigatório.'
              }
            })}
            className={`${
              errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
            }'placeholder-gray-400::placeholder mr-2 w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6
          text-gray-800 focus:outline-none focus:ring-1 focus:ring-sky-500`}
          />
          <input
            type="number"
            id="phone_id"
            placeholder="Digite seu telefone"
            aria-invalid={errors.phone_id ? 'true' : 'false'}
            autoComplete="off"
            {...register('phone_id', {
              required: {
                value: true,
                message: 'Campo Obrigatório.'
              }
            })}
            className={`${
              errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
            }'placeholder-gray-400::placeholder ml-2 w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6
          text-gray-800 focus:outline-none focus:ring-1 focus:ring-sky-500`}
          />
        </div>
        <span role="alert" className="font-inter text-xs text-red-500 md:text-sm">
          {errors?.contact_id?.message}
        </span>
      </label>
      <label
        htmlFor="password"
        className="relative flex h-[89px] flex-col gap-y-0.5 text-base font-medium leading-7 text-gray-800"
      >
        Senha
        <input
          type={visiblityPassword ? 'text' : 'password'}
          id="password"
          placeholder="Digite sua senha"
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            },
            minLength: {
              value: 3,
              message: 'Insira uma senha válida.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }' placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 py-3 pl-4 pr-11 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        />
        <button
          className="absolute right-4 top-12"
          onClick={handleVisiblityPassword}
          type="button"
          aria-label="exibir ou ocultar senha"
        >
          <img
            src={`/assets/icons/${visiblityPassword ? 'eyes-close.svg' : 'eye.svg'}`}
            alt="Eye Icon"
            width={24}
            height={24}
          />
        </button>
        <span role="alert" className="text-xs text-red-500 md:text-sm">
          {errors?.password?.message}
        </span>
      </label>
      <label
        htmlFor="confirm"
        className="relative flex h-[89px] flex-col gap-y-0.5 text-base font-medium leading-7 text-gray-800"
      >
        Confirmar senha
        <input
          type={visiblityConfirm ? 'text' : 'confirm'}
          id="confirm"
          placeholder="Confirmar senha"
          aria-invalid={errors.confirm ? 'true' : 'false'}
          {...register('confirm', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            },
            minLength: {
              value: 3,
              message: 'Insira uma senha válida.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }' placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 py-3 pl-4 pr-11 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        />
        <button
          className="absolute right-4 top-12"
          onClick={handleVisiblityConfirm}
          type="button"
          aria-label="exibir ou ocultar senha"
        >
          <img
            src={`/assets/icons/${visiblityConfirm ? 'eyes-close.svg' : 'eye.svg'}`}
            alt="Eye Icon"
            width={24}
            height={24}
          />
        </button>
        <span role="alert" className="text-xs text-red-500 md:text-sm">
          {errors?.confirm?.message}
        </span>
      </label>
      <div className="mt-2">
        <Button type="submit" color="blue" loading={loading}>
          Cadastrar
        </Button>
      </div>
    </form>
  )
}
