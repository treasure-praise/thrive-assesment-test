/* eslint-disable react/function-component-definition */
import { ThemeProvider } from "@material-tailwind/react"
import UserSearch from "./UserSearch"
import { UsersContextProvider } from "../../../context/UsersContext"

export default {
  title: "Components/SearchBar",
  component: UserSearch,
}

export const SearchBar = () => {
  return (
    <ThemeProvider>
      <UsersContextProvider>
        <UserSearch />
      </UsersContextProvider>
    </ThemeProvider>
  )
}
