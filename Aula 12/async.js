async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log("Requisição GET para " + response.url + " retornou status " + response.status);
    const data = await response.json();
    return data;
}

async function getPostById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log("Requisição GET para " + response.url + " retornou status " + response.status);
    const data = await response.json();
    return data;
}

async function getCommentsByPost(postId){
    const url = new URL('https://jsonplaceholder.typicode.com/comments');
    url.searchParams.append('postId', postId);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('Requisição GET para ', response.url, ' retornou status ', response.status);
    const data = await response.json();
    return data;
}

async function createPost(post){
    const body = {
        userId: post.userId,
        title: post.title,
        body: post.body
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('Requisição POST para ', response.url, ' retornou status ', response.status);
    const data = await response.json();
    return data;

}

async function updatePost(post){
    const body = {
        userId: post.userId,
        title: post.title,
        body: post.body
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('Requisição PUT para ', response.url, ' retornou status ', response.status);
    const data = await response.json();
    return data;

}

async function updatePostTitle(id, title){
    const body = {
        title: title
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log('Requisição PATCH para ', response.url, ' retornou status ', response.status);
    const data = await response.json();
    return data;

}

async function deletePost(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
    console.log('Requisição DELETE para ', response.url, ' retornou status ', response.status);
    const data = await response.json();
    return (response.status === 200);

}

getPosts().then(posts => {
    console.log(posts);
});

getPostById(1).then(post => {
    console.log(post);
});

getCommentsByPost(1).then(comments => {
    console.log(comments);
});

createPost({
    title: 'foo',
    body: 'bar',
    userId: 1
}).then(post => {
    console.log(post);
});

updatePost({
    title: 'foo',
    body: 'bar',
    userId: 1
}).then(post => {
    console.log(post);
});

updatePostTitle(1, 'Novo titulo do post').then(post => {
    console.log(post);
})

deletePost(1).then(success => {
    console.log(success);
});