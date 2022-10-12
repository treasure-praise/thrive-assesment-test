/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from "react"

const UsersContext = createContext()

// eslint-disable-next-line react/function-component-definition
export const UsersContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [currentUser, setCurrentUser] = useState("")
  const [currentUserFollowing, setCurrentUserFollowing] = useState([])
  const [currentUserRepos, setCurrentUserRepos] = useState([])

  return (
    <UsersContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        currentUser,
        setCurrentUser,
        currentUserFollowing,
        setCurrentUserFollowing,
        currentUserRepos,
        setCurrentUserRepos,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContext
