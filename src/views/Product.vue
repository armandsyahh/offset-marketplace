<template>
  <div class="min-h-screen bg-gray-100">

    <!-- HEADER -->
    <section class="bg-black text-white py-20">
      <div class="max-w-6xl mx-auto px-6">

        <h1 class="text-5xl font-bold mb-4 animate-fade-up">
          Produk Mesin Percetakan
        </h1>

        <p class="text-gray-300 max-w-2xl animate-fade-in">
          Temukan berbagai pilihan mesin percetakan berkualitas
          dengan kondisi siap produksi dan performa terbaik.
        </p>

      </div>
    </section>

    <!-- PRODUCTS -->
    <section class="max-w-6xl mx-auto px-6 py-16">

      <!-- TOP BAR -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">

        <div>
          <h2 class="text-2xl font-bold text-gray-900">
            Semua Produk
          </h2>
          <p class="text-gray-500">
            {{ filteredProducts.length }} produk tersedia
          </p>
        </div>

        <!-- SEARCH -->
        <input
          v-model="search"
          type="text"
          placeholder="Cari mesin..."
          class="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black w-full md:w-80"
        />

      </div>

      <!-- GRID -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard
          v-for="item in filteredProducts"
          :key="item.id"
          :product="item"
        />
      </div>

      <!-- EMPTY -->
      <div
        v-if="filteredProducts.length === 0"
        class="text-center py-20 text-gray-500">
        Produk tidak ditemukan.
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

const search = ref('')

const filteredProducts = computed(() => {
  const statusPriority = {
    hot: 1,
    ready: 2,
    sold: 3
  }

  return products
    .filter(product =>
      product.name.toLowerCase().includes(search.value.toLowerCase())
    )
    .sort((a, b) => {
      return statusPriority[a.stockStatus] - statusPriority[b.stockStatus]
    })
})

const createSlug = (product) => {
  return `${product.id}-${product.name
    .toLowerCase()
    .replace(/\s+/g, '-')}`
}
</script>