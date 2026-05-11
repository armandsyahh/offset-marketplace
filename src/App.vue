<template>
  <Analytics />
  <Navbar />
  <main class="pt-20">
    <router-view />
  </main>
    <Footer />
    <WhatsappButton />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import WhatsappButton from './components/WhatsappButton.vue';
import { Analytics } from '@vercel/analytics/vue';
</script>