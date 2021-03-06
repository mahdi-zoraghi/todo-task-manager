import Card from "./components/Card/Card"

import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

import "./App.scss"

function App() {
  return (
    <div className="app">
      <Card className="app__wrapper">
        <Card className="app__sidebar">
          <Sidebar />
        </Card>
        <Card className="app__main">
          <Header />
          <Main />
        </Card>
      </Card>
    </div>
  )
}

export default App
