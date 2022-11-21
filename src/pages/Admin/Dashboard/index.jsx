import { Link } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import { menuListAdmin } from '../../../utils/menuListAdmin'

export default function AdminDashboard() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto bg-gray-100 pb-4 md:flex-row">
      <Sidebar userType="admin" />
      <div className="flex w-full flex-col items-center gap-y-8 overflow-y-auto p-4 md:justify-center">
        <div className="space-y-1.5 text-center">
          <h1 className="font-poppins text-2xl font-semibold">
            Sistema de acompanhamento de bolsistas do PGCOMP
          </h1>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          {menuListAdmin.map((card) => {
            return (
              <Link
                key={card.title}
                to={card.link}
                className={`flex h-48 w-48 flex-col items-center justify-center gap-y-4 rounded-md md:h-52 md:w-52 bg-${card.color}-400 transition-colors duration-300`}
              >
                <img
                  src={`/assets/icons/${card.icon}.svg`}
                  alt={card.title}
                  className="w-10 md:w-12"
                />
                <p className="font-poppins text-base font-medium md:text-lg">{card.title}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
