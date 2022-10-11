import { Button } from "@material-tailwind/react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function UsersSkeleton() {
  return (
    <div className='border rounded w-1/2 flex gap-8 items-center p-2'>
      <Skeleton circle width={100} height={100} />
      <div className='flex flex-col items-start'>
        <h2 className='md:text-xl font-bold w-4/5'>
          <Skeleton width={100} />
        </h2>

        <Button size='sm' className='px-1 w-2/4' color='green' variant='text'>
          <Skeleton />
        </Button>
      </div>
    </div>
  )
}

export default UsersSkeleton
