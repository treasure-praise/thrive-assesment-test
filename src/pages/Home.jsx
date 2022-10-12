import UserContainer from "../componets/layout/user/UserContainer"
import UserSearch from "../componets/layout/user/UserSearch"

function Home() {
  return (
    <div className='flex flex-col h-full'>
      <UserSearch />
      <div className='h-full w-full mt-2 flex overflow-scroll'>
        <UserContainer />
      </div>
    </div>
  )
}

export default Home
