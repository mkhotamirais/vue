<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("Ahmad");
    const status = ref("active");
    const tasks = ref(["Task One", "Task Two", "Task Three"]);

    const toggleStatus = () => {
      if (status.value === "active") {
        status.value = "pending";
      } else if (status.value === "pending") {
        status.value = "inactive";
      } else {
        status.value = "active";
      }
    };

    return { name, status, tasks, toggleStatus };
  },
};
</script>

<template>
  <section class="py-4">
    <h1 class="title">Less 2: Composition API: Part 1</h1>

    <!-- v-if -->
    <h2 class="title">v-if</h2>
    <div>
      <p v-if="status === 'active'">User is active</p>
      <p v-else-if="status === 'pending'">User is pending</p>
      <p v-else>User is inactive</p>
      <button v-on:click="toggleStatus" class="border">Change Status</button>
    </div>

    <h2 class="title">v-for</h2>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </section>
</template>
