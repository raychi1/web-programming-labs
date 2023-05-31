// main.js
async function getUsers() {
    const USERS_URL = 'https://api.github.com/users';

    try {
        let res = await fetch(USERS_URL);
        return res.json();
    } catch(error) {
        console.error(error);
    }
}

async function getUserById(login) {
    const USER_URL = `https://api.github.com/users/${login}`;

    try {
        let res = await fetch(USER_URL);
        return res.json();
    } catch(error) {
        console.error(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';

    users.forEach(user => {
        let htmlSegment = `
            <div class="user" data-login="${user.login}">
                <img src="${user.avatar_url}" data-login="${user.login}">
                <h2>${user.login}</h2>
                <button class="details-button" data-login="${user.login}">View details</button>
            </div>
        `;

        html += htmlSegment;
    });

    const list = document.getElementById('users-list');
    list.innerHTML = html;
}

async function showPopup() {
    const list = document.getElementById('users-list');
    const popup = document.getElementById('popup-wrapper');
    const popupCloseBtn = document.querySelector('#popup-close');
    const popupContent = document.querySelector('#popup-content');

    list.addEventListener('click', async (event) => {
        const target = event.target;
        if (target.classList.contains('details-button')) {
            const login = target.dataset.login;
            const user = await getUserById(login);

            const html = `
                <img src="${user.avatar_url}">
                <div>
                    <h2>${user.login}</h2>
                    <p>name: <b>${user.name}</b></p>
                    <p>company: <b>${user.company ? user.company : '-'}</b></p>
                    <p>location: <b>${user.location ? user.location : '-'}</b></p>
                    <p>blog: <a href="${user.blog}" target="_blank">${user.blog}</a></p>
                    <p>repository: <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
                </div>        
            `;

            popupContent.innerHTML = html;
            popup.style.top = 0;
        }
    });

    popupCloseBtn.addEventListener('click', () => {
        popup.style.top = '-100%';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderUsers();
    showPopup();
}, false);