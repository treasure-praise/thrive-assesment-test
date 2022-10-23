import { BrowserRouter } from "react-router-dom"
import Header from "./Header"

export default {
  title: "Layout/Header",
  component: Header,
}

export const header = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}
