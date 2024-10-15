import * as api from './api.js';

const containerPosts = document.querySelector('#posts');

api.getPosts().then(posts => {
    containerPosts.innerHTML += '';
    posts.forEach(post => {
        
    });
})