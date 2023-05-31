// main.js

window.addEventListener('DOMContentLoaded', getUsers);

async function getUsers() {
  try {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    const userList = document.getElementById('users-list');

    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      const avatar = document.createElement('img');
      avatar.src = user.avatar_url;
      avatar.alt = `${user.login}'s avatar`;
      userCard.appendChild(avatar);

      const login = document.createElement('p');
      login.textContent = user.login;
      userCard.appendChild(login);

      const reposLink = document.createElement('a');
      reposLink.href = user.repos_url;
      reposLink.textContent = 'View Repositories';
      userCard.appendChild(reposLink);

      userList.appendChild(userCard);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}