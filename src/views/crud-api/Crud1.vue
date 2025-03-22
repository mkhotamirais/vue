<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://api-mysql2.vercel.app/api-mysql2/v1/product"
    );
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <section class="py-4">
    <h1 class="title">Curd1</h1>
    <div v-for="product in products" :key="product.id">
      <p>{{ product.name }}</p>
    </div>
  </section>
</template>