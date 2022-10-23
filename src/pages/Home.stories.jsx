import { BrowserRouter } from "react-router-dom"
import Header from "../componets/layout/Header"
import Footer from "../componets/layout/Footer"
import UserSearch from "../componets/layout/user/UserSearch"
import UsersSkeleton from "../componets/UsersSkeleton"
import { UsersContextProvider } from "../context/UsersContext"
import Home from "./Home"

export default {
  title: "pages/Home",
  component: Home,
}

export const home = () => {
  return (
    <div>
      <UsersContextProvider>
        <BrowserRouter>
          <Header />
          <UserSearch />
          <div className='grid md:grid-cols-3 grid-cols-1 gap-8 w-4/5 mx-auto my-12 '>
            <UsersSkeleton />
          </div>
          <Footer />
        </BrowserRouter>
      </UsersContextProvider>
    </div>
  )
}
