/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"
import { Avatar, Button } from "@material-tailwind/react"

// eslint-disable-next-line react/prop-types
function Users({ data }) {
  return (
    <div className='border rounded w-full h-fit flex gap-8 items-center p-2'>
      <Avatar
        src={data.avatar_url}
        size='xxl'
        alt='avatar'
        variant='circular'
      />
      <div className='flex flex-col items-start'>
        <h2 className='md:text-xl font-bold'>{data.login}</h2>
        <Button size='sm' className='px-1' color='green' variant='text'>
          <Link to={`/user/${data.login}`}>View Profile</Link>
        </Button>
      </div>
    </div>
  )
}

export default Users
