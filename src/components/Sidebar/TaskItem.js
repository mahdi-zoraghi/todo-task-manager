import { Radio } from "@material-ui/core"

const TaskItem = ({ id, body, date }) => {
  return (
    <main>
      <label>
        <Radio color="primary" />
        <div>
          <span>{body}</span>
          <span>{date}</span>
        </div>
      </label>
    </main>
  )
}

export default TaskItem
