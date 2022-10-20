/* eslint-disable react/prop-types */
import React from "react"
import { Avatar } from "@material-tailwind/react"

// eslint-disable-next-line react/prop-types
function UserFollowers({ data }) {
  return (
    <div className='border rounded md:w-2/3 h-fit flex gap-8 items-center p-2'>
      <Avatar src={data.avatar_url} size='xl' alt='avatar' variant='circular' />
      <div className='flex flex-col items-start'>
        <h1 className='md:text-xl font-bold'>{data.login}</h1>
      </div>
    </div>
  )
}

export default UserFollowers
