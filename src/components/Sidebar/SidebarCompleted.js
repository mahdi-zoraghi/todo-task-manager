import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "@material-ui/core"
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons"

import TaskItem from "./TaskItem"
import Card from "../Card/Card"

import { fetchCompleteds } from "../../store/actions"

const SidebarCompleted = () => {
  const [showCompletedList, setShowCompletedList] = useState(false)

  const completeds = useSelector(state => state.completeds)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCompleteds())
  }, [dispatch])

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
          {completeds?.map(task => (
            <TaskItem key={task.id} {...task} />
          ))}
        </Card>
      )}
    </div>
  )
}

export default SidebarCompleted
