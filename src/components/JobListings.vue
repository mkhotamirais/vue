<script setup>
import jobData from "@/jobs.json";
import JobListing from "@/components/JobListing.vue";
import { ref } from "vue";

const jobs = ref(jobData);

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <section class="py-12 bg-blue-50">
    <h2>Browse Job</h2>
    <div class="grid grid-cols-2">
      <JobListing
        v-for="job in jobs.slice(0, limit || jobs.length)"
        :key="job.id"
        :job="job"
      />
    </div>
    <a v-if="showButton" href="/jobs" class="border">Lihat Semua Job</a>
  </section>
</template>