import { BrowserRouter } from "react-router-dom"
import Header from "../componets/layout/Header"
import Footer from "../componets/layout/Footer"
import { UsersContextProvider } from "../context/UsersContext"
import UserDisplay from "./UserDisplay"
import UserSkeleton from "../componets/UserSkeleton"

export default {
  title: "pages/UserDisplay",
  component: UserDisplay,
}

export const userDisplay = () => {
  return (
    <div>
      <UsersContextProvider>
        <BrowserRouter>
          <Header />
          <UserSkeleton />
          <Footer />
        </BrowserRouter>
      </UsersContextProvider>
    </div>
  )
}
