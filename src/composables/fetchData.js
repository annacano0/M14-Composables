import {ref} from 'vue'

export function fetchPosts(){
    const posts=ref([]); 
    const post=ref()
    
    const getPosts = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts.value = await response.json()
    }

    const getPost = async (postId) =>{
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`)
        post.value = await response.json()    
    }

    return {
        post, 
        getPost,
        posts, 
        getPosts
    }
}


export function fetchUserById(){
    const user=ref({})

    const getUser = async (userId) =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        user.value = await response.json()    
    }

    return {
        user, 
        getUser
    }
}