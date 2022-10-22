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

export { fetchUser, getUserRepos, getUserFollowers }
