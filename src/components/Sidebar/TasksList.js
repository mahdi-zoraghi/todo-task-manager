import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import TaskItem from "./TaskItem"

import { fetchTasks } from "../../store/actions"

const TasksList = () => {
  const tasks = useSelector(state => state.tasks)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <div className="tasksList__wrapper">
      <section className="tasksList">
        {tasks?.map(task => (
          <TaskItem {...task} key={task.id} />
        ))}
      </section>
    </div>
  )
}

export default TasksList
