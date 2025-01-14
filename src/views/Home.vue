<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
import {readPosts} from "../composables/readPosts.js"

const {posts, readAll} = readPosts();

readAll()
</script>
