<script setup>
defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  description: {
    type: String,
    default: "Default Description",
  },
});
</script>

<template>
  <section class="py-4">
    <h1 class="title">{{ title }}</h1>
    <p class="text-gray-600">{{ description }}</p>
  </section>
</template>