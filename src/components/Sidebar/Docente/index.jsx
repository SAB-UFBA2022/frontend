import DesktopSidebar from './Desktop'
import MobileSidebar from './Mobile'

export default function Sidebar() {
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
