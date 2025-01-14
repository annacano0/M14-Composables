import {ref} from 'vue'

export default function readPosts(){
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