import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Button from '../Button'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [visiblity, setVisiblity] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(data) {
    try {
      setLoading(true)
      await axios('/login', {
        method: 'POST',
        body: JSON.stringify(data)
      }).then((res) => {
        if (res.status === 200) {
          reset()
          setSuccessMessage(true)
          setLoading(false)
        } else {
          setErrorMessage(true)
        }
      })
    } catch (error) {
      setErrorMessage(true)
    }
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

  useEffect(() => {
    setInterval(() => {
      setSuccessMessage(false)
      setErrorMessage(false)
    }, 10000)
  }, [])

  const handleClick = () => {
    setSuccessMessage(false)
    setErrorMessage(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit)
    }
  }

  const handleVisiblity = () => {
    setVisiblity(!visiblity)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[395px] flex-col gap-y-2 font-inter"
    >
      <div className="flex flex-col items-center gap-y-3 py-2">
        {successMessage && (
          <div className="flex w-full items-center justify-center gap-x-4 rounded-md bg-green-400 px-4 py-3">
            <p className="md:text-md text-gray-800">Sucesso</p>
            <button
              type="button"
              className="cursor-pointer border-none"
              onClick={handleClick}
              onKeyPress={handleKeyPress}
            >
              <img src="assets/icons/close.svg" alt="Fechar" />
            </button>
          </div>
        )}
        {errorMessage && (
          <div className="flex w-full items-center justify-center gap-x-4 rounded-md bg-red-400 px-4 py-3">
            <p className="text-md text-gray-800">Erro inesperado.Tente novamente.</p>
            <button
              type="button"
              className="cursor-pointer border-none"
              onClick={handleClick}
              onKeyPress={handleKeyPress}
            >
              <img src="assets/icons/close.svg" alt="Fechar" />
            </button>
          </div>
        )}
      </div>
      <label
        htmlFor="cpf"
        className="flex h-[109px] flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800"
      >
        CPF
        <input
          type="number"
          id="cpf"
          placeholder="Insira seu CPF"
          aria-invalid={errors.nome ? 'true' : 'false'}
          {...register('cpf', {
            required: {
              value: true,
              message: 'Campo Obrigatório.'
            },
            minLength: {
              value: 11,
              message: 'Insira número de CPF válido.'
            },
            maxLength: {
              value: 11,
              message: 'Insira número de CPF válido.'
            }
          })}
          className={`${
            errors.nome ? `focus:ring-red-500` : `focus:ring-sky-500`
          }'placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 `}
        />
        <span role="alert" className="font-inter text-xs text-red-500 md:text-sm">
          {errors?.cpf?.message}
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
