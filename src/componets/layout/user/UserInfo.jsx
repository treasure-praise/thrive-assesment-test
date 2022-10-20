import React from "react"
import { Avatar } from "@material-tailwind/react"
import UserFollowers from "../componets/layout/user/UserFollowers"
// eslint-disable-next-line react/function-component-definition
const UserInfo = ({ currentUser }) => {
  return (
    <div className='w-4/5 border mx-auto p-8'>
      <div className='flex'>
        <Avatar
          src={currentUser.avatar_url}
          size='xxl'
          alt='avatar'
          variant='rounded'
        />

        <div className='flex flex-col justify-between'>
          <div className='flex'>
            <h2>{currentUser.name}</h2>
            <a
              href={currentUser.html_url}
              target='blank'
              className='text-green-600'
            >
              @{currentUser.login}
            </a>
          </div>

          <div className='flex'>
            <div className='flex flex-col'>
              <p>
                {currentUser.following
                  ? currentUser.following
                  : "Not following anyone"}
              </p>
              <p>Following</p>
            </div>

            <div className='flex flex-col'>
              <p>
                {currentUser.followers
                  ? currentUser.followers
                  : "Has no followers"}
              </p>
              <p>Followers</p>
            </div>

            <div className='flex flex-col'>
              <p>
                {currentUser.public_repos
                  ? currentUser.public_repos
                  : "no public repos"}
              </p>
              <p>Public Repos</p>
            </div>
          </div>
        </div>
      </div>

      <div className='md:flex'>
        <div className='h-fit w-full mt-2  '>
          <h2 className='text-xl font-bold'>Followers</h2>
          <div className='overflow-y-auto h-96'>
            {currentUserFollowing.map((followers) => {
              return <UserFollowers key={followers.id} data={followers} />
            })}
          </div>
        </div>
        <div className='h-full w-full mt-2   '>
          <h2 className='text-xl font-bold'>Repos</h2>
          <div className=' items-center gap-8 overflow-y-auto h-96'>
            {currentUserRepos.map((repo) => {
              return <p key={repo.id}>{repo.name}</p>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
