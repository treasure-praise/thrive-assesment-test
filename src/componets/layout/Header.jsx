import React from "react"
import { FaGithub } from "react-icons/fa"
import { Avatar } from "@material-tailwind/react"

export default function Header() {
  return (
    <div className='flex justify-between items-center   '>
      {/* <Link to="/about" element={<About/>}>
            About
        </Link> */}
      <Avatar
        src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1499051169/xrir1aymhq9clo96uhbn.png'
        size='xl'
        alt='avatar'
        variant='circular'
      />
      <FaGithub size={30} />
    </div>
  )
}
