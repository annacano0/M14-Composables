import {ref} from 'vue'

export function readPosts(){
    const posts=ref([]); //create reactive array to save posts
    
    const readAll = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts.value = await response.json()
    }

    return {
        posts, 
        readAll
    }
}

export function fetchPostById(){
    const post=ref({})

    const getPost = async (postId) =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        post.value = await response.json()    
    }

    return {
        post, 
        getPost
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