<script setup>
import { ref } from "vue";
import { routes } from "./router";
import { useRoute } from "vue-router";
import { RouterView } from "vue-router";
import Logo from "@/components/Logo.vue";
import Toast from "primevue/toast";

const route = useRoute();
const openNav = ref(false);
const showSubMenu = ref(null);

const toggleSubMenu = (i) => {
  showSubMenu.value = showSubMenu.value === i ? null : i;
};
</script>

<template>
  <Toast />
  <!-- header -->
  <header class="bg-white z-50 h-16 sticky top-0 shadow-md">
    <div class="container flex items-center justify-between">
      <div class="flex gap-3 items-center">
        <button
          @click="openNav = !openNav"
          class="flex cursor-pointer text-xl lg:hidden"
        >
          <i v-show="!openNav" class="pi pi-bars"></i>
          <i v-show="openNav" class="pi pi-times"></i>
        </button>
        <Logo />
      </div>
      <!-- desktop nav -->
      <div class="hidden lg:block">
        <nav class="flex">
          <div
            v-for="(r, i) in routes"
            :key="i"
            class="group relative flex h-16"
          >
            <RouterLink
              v-show="r.name !== 'not found'"
              :to="r.path"
              class="px-3 capitalize text-gray-500 hover:text-blue-500 transition-all flex items-center gap-2"
              :class="
                route.path === r.path ? 'text-blue-500 font-semibold' : ''
              "
            >
              <span class="">
                {{ r.name }}
              </span>

              <i
                v-if="r.children"
                class="pi pi-chevron-down group-hover:rotate-180 transition-all text-xs"
              ></i>
            </RouterLink>
            <div
              v-show="r.children"
              class="rounded-lg shadow-lg invisible opacity-0 group-hover:visible translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 absolute top-full p-4 bg-white transition-all"
            >
              <div class="min-w-max flex flex-col">
                <RouterLink
                  v-for="(c, i) in r.children"
                  v-show="c.path"
                  :key="i"
                  :to="c.path"
                  class="w-fit text-gray-500 hover:text-blue-500 py-1 capitalize"
                >
                  {{ c.name }}
                </RouterLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!-- mobile nav -->
      <div
        @click="openNav = false"
        class="flex lg:hidden fixed top-16 bottom-0 left-0 right-0 border-t border-gray-300 bg-black/10 transition-all duration-300 z-50"
        :class="openNav ? 'visible opacity-100' : 'invisible opacity-0'"
      >
        <div
          @click="(e) => e.stopPropagation()"
          class="bg-white w-72 h-full border-r border-gray-300 transition-all duration-200"
          :class="openNav ? 'translate-x-0' : '-translate-x-full'"
        >
          <nav class="p-4">
            <div v-for="(r, i) in routes" :key="i">
              <div
                class="flex justify-between items-center border-b border-gray-300 py-2"
                v-show="r.name !== 'not found'"
              >
                <RouterLink
                  @click="openNav = false"
                  :to="r.path"
                  class="w-full capitalize text-gray-500 hover:text-blue-500 transition-all"
                  :class="
                    route.path === r.path ? 'text-blue-500 font-semibold' : ''
                  "
                >
                  {{ r.name }}
                </RouterLink>
                <button
                  @click="toggleSubMenu(i)"
                  :class="showSubMenu === i ? 'rotate-180' : ''"
                  class="transition-all"
                >
                  <i
                    v-if="r.children"
                    class="pi pi-chevron-down w-6 text-center cursor-pointer transition-all text-xs"
                  ></i>
                </button>
              </div>

              <div
                v-show="r.children"
                class="pl-2 h-0 overflow-hidden transition-all"
                :class="showSubMenu === i ? 'active' : ''"
              >
                <div v-for="(c, i) in r.children" :key="i">
                  <RouterLink
                    v-show="c.path"
                    @click="openNav = false"
                    :to="c.path"
                    class="w-fit text-gray-500 hover:text-blue-500 py-1 inline-block capitalize"
                  >
                    {{ c.name }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <a
        href="https://wa.me/6287766606133"
        class="lg:bg-blue-500 lg:py-3 lg:px-6 flex items-center gap-3 rounded-full"
      >
        <i
          class="pi pi-whatsapp lg:text-2xl lg:text-green-300 text-green-600 text-4xl"
        ></i>
        <span class="hidden lg:block lg:text-white"> Contact Us </span>
      </a>
    </div>
  </header>

  <!-- main -->
  <main class="grow container">
    <RouterView />
  </main>

  <!-- footer -->
  <footer class="h-16 border-t">
    <div class="container">
      <p class="text-center">Footer</p>
    </div>
  </footer>
</template>

<style setup>
.active {
  height: calc-size(auto, size);
}
</style>