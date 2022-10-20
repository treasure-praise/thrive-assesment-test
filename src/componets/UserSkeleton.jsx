import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function UserSkeleton() {
  return (
    <div className='p-8 w-4/5 border mx-auto'>
      <div className='flex gap-8'>
        <Skeleton circle width={100} height={100} />
        <div className='flex flex-col justify-between'>
          <div className='flex'>
            <h2>
              <Skeleton width={200} />
            </h2>
          </div>

          <div className='flex'>
            <div className='flex flex-col'>
              <p>
                <Skeleton width={100} />
              </p>
              <p>
                <Skeleton width={100} />
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='md:flex'>
        <div className='h-full w-full mt-2  overflow-scroll'>
          <h2>Followers</h2>
          <div>
            <div className='flex items-center gap-8'>
              <Skeleton circle width={50} height={50} />
              <Skeleton width={200} />
            </div>
            <div className='flex items-center gap-8'>
              <Skeleton circle width={50} height={50} />
              <Skeleton width={200} />
            </div>
            <div className='flex items-center gap-8'>
              <Skeleton circle width={50} height={50} />
              <Skeleton width={200} />
            </div>
          </div>
        </div>
        <div className='h-full w-full mt-2  overflow-scroll'>
          <h2>Repos</h2>
          <div>
            <div className='flex items-center gap-8'>
              <Skeleton circle width={50} height={50} />
              <Skeleton width={200} />
            </div>
            <div className='flex items-center gap-8'>
              <Skeleton circle width={50} height={50} />
              <Skeleton width={200} />
            </div>
            <div className='flex items-center gap-8'>
              <Skeleton circle width={50} height={50} />
              <Skeleton width={200} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSkeleton
