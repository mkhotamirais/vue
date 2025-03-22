<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="bg-red-500">
    <a href="/">Logo</a>
    <nav class="flex">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/jobs">Jobs</RouterLink>
    </nav>
  </header>
</template>