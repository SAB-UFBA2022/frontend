/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import { FormInput, Button, PasswordInput, Alert } from '..'

const initialState = {
  name_id: '',
  tax_id: '',
  email_id: '',
  phone_id: '',
  password: '',
  confirm_password: ''
}

export default function CadastroForm() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { displayAlert, showAlert, preSaveUser } = useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name_id, tax_id, email_id, phone_id, password, confirm_password } = values
    if (!name_id || !tax_id || !email_id || !phone_id || !password || !confirm_password) {
      displayAlert()
    }
    if (password !== confirm_password) {
      displayAlert()
    }
    const dataUser = { name_id, tax_id, email_id, phone_id, password }
    preSaveUser(dataUser)
  }

  useEffect(() => {
    if (
      !!initialState.name_id &&
      !!initialState.tax_id &&
      !!initialState.email_id &&
      !!initialState.phone_id &&
      !!initialState.password &&
      !!initialState.confirm_password &&
      initialState.password === initialState.confirm_password
    ) {
      setTimeout(() => {
        navigate('/complete-cadastro', { replace: true })
      }, 2000)
    }
  }, [initialState, navigate])

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-[395px] flex-col gap-y-2 font-inter">
      {showAlert && <Alert />}
      <FormInput
        label="Nome completo"
        type="text"
        id="name_id"
        name="name_id"
        value={values.name_id}
        placeholder="Insira seu nome"
        autoComplete="off"
        handleChange={handleChange}
        className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
      <FormInput
        label="CPF"
        type="text"
        id="tax_id"
        name="tax_id"
        value={values.tax_id}
        placeholder="Insira seu CPF"
        autoComplete="off"
        handleChange={handleChange}
        pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
        patternErro="CPF inválido, formato esperado: 000.000.000-00"
        className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
      <label
        htmlFor="contact_id"
        className="flex h-[89px] flex-col gap-y-0.5 text-base font-medium leading-7 text-gray-800"
      >
        Contato
        <div className="flex flex-1">
          <FormInput
            type="text"
            id="email_id"
            name="email_id"
            value={values.email_id}
            placeholder="Digite seu email"
            handleChange={handleChange}
            pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
            patternErro="Email inválido, formato esperado: seu_email@email.com"
            className="placeholder-gray-400::placeholder mr-2 w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6
            text-gray-800 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <FormInput
            type="number"
            id="phone_id"
            name="phone_id"
            value={values.phone_id}
            placeholder="Digite seu telefone"
            autoComplete="off"
            handleChange={handleChange}
            pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
            patternErro="Telefone inválido, formato esperado: 71999999999"
            className="placeholder-gray-400::placeholder ml-2 w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6
            text-gray-800 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
        </div>
      </label>
      <PasswordInput
        label="Senha"
        id="password"
        name="password"
        value={values.password}
        placeholder="Digite sua senha"
        handleChange={handleChange}
        className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 py-3 pl-4 pr-11 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
      <PasswordInput
        label="Confirmar senha"
        id="confirm_password"
        name="confirm_password"
        value={values.confirm_password}
        placeholder="Confirmar senha"
        handleChange={handleChange}
        className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 py-3 pl-4 pr-11 text-base font-normal leading-6 text-gray-800
        focus:outline-none focus:ring-1 focus:ring-sky-500"
      />
      <div className="mt-2">
        <Button type="submit" color="blue">
          Cadastrar
        </Button>
      </div>
    </form>
  )
}
