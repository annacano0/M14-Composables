import {ref} from 'vue'

export function fetchPosts(){
    const posts=ref([]); 
    
    const getPosts = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        posts.value = await response.json()
    }

    return {
        posts, 
        getPosts
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

export function fetchData(url){
    const data = ref([]); 
    
    const getData = async () => {
        const response = await fetch(url)
        data.value = await response.json()    
    }

    return {
        data, 
        getData
    }
}