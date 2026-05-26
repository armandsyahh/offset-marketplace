<template>
  <Analytics />
  <Navbar />
  <main class="pt-20">
    <router-view />
  </main>
    <Footer />
    <WhatsappButton />
    <Analytics />
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue';
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
import WhatsappButton from './components/WhatsappButton.vue';
import { Analytics } from '@vercel/analytics/vue';
</script>