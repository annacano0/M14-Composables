<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import {computed} from 'vue'
import {useRoute } from 'vue-router'
import {fetchPostById,fetchUserById} from "../composables/readPosts.js"

const route=useRoute()

const postId = computed(() => {
  return route.params.id
})

const { post, getPost } = fetchPostById();
const { user, getUser } = fetchUserById();

console.log(post.value.userId)

getPost(postId.value); 
getUser(post.value.userId); 
</script>
