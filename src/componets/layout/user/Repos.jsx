import React from "react"
import { FaLink, FaEye } from "react-icons/fa"
import { Avatar, Button, IconButton } from "@material-tailwind/react"
function Repos() {
  return (
    // login avatar name repositories_number followers_number following_number organizations
    <div className='border rounded w-full flex flex-col gap-8 items-center p-2'>
      <div className='flex '>
        {/* icon */}
        <FaLink width={10} />
        {/* repo name and desciption */}
        <div className=''>
          <h2>Repository name</h2>
          <p className='w-1/2 text-gray-700'>
            Repo description: Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vel quibusdam ea perspiciatis hic eius non eos
            ullam, harum natus ipsa laborum, vitae molestias rerum deserunt
            soluta quos beatae? Corrupti, ex?
          </p>
        </div>
      </div>
      <div>
        <Button size='sm' className='flex gap-2 items-center'>
          <FaEye />
          <p>Texts</p>
        </Button>
      </div>
    </div>
  )
}

export default Repos
