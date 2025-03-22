<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  job: Object,
});

const showFullDescription = ref(false);

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};

const truncatedDescription = computed(() => {
  let description = props.job.description;
  if (!showFullDescription.value) {
    description = description.substring(0, 50) + "...";
  }
  return description;
});
</script>

<template>
  <div class="bg-green-50">
    <div>
      <i class="pi pi-map-marker"></i>
      {{ job.id }}
    </div>
    <h3>{{ job.title }}</h3>
    <div>
      <div>
        {{ truncatedDescription }}
      </div>
      <button @click="toggleDescription">
        {{ showFullDescription ? "Read Less" : "Read More" }}
      </button>
    </div>
    <a :href="'/job/' + job.id" class="border">Lihat</a>
  </div>
</template>