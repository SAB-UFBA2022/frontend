import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { Button, Alert } from '..'

export default function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [successMessage, setSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  async function onSubmit(data) {
    try {
      setLoading(true)
      await axios('/forgetpassword', {
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-[395px] flex-col gap-y-2 font-inter"
    >
      <div className="flex flex-col items-center gap-y-3 py-2">
        {successMessage && <Alert alertType="error" alertText="Teste de erro" />}
        {errorMessage && <Alert alertType="error" alertText="Teste de erro" />}
      </div>
      <label
        htmlFor="email"
        className="flex h-[109px] flex-col gap-y-1.5 text-base font-medium leading-7 text-gray-800"
      >
        E-mail
        <input
          type="text"
          id="email"
          placeholder="Insira seu E-mail"
          aria-invalid={errors.nome ? 'true' : 'false'}
          {...register('email', {
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
          {errors?.email?.message}
        </span>
      </label>
      <div className="mt-2">
        <Button type="submit" color="blue" loading={loading}>
          Recuperar senha
        </Button>
      </div>
    </form>
  )
}
