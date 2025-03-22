<script setup>
defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  subtitle: {
    type: String,
    default: "Default Subtitle",
  },
});
</script>

<template>
  <section class="py-4">
    <h1 class="title">{{ title }}</h1>
    <p class="text-gray-600">{{ subtitle }}</p>
  </section>
</template>