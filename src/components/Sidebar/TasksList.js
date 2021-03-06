import TaskItem from "./TaskItem"

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
    id: 7,
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

const TasksList = () => {
  return (
    <div className="tasksList__wrapper">
      <section className="tasksList">
        {tasks.map(task => (
          <TaskItem {...task} key={task.id} />
        ))}
      </section>
    </div>
  )
}

export default TasksList
