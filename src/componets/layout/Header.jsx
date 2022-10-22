import React from "react"
import { FaGithub } from "react-icons/fa"
import { Avatar } from "@material-tailwind/react"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className='flex justify-between items-center px-8 '>
      <Link to='/' rel='noopener noreferrer'>
        <Avatar
          src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1499051169/xrir1aymhq9clo96uhbn.png'
          size='xl'
          alt='avatar'
          variant='circular'
        />
      </Link>
      <h1 className='text-center font-bold'>ThriveAgric Github Finder</h1>
      <a
        href='https://github.com/treasure-praise'
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub size={30} />
      </a>
    </div>
  )
}
