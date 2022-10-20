/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from "react"

const UsersContext = createContext()

// eslint-disable-next-line react/function-component-definition
export const UsersContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  return (
    <UsersContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContext
