import { Link } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import { menuListAdmin } from '../../../utils/menuListAdmin'

export default function DiscenteDashboard() {
  return (
    <div className="flex h-screen flex-col gap-x-6 overflow-y-auto bg-gray-100 md:flex-row">
      <Sidebar userType="admin" />
      <div className="ml-auto flex w-full flex-col items-center justify-center gap-y-8 overflow-y-auto">
        <div className="space-y-1.5 text-center">
          <h1 className="font-poppins text-4xl font-semibold">Dashboard Admin</h1>
          <p className="font-inter text-base font-medium">
            Escolha uma das opções para seguir na plataforma
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          {menuListAdmin.map((card) => {
            return (
              <Link
                key={card.title}
                to={card.link}
                className={`flex h-60 w-64 flex-col items-center justify-center gap-y-4 rounded-md bg-${card.color}-400 transition-colors duration-300 hover:bg-${card.color}-500`}
              >
                <img src={`/assets/icons/${card.icon}.svg`} alt={card.title} className="w-16" />
                <p className="font-poppins text-xl font-medium">{card.title}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
