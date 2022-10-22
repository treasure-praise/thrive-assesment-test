const fetchUsersResponse = {
  items: [
    {
      login: "paystack",
      avatar_url: "https://avatars.githubusercontent.com/u/12346441?v=4",
      id: 12346441,
    },
  ],
}

const fetchUserResponse = {
  avatar_url: "https://avatars.githubusercontent.com/u/12346441?v=4",
  followers: 7,
  public_repos: 12,
  url: "https://api.github.com/users/paystack",
}

const fetchUserFollowingResponse = [
  {
    avatar_url: "https://avatars.githubusercontent.com/u/12346441?v=4",
    login: "paystack",
  },
]

const fetchUserReposResponse = [
  {
    name: "paystack",
  },
]

const mockFetch = (url) => {
  switch (url) {
    case "https://api.github.com/search/users?q=paystack": {
      return {
        ok: true,
        status: 200,
        json: async () => fetchUsersResponse,
      }
    }
    case "https://dog.ceo/api/breed/husky/images": {
      return {
        ok: true,
        status: 200,
        json: async () => fetchUserFollowingResponse,
      }
    }
    case "https://api.github.com/users/paystack/followers": {
      return {
        ok: true,
        status: 200,
        json: async () => fetchUserResponse,
      }
    }
    case "https://api.github.com/users/paystack/repos": {
      return {
        ok: true,
        status: 200,
        json: async () => fetchUserReposResponse,
      }
    }
    default: {
      throw new Error(`Unhandled request: ${url}`)
    }
  }
}

export default mockFetch
