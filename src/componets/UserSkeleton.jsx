import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

function UserSkeleton() {
  return (
    <div>
      <div className='flex'>
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

      <div className='flex'>
        <div className='h-full w-full mt-2 flex overflow-scroll'>
          <h2>Followers</h2>
        </div>
        <div className='h-full w-full mt-2 flex  overflow-scroll'>
          <h2>Repos</h2>
          {/* {currentUserRepos.map((repo) => {
                return <p key={repo.id}>{repo.name}</p>;
            })} */}
        </div>
      </div>
    </div>
  )
}

export default UserSkeleton
