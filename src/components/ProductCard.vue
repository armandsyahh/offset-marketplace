<template>
  <router-link
    :to="'/product/' + product.id"
    class="block"
  >
    <!-- <div class="bg-white rounded-2xl relative overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group cursor-pointer"> -->
      <div :class="['bg-white rounded-2xl relative overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group', product.stockStatus === 'sold' ? 'opacity-70' : '']">
      <!-- BADGE -->
      <div class="absolute top-4 left-4 z-10">

        <span
          v-if="product.stockStatus === 'ready'"
          class="bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow"
        >
          Ready Stock
        </span>

        <span
          v-else-if="product.stockStatus === 'sold'"
          class="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow"
        >
          Sold Out
        </span>

        <span
          v-else-if="product.stockStatus === 'hot'"
          class="bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow"
        >
          Hot Item
        </span>
      </div>

      <!-- IMAGE -->
      <div class="overflow-hidden">
        <img
          :src="product.images?.[0] || product.image"
          class="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <!-- CONTENT -->
      <div class="p-5">

        <h2 class="font-semibold text-lg text-gray-900">
          {{ product.name }}
        </h2>

        <p class="text-gray-400 text-sm mb-2">
          {{ product.brand }}
        </p>

        <p class="text-xl font-bold text-black mb-4">
          Rp {{ formatPrice(product.price) }}
        </p>

        <!-- BUTTON -->
        <div
          class="block text-center bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition"
        >
          Lihat Detail
        </div>
      </div>
    </div>
    
  </router-link>
</template>

<script setup>
defineProps(['product'])

const formatPrice = (price) => {
  return price.toLocaleString('id-ID')
}
</script>