<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import {computed, watch} from 'vue'
import {useRoute } from 'vue-router'
import {fetchPostById,fetchUserById} from "../composables/readPosts.js"

const route=useRoute()

const postId = computed(() => {
  return route.params.id
})

const { post, getPost } = fetchPostById();
const { user, getUser } = fetchUserById();


getPost(postId.value); 


watch(post, (newPost) => {
  if (newPost.userId) {
    getUser(newPost.userId)
  }
})
</script>
