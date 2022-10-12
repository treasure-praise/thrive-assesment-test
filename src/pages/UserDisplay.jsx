import { Avatar } from "@material-tailwind/react"
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import Users from "../componets/layout/user/Users"
import UsersContext from "../context/UsersContext"

function UserDisplay() {
  const {
    currentUser,
    setCurrentUser,
    currentUserFollowing,
    setCurrentUserFollowing,
    setCurrentUserRepos,
    currentUserRepos,
  } = useContext(UsersContext)
  const { login } = useParams()

  const fetchUser = async () => {
    const response = await fetch(`https://api.github.com/users/${login}`)
    const data = await response.json()
    setCurrentUser(data)
  }

  const getUserRepos = async () => {
    const response = await fetch(`https://api.github.com/users/${login}/repos`)
    const data = await response.json()
    await setCurrentUserRepos(data)
  }

  const getUserFollowers = async () => {
    const response = await fetch(
      `https://api.github.com/users/${login}/followers`,
    )
    const data = await response.json()
    await setCurrentUserFollowing(data)
    console.log(2)
  }

  useEffect(() => {
    fetchUser()
    getUserFollowers()
    getUserRepos()
  }, [login])

  return (
    <>
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

      <div className='flex'>
        <div className='h-full w-full mt-2 flex flex-col overflow-scroll'>
          <h2>Followers</h2>
          {currentUserFollowing.map((followers) => {
            return <Users key={followers.id} data={followers} />
          })}
        </div>
        <div className='h-full w-full mt-2   overflow-scroll'>
          <h2>Repos</h2>
          {currentUserRepos.map((repo) => {
            return <p key={repo.id}>{repo.name}</p>
          })}
        </div>
      </div>
    </>
  )
}

export default UserDisplay
