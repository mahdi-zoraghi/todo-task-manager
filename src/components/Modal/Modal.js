import { useState } from "react"
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

import "./Modal.scss"

const Modal = ({ children, ...props }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString())

  const handleDateChange = date => setSelectedDate(date)

  return (
    <MaterialModal {...props} className={`modal ${props.className}`}>
      <Paper className="modalPaper">
        <TextField variant="outlined" placeholder="Type Your Task..." />
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
        <Button color="primary" variant="contained">
          Add Task
        </Button>
      </Paper>
    </MaterialModal>
  )
}

export default Modal
