/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import { FormInput, Button, PasswordInput, Alert } from '..'

const initialState = {
  name_id: '',
  tax_id: '',
  email_id: '',
  phone_id: '',
  password: '',
  confirm: ''
}

export default function CadastroForm() {
  const [values, setValues] = useState(initialState)
  const { displayAlert, showAlert } = useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name_id, tax_id, email_id, phone_id, password, confirm } = values
    if (!name_id || !tax_id || !email_id || !phone_id || !password || !confirm) {
      displayAlert()
    }
    if (password !== confirm) {
      displayAlert()
    }
    // const saveUser = { name_id, tax_id, email_id, phone_id, password, confirm }
    // saveUser(saveUser)
  }

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
        className="placeholder-gray-400::placeholder w-full max-w-[395px] rounded-lg border border-gray-400 px-4 py-3 text-base font-normal leading-6 text-gray-800
          focus:outline-none focus:ring-1 focus:ring-sky-500 "
      />
      <FormInput
        label="CPF"
        type="number"
        id="tax_id"
        name="tax_id"
        value={values.tax_id}
        placeholder="Insira seu CPF"
        autoComplete="off"
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
        id="confirm"
        name="confirm"
        value={values.confirm}
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
