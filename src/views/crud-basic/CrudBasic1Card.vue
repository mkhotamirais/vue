<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  data: {
    type: Object,
  },
  limit: {
    type: Number,
    default: 5,
  },
  deleteData: Function,
  i: Number,
});

const showFullDesc = ref(false);

const toggleDescription = () => {
  showFullDesc.value = !showFullDesc.value;
};

const truncatedDesc = computed(() => {
  let description = props.data.description;
  if (!showFullDesc.value) {
    description = description.substring(0, 50) + "...";
  }
  return description;
});
</script>

<template>
  <div class="border rounded p-2">
    <div>
      <h2>{{ data.title }}</h2>
      <p>
        {{ truncatedDesc }}
        <button
          @click="toggleDescription"
          class="text-blue-500 hover:underline"
        >
          {{ showFullDesc ? "Read Less" : "Read More" }}
        </button>
      </p>
    </div>
    <button class="border cursor-pointer" @click="deleteData(i)">Del</button>
  </div>
</template>