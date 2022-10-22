import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { ThemeProvider } from "@material-tailwind/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { UsersContextProvider } from "./context/UsersContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <UsersContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UsersContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
