import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import { linksAdmin } from '../../utils/linksAdmin'
import { linksDiscente } from '../../utils/linksDiscente'
import { linksDocente } from '../../utils/linksDocente'

export default function Mobile({ userType }) {
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
    <header className="mb-5 space-y-5 bg-white p-5 pb-2">
      <div className="flex w-full items-center justify-between">
        <Link to="/admin/dashboard" className="w-32 justify-self-center">
          <img src="/assets/logo.png" alt="Logo" />
        </Link>
        <Link
          to="/admin/dashboard"
          className="hidden w-56 text-center text-sm font-semibold sm:block"
        >
          Sistema de acompanhamento de bolsistas
        </Link>
        <button type="button" onClick={toggleSidebar}>
          <img src="/assets/icons/menu.svg" alt="Menu" />
        </button>
      </div>
      <nav className={`${expandSidebar ? 'h-max' : 'h-0'} transition-all`}>
        <ul className={`${expandSidebar ? 'opacity-1' : 'opacity-0'} transition-all`}>
          {links.map((link) => (
            <li key={link.name} className={`${expandSidebar ? 'block' : 'hidden'} transition-all`}>
              <NavLink
                to={link.path}
                className="flex w-full items-center gap-x-3 border-l-4 border-transparent p-3 outline-none "
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#dbeafe' : 'transparent',
                  borderColor: isActive ? '#3b82f6' : 'transparent'
                })}
              >
                <img src={`/assets/icons/${link.icon}.svg`} alt={link.icon} />
                <span className="font-inter font-medium text-gray-800">{link.name}</span>
              </NavLink>
            </li>
          ))}
          <li className={`${expandSidebar ? 'block' : 'hidden'} transition-all`}>
            <NavLink
              to="/"
              onClick={logoutUser}
              className="flex w-full items-center gap-x-3 border-l-4 border-transparent p-3 outline-none "
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#dbeafe' : 'transparent',
                borderColor: isActive ? '#3b82f6' : 'transparent'
              })}
            >
              <img src="/assets/icons/logout.svg" alt="Logout" />
              <span className="font-inter font-medium text-gray-800">Sair</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
