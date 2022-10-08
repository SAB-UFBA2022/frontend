import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { useAppContext } from '../../context/appContext'

export default function Page404() {
  const { userRole } = useAppContext()

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

  return (
    <main className="flex h-screen w-full items-center bg-sky-100 p-8">
      <section className="flex flex-col-reverse items-center justify-center gap-y-8 md:flex-row">
        <div className="flex w-full flex-col items-center space-y-8 text-center lg:w-5/12">
          <h1 className="font-poppins text-4xl font-medium text-blue-900 md:text-5xl xl:text-6xl">
            Página solicitada não encontrada.
          </h1>
          <Button type="button">
            <Link
              to={definePath(userRole)}
              className="flex h-full w-full items-center justify-center"
            >
              Voltar para a página inicial
            </Link>
          </Button>
        </div>
        <img src="/assets/images/error.png" alt="Error" className=" w-full lg:w-6/12" />
      </section>
    </main>
  )
}
