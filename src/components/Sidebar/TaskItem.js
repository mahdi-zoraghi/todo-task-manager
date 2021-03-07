import { useDispatch } from "react-redux"
import { Radio } from "@material-ui/core"

import { completedTask } from "../../store/actions"

// import { db } from "../../firebase"

const TaskItem = ({ id, body, date, completed }) => {
  const dispatch = useDispatch()

  const handleCompleted = () => {
    dispatch(completedTask(id))
    // db.collection("tasks").doc(id).set(
    //   {
    //     id,
    //     body,
    //     date,
    //     completed: true,
    //   },
    //   { merge: true }
    // )
  }

  return (
    <main className="taskItem">
      <label>
        <Radio color="primary" checked={completed} onChange={handleCompleted} />
        <div>
          <span>{body}</span>
          <span>{date}</span>
        </div>
      </label>
    </main>
  )
}

export default TaskItem
