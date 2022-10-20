import UserContainer from "../componets/layout/user/UserContainer"
import UserSearch from "../componets/layout/user/UserSearch"

function Home() {
  return (
    <div className='flex flex-col h-full'>
      <h1>ThriveAgric Github Finder</h1>
      <UserSearch />
      <div className='h-full w-full mt-2  overflow-scroll'>
        <UserContainer />
      </div>
    </div>
  )
}

export default Home
