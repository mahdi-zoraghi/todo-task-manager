import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { CssBaseline } from "@material-ui/core"

import App from "./App"

import store from "./store"

import "./index.css"

ReactDOM.render(
  <>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
)
