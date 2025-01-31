// src/components/PostList.vue
<template>
  <div>
    <h1>Lista de Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </li>
    </ul>

    <h2>Criar Novo Post</h2>
    <form @submit.prevent="createNewPost">
      <input v-model="newTitle" placeholder="Título" />
      <textarea v-model="newContent" placeholder="Conteúdo"></textarea>
      <button type="submit">Criar Post</button>
    </form>
  </div>
</template>

<script>
import { fetchPosts, createPost } from "./services/posts";

export default {
  data() {
    return {
      posts: [],
      newTitle: "",
      newContent: "",
    };
  },
  async created() {
    this.posts = await fetchPosts();
  },
  methods: {
    async createNewPost() {
      if (this.newTitle && this.newContent) {
        await createPost(this.newTitle, this.newContent);
        this.newTitle = "";
        this.newContent = "";
        this.posts = await fetchPosts(); // Recarregar os posts
      }
    },
  },
};
</script>
