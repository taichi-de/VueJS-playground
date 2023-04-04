<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'HomeView',
  components: {
    PostList,
    getPosts
  },

  setup() {
    const handleClick = () => {
      console.log('clicked')
    }

    const { posts, error, load } = getPosts()

    load()

    return {
      handleClick,
      posts, error,
    }
  }
}
</script>

<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="handleClick">click me</button>
    <p v-if="error">{{ error }}</p>
    <p v-if="posts.length">
      <PostList :posts="posts" />
    </p>
    <p v-else>Loading ...</p>
  </div>
</template>

<style>
  h1 {
    color: aliceblue;
  }
</style>