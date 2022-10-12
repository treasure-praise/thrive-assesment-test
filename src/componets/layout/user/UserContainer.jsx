import React, { useContext } from "react"
import Users from "./Users"
import UsersContext from "../../../context/UsersContext"
import UsersSkeleton from "../../UsersSkeleton"

function UserContainer() {
  const { data, loading } = useContext(UsersContext)
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-8 w-4/5 mx-auto my-12 '>
      {loading && <UsersSkeleton />}
      {/* <p>{data && `Showing ${data.length} reuslts for ${text} `}</p> */}
      {data?.map((datum) => (
        <Users key={datum.id} data={datum} />
      ))}
    </div>
  )
}

export default UserContainer
