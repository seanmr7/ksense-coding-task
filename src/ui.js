const UI = (function () {
  const uiSelectors = {
    usersContainer: document.querySelector('#users-container'),
    postsContainer: document.querySelector('#posts-container'),
    postsList: document.querySelector('#posts-list'),
    postsHeader: document.querySelector('#posts-header'),
  }

  const { usersContainer, postsContainer, postsList, postsHeader } = uiSelectors

  function showUsers(users) {
    let output = ''

    users.forEach((user) => {
      output += `
        <div id="${user.id}" class="user-container">
          <h3>${user.name}</h3>
          <h4>Username: ${user.username}</h4>
          <p>${user.email}</p>
        </div>
      `
    })

    usersContainer.innerHTML = output
  }

  function showUserPosts(posts) {
    let output = ''

    posts.forEach((post) => {
      output += `
        <li>
          <div class="post-container">
            <h4 class="post-title">${post.title}</h4>
            <p class="post-body">${post.body}</p>
          </div>
        <li>
      `
    })

    postsList.innerHTML = output
  }

  function updatePostsHeader(name) {
    postsHeader.innerText = `Displaying posts for ${name}`
  }

  function clearPosts() {
    postsHeader.innerText = ''
    postsList.innerHTML = ''
  }

  return {
    uiSelectors,
    showUsers,
    showUserPosts,
    updatePostsHeader,
    clearPosts,
  }
})()
