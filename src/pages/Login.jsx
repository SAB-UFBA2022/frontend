import LoginForm from '../components/LoginForm'

export default function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6 md:p-0">
      <div role="img" className="hidden h-screen bg-sky-200 md:block md:w-1/12 lg:w-6/12" />
      <section className="flex w-full flex-col items-center justify-center gap-y-7 md:w-11/12 lg:w-6/12">
        <img src="/assets/logo.png" alt="Logo" className="w-full max-w-[395px]" />
        <h1 className="text-center font-poppins text-2xl font-semibold leading-8 text-gray-900">
          Acompanhamento de Bolsistas
        </h1>
        <LoginForm />
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
