<template>
  <div class="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">

    <p class="text-gray-600 mb-4 italic">
      "{{ item.message }}"
    </p>

    <div>
      <h3 class="font-semibold text-gray-900">
        {{ item.name }}
      </h3>
      <p class="text-sm text-gray-400">
        {{ item.business }}
      </p>
    </div>

  </div>
</template>

<script setup>
defineProps(['item'])
</script>