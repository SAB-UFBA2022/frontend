import { useAppContext } from '../../context/appContext'
import CompleteCadastroForm from '../../components/CompleteCadastroForm'

export default function CompleteCadastro() {
  const { username } = useAppContext()
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 p-6 md:p-0">
      <section className="flex w-full flex-col items-center justify-center gap-y-7 md:w-11/12 lg:w-9/12">
        <h1 className="text-center font-poppins text-5xl font-semibold leading-8 text-gray-900">
          Olá, {username}
        </h1>
        <p className="mb-5 text-center font-poppins text-2xl font-semibold leading-8 text-gray-900">
          Complete seu cadastro para ter acesso a plataforma{' '}
        </p>
        <CompleteCadastroForm />
      </section>
    </div>
  )
}
