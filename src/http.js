const HTTP = (function () {
  // Make HTTP GET Request to users route
  async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const resData = await res.json()
    return resData
  }

  // Make HTTP GET Request to nested route users/userId/posts
  async function getPosts(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)

    const resData = await res.json()
    return resData
  }

  return {
    getUsers,
    getPosts,
  }
})()
