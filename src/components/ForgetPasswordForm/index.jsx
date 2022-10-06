import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import { FormInput, Button, Alert } from '..'

const initialState = {
  email: ''
}

export default function ForgetPasswordForm() {
  const [values, setValues] = useState(initialState)
  const { isLoading, showAlert, displayAlert, forgetPassword } = useAppContext()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email } = values
    if (!email) {
      displayAlert()
    }
    const forgestPasswordData = { email }
    forgetPassword(forgestPasswordData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-[395px] flex-col gap-y-2 font-inter">
      {showAlert && <Alert />}
      <FormInput
        label="E-mail"
        type="text"
        id="email"
        name="email"
        value={values.email}
        placeholder="Insira seu E-mail"
        handleChange={handleChange}
        // pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
        patternErro="CPF inválido, formato esperado: seu_email@email.com"
      />
      <div className="mt-2">
        <Button type="submit" color="blue" loading={isLoading}>
          Recuperar senha
        </Button>
      </div>
    </form>
  )
}
