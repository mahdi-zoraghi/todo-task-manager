import HeaderNav from "./HeaderNav"
import HeaderRow from "./HeaderRow"

import Card from "../Card/Card"

import "./Header.scss"

const Header = () => {
  return (
    <Card className="header">
      <HeaderNav />
      <HeaderRow />
    </Card>
  )
}

export default Header
