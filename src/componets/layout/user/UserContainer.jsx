/* eslint-disable react/function-component-definition */
import React, { useContext } from "react"
import Users from "./Users"
import UsersContext from "../../../context/UsersContext"
import UsersSkeleton from "../../UsersSkeleton"

const UserContainer = () => {
  const { data, loading, error } = useContext(UsersContext)
  return (
    <div>
      <div className='mx-auto p-8'>
        {error && (
          <img
            src='https://techzillo.com/wp-content/uploads/2018/10/imageedit_2_8168072629.png'
            alt='User Not Found'
            className='mx-auto'
          />
        )}
        {error && <h1 className='text-center'>User Not found</h1>}
      </div>
      {!error && (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 w-4/5 mx-auto my-12 '>
          {loading && <UsersSkeleton />}
          {/* <p>{data && `Showing ${data.length} reuslts for ${text} `}</p> */}
          {!loading &&
            data?.map((datum) => <Users key={datum.id} data={datum} />)}
        </div>
      )}
    </div>
  )
}

export default UserContainer
