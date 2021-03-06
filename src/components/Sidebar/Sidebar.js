import SidebarHead from "./SidebarHead"
import SidebarBody from "./SidebarBody"
import SidebarCompleted from "./SidebarCompleted"

import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <aside>
      <SidebarHead />
      <SidebarBody />
      <SidebarCompleted />
    </aside>
  )
}

export default Sidebar
