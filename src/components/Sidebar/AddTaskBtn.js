import { Button } from "@material-ui/core"
import { Add as AddIcon } from "@material-ui/icons"

const AddTaskBtn = () => {
  return (
    <div className="addTaskBtn__wrapper">
      <Button
        className="addTaskBtn"
        startIcon={<AddIcon className="addTaskBtn__icon" />}
      >
        Add a Task
      </Button>
    </div>
  )
}

export default AddTaskBtn
