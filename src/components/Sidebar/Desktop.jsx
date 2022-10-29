import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import { linksAdmin } from '../../utils/linksAdmin'
import { linksDiscente } from '../../utils/linksDiscente'
import { linksDocente } from '../../utils/linksDocente'

export default function Desktop({ userType }) {
  const { logoutUser, toggleSidebar, expandSidebar } = useAppContext()
  const [links, setLinks] = useState([])

  useEffect(() => {
    switch (userType) {
      case 'admin':
        return setLinks(linksAdmin)
      case 'student':
        return setLinks(linksDiscente)
      case 'teacher':
        return setLinks(linksDocente)
      default:
        return setLinks([])
    }
  }, [userType])

  return (
    <aside
      className={`${
        expandSidebar ? 'w-60' : 'w-24'
      } durantion-300 block !min-h-screen overflow-auto bg-white pt-4 transition-all ease-in`}
    >
      <div className="flex w-full flex-col items-center gap-x-2 transition-all duration-300 ease-in">
        <header className="flex flex-col items-center gap-y-5 px-5 pb-11">
          <button
            type="button"
            onClick={toggleSidebar}
            className={`${
              expandSidebar ? 'self-end' : 'self-center'
            } border-l-4 border-transparent transition-all`}
          >
            <img src="/assets/icons/menu.svg" alt="Menu" />
          </button>
          <img
            src="/assets/logo.png"
            alt="Logo"
            className={`${expandSidebar ? 'block' : 'hidden'} w-52`}
          />
          <a
            href="/"
            className={`${
              expandSidebar ? 'block' : 'hidden'
            } text-center font-poppins text-base font-semibold`}
          >
            Sistema de acompanhamento de bolsistas
          </a>
        </header>
        <ul className=" flex w-full flex-col items-center">
          {links.map((link) => (
            <li key={link.name} className="w-full hover:bg-blue-100">
              <NavLink
                to={link.path}
                className={`${
                  expandSidebar
                    ? 'justify-start gap-x-2 py-4 px-5 text-base'
                    : 'flex-col gap-y-1 py-4 text-xs'
                } flex h-full w-full items-center border-l-4 border-transparent  outline-none transition-all duration-300 ease-in hover:border-blue-500 hover:bg-blue-100 focus:outline-none`}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#dbeafe' : 'transparent',
                  borderColor: isActive ? '#3b82f6' : 'transparent'
                })}
              >
                <img src={`/assets/icons/${link.icon}.svg`} alt={link.icon} />
                <span className="text-center font-inter font-medium text-gray-800">
                  {link.name}
                </span>
              </NavLink>
            </li>
          ))}

          <li className="w-full hover:bg-blue-100">
            <NavLink
              to="/"
              onClick={logoutUser}
              className={`${
                expandSidebar
                  ? 'justify-start gap-x-2 py-4 px-5 text-base'
                  : 'flex-col gap-y-1 py-4 text-xs'
              } flex h-full w-full items-center border-l-4 border-transparent  outline-none transition-all duration-300 ease-in hover:border-blue-500 hover:bg-blue-100 focus:outline-none`}
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#dbeafe' : 'transparent',
                borderColor: isActive ? '#3b82f6' : 'transparent'
              })}
            >
              <img src="/assets/icons/logout.svg" alt="Help" />
              <span className="font-inter font-medium text-gray-800">Sair</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  )
}
