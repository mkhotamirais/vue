<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import { useToast } from "primevue/usetoast";
import Button from "primevue/button";
import Toast from "primevue/toast";

const toast = useToast();

const state = reactive({
  products: [],
  isLoading: true,
});

const name = ref("");
const price = ref(0);
const loadAdd = ref(false);

const getProducts = async () => {
  try {
    state.isLoading = true;
    const response = await axios.get(
      "https://api-mysql2.vercel.app/api-mysql2/v1/product"
    );
    state.products = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    state.isLoading = false;
  }
};

const addProduct = () => {
  loadAdd.value = true;
  axios
    .post("https://api-mysql2.vercel.app/api-mysql2/v1/product", {
      name: name.value,
      price: price.value,
    })
    .then((response) => {
      getProducts();
      state.products.push(response.data);
      name.value = "";
      price.value = 0;
      toast.add({
        severity: "info",
        summary: "Info",
        detail: "Product added successfully",
        life: 3000,
      });
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.response.data.message,
        life: 3000,
      });
      console.error("Error adding product:", error);
    })
    .finally(() => {
      loadAdd.value = false;
    });
};

const delProduct = (id) => {
  axios
    .delete("https://api-mysql2.vercel.app/api-mysql2/v1/product/" + id)
    .then((response) => {
      getProducts();
      toast.add({
        severity: "info",
        summary: "Info",
        detail: "Product deleted successfully",
        life: 3000,
      });
    })
    .catch((error) => {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: error.response.data.message,
        life: 3000,
      });
      console.error("Error deleting product:", error);
    });
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <section class="py-4">
    <h1 class="title">Curd Api 1</h1>
    <!-- add -->
    <form @submit.prevent="addProduct" class="flex flex-col max-w-sm">
      <input type="text" placeholder="name" v-model="name" class="border" />
      <input type="number" placeholder="price" v-model="price" class="border" />
      <button type="submit" :disabled="loadAdd">
        {{ loadAdd ? "Loading..." : "Add Product" }}
      </button>
    </form>
    <!-- list -->
    <div v-if="state.isLoading">
      <i class="pi pi-spin pi-spinner"></i>
    </div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
      <div
        v-for="product in state.products"
        :key="product.id"
        class="border p-2 rounded"
      >
        <RouterLink
          :to="'/crud-api/less1/' + product.id"
          class="text-blue-500 hover:underline"
          >{{ product.name }}</RouterLink
        >
        <button class="border cursor-pointer" @click="delProduct(product.id)">
          Del
        </button>
      </div>
    </div>
  </section>
</template>