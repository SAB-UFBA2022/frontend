import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'

export default function Discente() {
  const { logoutUser } = useAppContext()
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-800 antialiased">
      <div className="fixed top-0 left-0 flex h-full w-64 flex-col border-r bg-white">
        <div className="flex h-[186px] flex-col items-center justify-center gap-y-5 border-b">
          <img src="/assets/logo.png" alt="Logo" className="w-full max-w-[200px]" />
          <Link to="/discente/dashboard">
            <h2 className=" max-w-[180px] text-center font-poppins text-xl font-semibold text-gray-900 ">
              Acompanhamento de Bolsistas
            </h2>
          </Link>
        </div>
        <div className="flex-grow overflow-y-auto overflow-x-hidden">
          <ul className="flex flex-col space-y-3 py-4">
            <li>
              <Link
                to="/discente/dashboard"
                className="relative flex h-12 flex-row items-center border-l-4 border-transparent pr-6 text-gray-600 hover:border-blue-500 hover:bg-blue-100 hover:text-gray-800 focus:outline-none"
              >
                <span className="ml-4 inline-flex items-center justify-center">
                  <img src="/assets/icons/home.svg" alt="Dashboard" className="w-6" />
                </span>
                <span className="ml-2.5 font-inter text-base font-medium leading-6 text-gray-800">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/discente/dashboard"
                className="relative flex h-12 flex-row items-center border-l-4 border-transparent pr-6 text-gray-600 hover:border-blue-500 hover:bg-blue-100 hover:text-gray-800 focus:outline-none"
              >
                <span className="ml-4 inline-flex items-center justify-center">
                  <img src="/assets/icons/paper.svg" alt="Paper" className="w-5" />
                </span>
                <span className="ml-2.5 font-inter text-base font-medium leading-6 text-gray-800">
                  Lattes
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/discente/dashboard"
                className="relative flex h-12 flex-row items-center border-l-4 border-transparent pr-6 text-gray-600 hover:border-blue-500 hover:bg-blue-100 hover:text-gray-800 focus:outline-none"
              >
                <span className="ml-4 inline-flex items-center justify-center">
                  <img src="/assets/icons/write.svg" alt="write" className="w-6" />
                </span>
                <span className="ml-2.5 font-inter text-base font-medium leading-6 text-gray-800">
                  Artigos
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/discente/lista"
                className="relative flex h-12 flex-row items-center border-l-4 border-transparent pr-6 text-gray-600 hover:border-blue-500 hover:bg-blue-100 hover:text-gray-800 focus:outline-none"
              >
                <span className="ml-4 inline-flex items-center justify-center">
                  <img src="/assets/icons/list.svg" alt="List" className="w-6" />
                </span>
                <span className="ml-2.5 font-inter text-base font-medium leading-6 text-gray-800">
                  Lista de Bolsistas
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/discente/dashboard"
                className="relative flex h-12 flex-row items-center border-l-4 border-transparent pr-6 text-gray-600 hover:border-blue-500 hover:bg-blue-100 hover:text-gray-800 focus:outline-none"
              >
                <span className="ml-4 inline-flex items-center justify-center">
                  <img src="/assets/icons/extension.svg" alt="Extension" className="w-6" />
                </span>
                <span className="ml-2.5 font-inter text-base font-medium leading-6 text-gray-800">
                  Extensão
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/discente/dashboard"
                className="relative flex h-12 flex-row items-center border-l-4 border-transparent pr-6 text-gray-600 hover:border-blue-500 hover:bg-blue-100 hover:text-gray-800 focus:outline-none"
              >
                <span className="ml-4 inline-flex items-center justify-center">
                  <img src="/assets/icons/profile.svg" alt="Profile" className="w-6" />
                </span>
                <span className="ml-2.5 font-inter text-base font-medium leading-6 text-gray-800">
                  Perfil
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="relative flex h-12 flex-row items-center border-l-4 border-transparent pr-6 text-gray-600 hover:border-blue-500 hover:bg-blue-100 hover:text-gray-800 focus:outline-none"
                onClick={logoutUser}
              >
                <span className="ml-4 inline-flex items-center justify-center">
                  <img src="/assets/icons/logout.svg" alt="Logout" className="w-6" />
                </span>
                <span className="ml-2.5 font-inter text-base font-medium leading-6 text-gray-800">
                  Sair
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
