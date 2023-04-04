<script>
import SinglePost from './SinglePost.vue'
export default {
  name: 'PostList',
  props: ['posts'],
  components: {
    SinglePost
  },
  setup(props) {
    console.log(props.posts)
  },
  mounted() {
    console.log(this.posts)
  },
  updated() {
    console.log(this.posts)
  }
}
</script>

<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.ud">
      <SinglePost :post="post" />
    </div>
  </div>
</template>
