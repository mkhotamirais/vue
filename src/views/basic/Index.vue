<script setup>
const links = [
  { path: "/basic/less1", name: "Less 1" },
  { path: "/basic/less2", name: "Less 2" },
];
</script>

<template>
  <section class="py-4">
    <h1 class="title">Basic</h1>
    <nav class="flex flex-col">
      <RouterLink
        v-for="(link, i) in links"
        :key="i"
        :to="link.path"
        class="my-1 text-gray-500 hover:text-black w-fit"
        >{{ link.name }}</RouterLink
      >
    </nav>
  </section>
</template>