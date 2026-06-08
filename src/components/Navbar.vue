<template>
  <nav :class="['fixed top-0 left-0 w-full z-50 transition-all duration-300', scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200'
        : 'bg-white/70 backdrop-blur-md']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <router-link to="/" class="flex items-center">
        <img
          :src="logo"
          alt="Aprinta Offset Machinery Market Logo"
          class="h-20 w-auto object-contain items-center"
        />
      </router-link>

      <!-- DESKTOP MENU -->
      <div class="hidden md:flex items-center gap-2">
        <router-link to="/" class="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-black transition">
          Beranda
        </router-link>

        <router-link to="/product" class="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-black transition">
          Produk
        </router-link>

        <router-link to="/about" class="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-black transition">
          Tentang Kami
        </router-link>
      </div>

      <!-- MOBILE BUTTON -->
      <button @click="mobileMenu = !mobileMenu" class="md:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">

        <!-- ICON -->
        <svg
          v-if="!mobileMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <!-- CLOSE -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >

      <div v-if="mobileMenu" class="md:hidden px-4 pb-5">
        <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 p-3 flex flex-col">
          <router-link @click="mobileMenu = false" to="/" class="px-4 py-3 rounded-xl hover:bg-gray-100 transition">
            Beranda
          </router-link>

          <router-link @click="mobileMenu = false" to="/product" class="px-4 py-3 rounded-xl hover:bg-gray-100 transition">
            Produk
          </router-link>

          <router-link @click="mobileMenu = false" to="/about" class="px-4 py-3 rounded-xl hover:bg-gray-100 transition">
            Tentang Kami
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logo from "../assets/logo.png";

const scrolled = ref(false);
const mobileMenu = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>