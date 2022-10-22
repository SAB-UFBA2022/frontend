import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import { FormInput, PasswordInput, Button, Alert } from '../../components'

const initialState = {
  tax_id: '',
  password: ''
}

export default function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { user, userRole, isLoading, showAlert, displayAlert, loginUser } = useAppContext()

  const definePath = (role) => {
    switch (role) {
      case 'ADMIN':
        return '/admin/dashboard'
      case 'STUDENT':
        return '/discente/dashboard'
      case 'ADVISOR':
        return '/docente/dashboard'
      default:
        return '/'
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { tax_id, password } = values
    if (!tax_id || !password) {
      displayAlert()
    }
    const currentUser = { tax_id, password }
    loginUser(currentUser)
  }

  useEffect(() => {
    if (user && userRole) {
      setTimeout(() => {
        navigate(definePath(userRole), { replace: true })
      }, 2000)
    }
  }, [user, userRole, navigate])

  return (
    <div className="flex h-screen w-full items-center justify-center p-6 md:p-0">
      <section className="flex w-full flex-col items-center justify-center gap-y-7 md:w-11/12 lg:w-6/12">
        <img src="/assets/logo.png" alt="Logo" className="w-full max-w-[395px]" />
        <h1 className="max-w-[395px] text-center font-poppins text-xl font-semibold leading-7 text-gray-900 md:w-11/12 lg:w-6/12">
          Sistema de acompanhamento de bolsistas do PGCOMP
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[395px] flex-col gap-y-5 font-inter"
        >
          {showAlert && <Alert />}
          <FormInput
            label="CPF"
            type="text"
            id="tax_id"
            name="tax_id"
            value={values.tax_id}
            placeholder="Insira seu CPF"
            handleChange={handleChange}
            pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
            patternErro="CPF inválido, formato esperado: 000.000.000-00"
          />
          <PasswordInput
            label="Senha"
            id="password"
            name="password"
            value={values.password}
            placeholder="Digite sua senha"
            handleChange={handleChange}
          />
          <Link to="/esqueci-a-senha" className="text-base font-normal leading-6 text-blue-600">
            Esqueci a senha
          </Link>
          <div className="mt-3">
            <Button
              type="submit"
              icon="enter"
              color="blue"
              disabled={isLoading}
              loading={isLoading}
            >
              Entrar
            </Button>
          </div>
        </form>
        <p className="text-center text-base font-normal leading-6">
          Ainda não tem uma conta?{' '}
          <a href="/#" className="text-blue-600 transition-colors hover:text-blue-800">
            Cadastre-se
          </a>
        </p>
      </section>
    </div>
  )
}
