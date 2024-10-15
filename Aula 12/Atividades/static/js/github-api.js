const BUSCAR = document.querySelector('#buscar');
const USERNAME = document.querySelector('#username');
const AVATAR = document.querySelector('#avatar');
const NAME = document.querySelector('#name');
const BIO = document.querySelector('#bio');
const REPOS = document.querySelector('#repos');
const FOLLOWERS = document.querySelector('#followers');
const FOLLOWING = document.querySelector('#following');
const PROFILE_LINK = document.querySelector('#profile-link');
const PROFILE_CONTAINER = document.querySelector('#profile-container');

BUSCAR.addEventListener('click', async () => {
    let userData = await getGitHubProfile(USERNAME.value);
    AVATAR.src = userData.avatar_url;
    NAME.textContent = userData.name;
    BIO.textContent = userData.bio;
    REPOS.textContent = userData.repos_url;
    FOLLOWERS.textContent = userData.followers_url;
    FOLLOWING.textContent = userData.following_url;
    PROFILE_LINK.href = userData.html_url;
    PROFILE_CONTAINER.classList.remove('hidden');
});

async function getGitHubProfile(id){
    const response = await fetch(`https://api.github.com/users/${id}`);
    const data = await response.json();
    return data;
}