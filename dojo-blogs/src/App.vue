<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <template>
    <header>
      <div class="">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </template>
</template>
