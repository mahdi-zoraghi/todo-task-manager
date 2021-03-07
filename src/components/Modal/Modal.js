import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  Button,
  Modal as MaterialModal,
  Paper,
  TextField,
} from "@material-ui/core"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import DateFansUtils from "@date-io/date-fns"

import { addTask } from "../../store/actions"

import "./Modal.scss"

const Modal = ({ children, ...props }) => {
  const [input, setInput] = useState("")
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString())

  const dispatch = useDispatch()

  const handleDateChange = date => setSelectedDate(date)

  const handleCreateTask = e => {
    e.preventDefault()

    if (input && selectedDate) {
      dispatch(
        addTask({
          body: input,
          date: selectedDate,
        })
      )
      props.onClose()
      setInput("")
      setSelectedDate(new Date().toISOString())
    }
  }

  return (
    <MaterialModal {...props} className={`modal ${props.className}`}>
      <Paper className="modalPaper">
        <TextField
          value={input}
          onChange={e => setInput(e.target.value)}
          variant="outlined"
          placeholder="Type Your Task..."
        />
        <MuiPickersUtilsProvider utils={DateFansUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="please select a date"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <Button onClick={handleCreateTask} color="primary" variant="contained">
          Add Task
        </Button>
      </Paper>
    </MaterialModal>
  )
}

export default Modal
