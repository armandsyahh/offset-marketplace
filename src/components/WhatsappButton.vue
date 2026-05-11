<template>
  <a
    :href="waLink"
    target="_blank"
    class="fixed bottom-6 right-6 bg-green-500 px-4 py-3 flex items-center gap-2 rounded-full shadow-xl hover:scale-110 transition"
  >
    <span class="text-white text-2xl">💬</span>
    <span class="text-white font-medium text-sm">Hubungi Kami</span>
  </a>
</template>

<script setup>
const waLink = "https://wa.me/6281333537681"
</script>