/**
 * Takes in a string as login information and takes a callback for loading manipulation
 * @param {String} login
 * @param {Function} cb2
 * @param {Function} cb
 */
const fetchUser = async (login, cb2, cb) => {
  cb2(true)
  const response = await fetch(`https://api.github.com/users/${login}`)
  const data = await response.json()
  cb(data)
  cb2(false)
}

/**
 *
 * @param {String} login
 * @param {Function} cb2
 * @param {Function} cb
 */
const getUserRepos = async (login, cb2, cb) => {
  cb2(true)
  const response = await fetch(`https://api.github.com/users/${login}/repos`)
  const data = await response.json()
  cb(data)
  cb2(false)
}

/**
 *
 * @param {String} login
 * @param {*Function} cb2
 * @param {*Function} cb
 */
const getUserFollowers = async (login, cb2, cb) => {
  cb2(true)
  const response = await fetch(
    `https://api.github.com/users/${login}/followers`,
  )
  const data = await response.json()
  cb(data)
  cb2(false)
}

// const fetchUser = async () => {
//   setLoading(true)
//   const response = await fetch(`https://api.github.com/users/${login}`)
//   const data = await response.json()
//   setCurrentUser(data)
//   setLoading(false)
// }

// const getUserRepos = async () => {
//   setLoading(true)
//   const response = await fetch(`https://api.github.com/users/${login}/repos`)
//   const data = await response.json()
//   await setCurrentUserRepos(data)
//   setLoading(false)
// }

// const getUserFollowers = async () => {
//   setLoading(true)
//   const response = await fetch(
//     `https://api.github.com/users/${login}/followers`,
//   )
//   const data = await response.json()
//   await setCurrentUserFollowing(data)
//   setLoading(false)
// }

export { fetchUser, getUserRepos, getUserFollowers }
