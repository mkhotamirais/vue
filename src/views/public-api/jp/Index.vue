<script setup>
import { ref, onMounted } from "vue";
const tasks = ref(["Task One", "Task Two", "Task Three"]);
const newTask = ref("");

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (i) => {
  tasks.value.splice(i, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section class="py-4">
    <h1 class="title">Jsonplaceholder</h1>
    <h1>Tasks</h1>

    <form @submit.prevent="addTask">
      <input
        type="text"
        placeholder="add task"
        name="newTask"
        v-model="newTask"
      />
      <button type="submit">add task</button>
    </form>

    <ul>
      <li v-for="(task, i) in tasks" :key="task">
        <span>
          {{ task }}
        </span>
        <button @click="deleteTask(i)">Del</button>
      </li>
    </ul>
  </section>
</template>
