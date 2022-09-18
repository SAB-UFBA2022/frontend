import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AuthContext } from '../../contexts/Auth/AuthProvider'
import Button from '../Button'

const LOGIN_URL = 'https://aux-bolsistas-dev.herokuapp.com/login'

export default function LoginForm() {
  const { auth, setAuth } = useContext(AuthContext)
  const navigate = (path) => <Navigate to={path} />

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [visiblity, setVisiblity] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(data) {
    try {
      setLoading(true)
      const response = await axios.post(LOGIN_URL, data)
      const { name, tax_id, role, access_token } = response.data
      setAuth({ name, tax_id, role, access_token })
      toast.success('Login realizado com sucesso!')
      if (auth) {
        navigate('/user/dashboard')
      }
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

  /* const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit)
    }
  } */

  const handleVisiblity = () => {
    setVisiblity(!visiblity)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[395px] flex-col gap-y-2 font-inter"
    >
      <label
        htmlFor="tax_id"
        className="flex h-[109px] flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800"
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
        htmlFor="password"
        className="relative flex h-[109px] flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800"
      >
        Senha
        <input
          type={visiblity ? 'text' : 'password'}
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
          onClick={handleVisiblity}
          type="button"
          aria-label="exibir ou ocultar senha"
        >
          <img
            src={`/assets/icons/${visiblity ? 'eyes-close.svg' : 'eye.svg'}`}
            alt="Eye Icon"
            width={24}
            height={24}
          />
        </button>
        <span role="alert" className="text-xs text-red-500 md:text-sm">
          {errors?.password?.message}
        </span>
      </label>
      <div className="mt-2">
        <Button type="submit" icon="enter" color="blue" loading={loading}>
          Entrar
        </Button>
      </div>
    </form>
  )
}
