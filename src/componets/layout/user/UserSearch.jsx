import React, { useState, useContext } from "react"
import { Input, Button } from "@material-tailwind/react"
import { FaSearch } from "react-icons/fa"
import UsersContext from "../../../context/UsersContext"

function UserSearch() {
  const { setData, setLoading, setError } = useContext(UsersContext)

  const [search, setSearch] = useState("")
  const [isInputPresent, setisInputPresent] = useState(false)

  const fetchUsers = async () => {
    const params = search
    const response = await fetch(
      `https://api.github.com/search/users?q=${params}`,
    )
    const data = await response.json()
    if (data.items.length === 0) {
      setError(true)
      return
    }
    setData(data.items)
    setError(false)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (search === "") {
      setisInputPresent(true)
      return
    }
    setLoading(true)
    await fetchUsers()
    setSearch("")
    setLoading(false)
  }

  return (
    <div className='md:w-1/2 w-full mx-auto px-12 '>
      <form onSubmit={handleSubmit} action='' className='flex gap-12'>
        <Input
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          value={search || ""}
          label='Search Users'
          placeholder='search users'
          icon={<FaSearch />}
        />
        <Button
          data-testid='searchBtn'
          value='search'
          type='submit'
          color='green'
        >
          Search
        </Button>
      </form>

      {isInputPresent && (
        <div className=' w-1/2 mx-auto' color='red'>
          Enter Something
        </div>
      )}
    </div>
  )
}

export default UserSearch
