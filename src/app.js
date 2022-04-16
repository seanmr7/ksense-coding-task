const App = (function () {
  const http = HTTP
  const ui = UI

  // Get users on DOM load
  document.addEventListener('DOMContentLoaded', getAndDisplayUsers)

  // Listen for click to show user posts
  ui.uiSelectors.usersContainer.addEventListener('click', getAndDisplayPosts)

  function getAndDisplayUsers() {
    http
      .getUsers()
      .then((data) => ui.showUsers(data))
      .catch((err) => console.log(err))
  }

  function getAndDisplayPosts(e) {
    if (e.target.parentElement.classList.contains('user-container')) {
      ui.clearPosts()

      const userId = e.target.parentElement.id
      const name = e.target.parentElement.children[0].innerText

      ui.updatePostsHeader(name)

      http
        .getPosts(userId)
        .then((data) => ui.showUserPosts(data))
        .catch((err) => console.log(err))
    }
  }
})()
