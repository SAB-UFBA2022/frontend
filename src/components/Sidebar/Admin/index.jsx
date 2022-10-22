import DesktopSidebar from './Desktop'
import MobileSidebar from './Mobile'

export default function SidebarAdmin() {
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
