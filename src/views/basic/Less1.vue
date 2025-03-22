<script>
export default {
  data() {
    return {
      name: "Ahmad",
      name2: "<i>Ahmad</i>",
      status: "active",
      tasks: ["Task One", "Task Two", "Task Three"],
      googleLink: "https://google.com",
    };
  },
  methods: {
    changeStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <section class="py-4">
    <h1 class="title">Less 1 : Options API part 1</h1>

    <h2 class="title">v-name - v-html - double curly braces</h2>
    <div>
      <p>{{ name }}</p>
      <p v-text="name"></p>
      <p v-html="name2"></p>
    </div>

    <h2 class="title">v-if - v-else - v-else-if</h2>
    <div>
      <p v-if="status === 'active'">Status active</p>
      <p v-else-if="status === 'pending'">Status pending</p>
      <p v-else>Status inactive</p>
    </div>

    <h2 class="title">v-on or @</h2>
    <button @click="changeStatus" class="border">Change Status</button>

    <h2 class="title">v-for</h2>
    <div>
      <p v-for="(task, i) in tasks" :key="i">{{ task }}</p>
    </div>

    <h2 class="title">v-bind or :</h2>
    <div>
      <a :href="googleLink" class="text-blue-500">Google</a>
    </div>
  </section>
</template>