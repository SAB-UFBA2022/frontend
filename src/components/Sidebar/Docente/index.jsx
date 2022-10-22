import DesktopSidebar from './Desktop'
import MobileSidebar from './Mobile'

export default function SidebarDocente() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopSidebar />
      </div>
      <div className="md:hidden">
        <MobileSidebar />
      </div>
    </>
  )
}
