import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import AppWrappers from "./AppWrappers"

ReactDOM.render(
  <React.StrictMode>
    <AppWrappers>
      <App />
    </AppWrappers>
  </React.StrictMode>,
  document.getElementById("root"),
)
