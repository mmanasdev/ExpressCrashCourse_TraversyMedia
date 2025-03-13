const output = document.querySelector('#output');
const getPostsBtn = document.querySelector('#get-posts-btn');
const addPostForm = document.querySelector('#add-post-form');

// Get posts
async function getPosts() {
    try {
        const response = await fetch('http://localhost:8000/api/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        output.innerHTML = '';
        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.textContent = post.title;
            output.appendChild(postEl);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Add post
async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');
    try {
        const response = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });

        if (!response.ok) {
            throw new Error('Failed to add post');
        }

        const newPost = await response.json();
        const postEl = document.createElement('div');

        postEl.textContent = newPost.title;
        output.appendChild(postEl);

        getPosts();
    } catch (error) {
        console.error('Error adding post:', error);
    }
}

getPostsBtn.addEventListener('click', getPosts);
addPostForm.addEventListener('submit', addPost);