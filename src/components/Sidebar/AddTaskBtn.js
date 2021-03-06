import { useState } from "react"
import { Button } from "@material-ui/core"
import { Add as AddIcon } from "@material-ui/icons"

import Modal from "../Modal/Modal"

const AddTaskBtn = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleClose = () => setOpenModal(false)

  return (
    <div className="addTaskBtn__wrapper">
      <Button
        className="addTaskBtn"
        startIcon={<AddIcon className="addTaskBtn__icon" />}
        onClick={() => setOpenModal(true)}
      >
        Add a Task
      </Button>
      <Modal open={openModal} onClose={handleClose} />
    </div>
  )
}

export default AddTaskBtn
