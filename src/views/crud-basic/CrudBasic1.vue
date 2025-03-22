<script setup>
import { ref } from "vue";
import crudSource from "@/views/crud-basic/crudBasic1Data";
import CrudBasic1Card from "@/views/crud-basic/CrudBasic1Card.vue";

const crudData = ref(crudSource);

const title = ref("");
const description = ref("");

const addData = () => {
  const newData = { title: title.value, description: description.value };
  if (title.value === "" || description.value === "") return;
  crudData.value.push(newData);
  title.value = "";
  description.value = "";
};

const deleteData = (i) => {
  crudData.value.splice(i, 1);
};
</script>

<template>
  <section class="py-4">
    <h1 class="title">Crud Basic 1</h1>
    <p>
      Berikut adalah crud basic yang memorinya tidak disimpan di localstorage
    </p>

    <form @submit.prevent="addData" class="flex flex-col max-w-xl">
      <input type="text" placeholder="title" class="border" v-model="title" />
      <textarea
        cols="30"
        rows="5"
        class="border"
        v-model="description"
        placeholder="description"
      ></textarea>
      <button type="submit" class="btn w-fit">Submit</button>
    </form>

    <!-- list -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CrudBasic1Card
        v-for="(data, i) in crudData"
        :key="i"
        :data="data"
        :limit="3"
        :i="i"
        :deleteData="deleteData"
      />
    </div>
  </section>
</template>