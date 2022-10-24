import DesktopSidebar from './Desktop'
import MobileSidebar from './Mobile'

export default function Sidebar({ userType }) {
  return (
    <>
      <div className="hidden md:block">
        <DesktopSidebar userType={userType} />
      </div>
      <div className="md:hidden">
        <MobileSidebar userType={userType} />
      </div>
    </>
  )
}
