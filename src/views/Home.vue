<template>
  <div>

    <!-- HERO -->
    <section class="relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <!-- TEXT -->
        <div class="animate-fade-up">
          <h1 class="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Mesin Percetakan Berkualitas
            <span class="text-gray-400">Siap Produksi</span>
          </h1>

          <p class="text-gray-500 mb-6">
            Temukan mesin percetakan terbaik untuk kebutuhan percetakan Anda.
            Kondisi prima, siap kerja, dan terpercaya.
          </p>

          <a
            href="#produk"
            class="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition shadow-lg"
          >
            Lihat Produk
          </a>
        </div>

        <!-- IMAGE -->
        <div class="relative animate-fade-in w-full aspect-[3/2]">
          <transition name="fade" mode="out-in">
            <img
              :key="carouselImages[currentImage]"
              :src="carouselImages[currentImage]"
              class="absolute inset-0 rounded-2xl shadow-2xl h-full w-full object-cover"
            />
          </transition>
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
    
    <!-- ABOUT PREVIEW -->
    <section class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <!-- IMAGE -->
      <div class="relative animate-fade-in">
        <img :src="IMG_2242" class="rounded-2xl shadow-2xl object-cover "/>
      </div>
      <!-- TEXT -->
      <div class="animate-fade-up">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Tentang Kami
        </h2>
        
        <p class="text-gray-600 mb-4 leading-relaxed">
          Kami menyediakan mesin percetakan berkualitas yang siap digunakan untuk kebutuhan
          percetakan profesional. Setiap unit telah melalui pengecekan untuk memastikan
          performa tetap optimal.
        </p>
        
        <p class="text-gray-600 mb-6 leading-relaxed">
          Fokus kami adalah memberikan solusi mesin yang tepat dengan harga kompetitif
          serta layanan yang dapat dipercaya.
        </p>

        <router-link
          to="/about"
          class="inline-block bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Pelajari Lebih Lanjut
        </router-link>
      </div>
      
    </section>
    
    <!-- TRUST STATS -->
    <section class="bg-white py-12">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div>
          <h3 class="text-2xl font-bold text-gray-900">20+</h3>
          <p class="text-gray-500 text-sm">Mesin Terjual</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900">10+</h3>
          <p class="text-gray-500 text-sm">Tahun Pengalaman</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900">100%</h3>
          <p class="text-gray-500 text-sm">Siap Produksi</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-gray-900">24/7</h3>
          <p class="text-gray-500 text-sm">Support Konsultasi</p>
        </div>

      </div>
    </section>

    <!-- TESTIMONI -->
    <section class="max-w-6xl mx-auto px-6 py-16">

      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900">
          Apa Kata Pembeli
        </h2>
        <p class="text-gray-500 mt-2">
          Kepercayaan pelanggan adalah prioritas kami
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <TestimonialCard
          v-for="(t, i) in testimonials"
          :key="i"
          :item="t"
        />
      </div>
    </section>

    <!-- PRODUCT LIST -->
    <section id="produk" class="max-w-6xl mx-auto px-6 pb-16">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-gray-900">
          Produk Tersedia
        </h2>
      </div>

      <!-- PRODUCT GRID -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ProductCard
          v-for="item in sortedProducts.slice(0, 3)"
          :key="item.id"
          :product="item"
        />
      </div>

      <!-- BUTTON -->
      <div class="mt-12 flex justify-center">
        <router-link
          to="/product" class="inline-flex items-center gap-3 bg-black text-white px-7 py-3 rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-xl hover:scale-105">
          Muat Lebih Banyak
          <span class="text-lg">→</span>
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import { testimonials } from '../data/testimonials';
import { ref, onMounted, onUnmounted } from 'vue'

import IMG_2242 from '../assets/IMG_2242.jpg'
import carousel1 from '../assets/carousel1.jpg' 
import carousel2 from '../assets/carousel2.jpg'
import carousel3 from '../assets/carousel3.jpg'

const carouselImages = [
  carousel1,
  carousel2,
  carousel3
]

const currentImage = ref(0)

let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentImage.value =
      (currentImage.value + 1) % carouselImages.length
  }, 6000)
})

onUnmounted(() => {
  clearInterval(interval)
})

import { computed } from 'vue'

const sortedProducts = computed(() => {
  const statusPriority = {
    hot: 1,
    ready: 2,
    sold: 3
  }

  return [...products].sort((a, b) => {
    return statusPriority[a.stockStatus] - statusPriority[b.stockStatus]
  })
})
</script>