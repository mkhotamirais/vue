<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const state = reactive({
  product: {},
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://api-mysql2.vercel.app/api-mysql2/v1/product/${id}`
    );
    state.product = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="py-4">
    <h1 class="title">Curd Api 1 Det {{ id }}</h1>
    <div v-if="state.isLoading">
      <i class="pi pi-spin pi-spinner"></i>
    </div>
    <div v-else>
      <p>{{ state.product.name }}</p>
      <p>{{ state.product.price }}</p>
    </div>
  </section>
</template>