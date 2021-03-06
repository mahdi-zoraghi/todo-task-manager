import Card from "../Card/Card"
import AddTaskBtn from "./AddTaskBtn"
import TasksList from "./TasksList"

const SidebarBody = () => {
  return (
    <div className="sidebar__sidebarBody">
      <Card>
        <AddTaskBtn />
        <TasksList />
      </Card>
    </div>
  )
}

export default SidebarBody
