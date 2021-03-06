import { useState } from "react"
import { Button } from "@material-ui/core"
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons"

import TaskItem from "./TaskItem"

import Card from "../Card/Card"

const tasks = [
  {
    body: "Wireframe for contact page",
    date: "",
    id: 1,
  },
  {
    body: "Book Return Ticket",
    date: "Today",
    id: 2,
  },
  {
    body: "Buy Anniversary Gift",
    date: "3 days ago",
    id: 3,
  },
  {
    body: "Pay Electricity Bill",
    date: "",
    id: 4,
  },
  {
    body: "Meet Chris In the Conference",
    date: "Tomorrow",
    id: 5,
  },
  {
    body: "Meet Chris In the Conference",
    date: "Tomorrow",
    id: 6,
  },
  {
    body: "Meet Chris In the Conference",
    date: "Tomorrow",
    id: 7,
  },
  {
    body: "Meet Chris In the Conference",
    date: "Tomorrow",
    id: 70,
  },
  {
    body: "Meet Chris In the Conference",
    date: "Tomorrow",
    id: 8,
  },
  {
    body: "Meet Chris In the Conference",
    date: "Tomorrow",
    id: 9,
  },
  {
    body: "Meet Chris In the Conference",
    date: "Tomorrow",
    id: 10,
  },
]

const SidebarCompleted = () => {
  const [showCompletedList, setShowCompletedList] = useState(false)

  return (
    <div className="sidebarCompleted__wrapper">
      <Card>
        <Button
          className="completedBtn"
          endIcon={<ExpandMoreIcon className="completedBtn__icon" />}
          onClick={e => setShowCompletedList(prev => !prev)}
        >
          Completed
        </Button>
      </Card>
      {showCompletedList && (
        <Card>
          {tasks.map(task => (
            <TaskItem {...task} />
          ))}
        </Card>
      )}
    </div>
  )
}

export default SidebarCompleted
