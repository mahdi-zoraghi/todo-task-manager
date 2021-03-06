import { Button } from "@material-ui/core"
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons"

import Card from "../Card/Card"

const SidebarCompleted = () => {
  return (
    <div className="sidebarCompleted__wrapper">
      <Card>
        <Button
          className="completedBtn"
          endIcon={<ExpandMoreIcon className="completedBtn__icon" />}
        >
          Completed
        </Button>
      </Card>
    </div>
  )
}

export default SidebarCompleted
