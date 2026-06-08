<template>
  <div
    v-if="product"
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10"
  >

    <!-- TOP SECTION -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

      <!-- LEFT : MEDIA -->
      <div>

        <!-- MAIN MEDIA -->
        <div :key="selectedMedia.url"
          class="bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-800 w-full aspect-[4/3] flex items-center justify-center"
        >

          <!-- IMAGE -->
          <img
            v-if="selectedMedia.type === 'image'"
            :src="selectedMedia.url"
            :alt="product.name"
            @click="showLightbox = true"
            class="max-w-full max-h-full object-contain p-3 md:p-6 cursor-zoom-in"
          />

          <!-- VIDEO -->
          <video
            v-else
            controls
            class="max-w-full max-h-full object-contain p-3 md:p-6"
          >
            <source
              :src="selectedMedia.url"
              type="video/mp4"
            />
          </video>

        </div>

        <!-- THUMBNAILS -->
        <div class="flex gap-3 md:gap-4 overflow-x-auto mt-4 md:mt-5 pb-2">

          <div
            v-for="(item, index) in mediaItems"
            :key="index"
            @click="currentIndex = index"
            class="relative w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer border-2 flex-shrink-0 transition-all duration-300 bg-black"
            :class="
              currentIndex === index
                ? 'border-white scale-105'
                : 'border-transparent opacity-70 hover:opacity-100'
            "
          >

            <!-- IMAGE -->
            <img
              v-if="item.type === 'image'"
              :src="item.url"
              class="w-full h-full object-contain p-1"
            />

            <!-- VIDEO -->
            <div
              v-else
              class="w-full h-full flex items-center justify-center text-white text-2xl md:text-3xl"
            >
              ▶
            </div>

          </div>

        </div>

      </div>

      <!-- RIGHT : INFO -->
      <div class="pt-1 md:pt-2">

        <!-- BADGE -->
        <div class="mb-4">

          <span
            v-if="product.stockStatus === 'ready'"
            class="bg-green-500 text-white text-xs px-3 py-1 rounded-full"
          >
            Ready Stock
          </span>

          <span
            v-else-if="product.stockStatus === 'sold'"
            class="bg-red-500 text-white text-xs px-3 py-1 rounded-full"
          >
            Sold Out
          </span>

          <span
            v-else-if="product.stockStatus === 'hot'"
            class="bg-orange-500 text-white text-xs px-3 py-1 rounded-full"
          >
            Hot Item
          </span>

        </div>

        <!-- TITLE -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
          {{ product.name }}
        </h1>

        <!-- BRAND -->
        <p class="text-gray-500 text-base md:text-lg mb-5 md:mb-6">
          {{ product.brand }}
        </p>

        <!-- PRICE -->
        <p class="text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8">
          Rp {{ formatPrice(product.price) }}
        </p>

        <!-- DESCRIPTION -->
        <p class="text-gray-600 leading-relaxed text-base md:text-lg mb-8 md:mb-10">
          {{ product.description }}
        </p>

        <!-- BUTTON -->
        <a
          :href="waLink"
          target="_blank"
          class="inline-flex items-center justify-center w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-lg transition text-base md:text-lg font-semibold"
        >
          Hubungi via WhatsApp
        </a>

      </div>

    </div>

    <!-- SPECIFICATION -->
    <div class="mt-12 md:mt-16">

      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-6">
        Spesifikasi Mesin
      </h2>

      <div class="bg-white rounded-2xl md:rounded-3xl border border-gray-200 overflow-hidden shadow-sm">

        <div
          v-for="(value, key) in product.specifications"
          :key="key"
          class="grid grid-cols-2 border-b border-gray-100 last:border-b-0"
        >

          <!-- LABEL -->
          <div class="bg-gray-50 px-4 md:px-6 py-4 md:py-5 font-semibold text-gray-700 capitalize text-sm md:text-base break-words">
            {{ key }}
          </div>

          <!-- VALUE -->
          <div class="px-4 md:px-6 py-4 md:py-5 text-gray-600 text-sm md:text-base break-words">
            {{ value }}
          </div>

        </div>

      </div>

    </div>

    <!-- LIGHTBOX -->
    <div
      v-if="showLightbox"
      @click.self="showLightbox = false"
      class="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center px-4"
    >

      <!-- CLOSE -->
      <button
        @click="showLightbox = false"
        class="absolute top-4 md:top-6 right-4 md:right-6 text-white text-3xl md:text-4xl z-50"
      >
        ✕
      </button>

      <!-- PREV -->
      <button
        @click.stop="prevMedia"
        class="absolute left-2 md:left-6 text-white text-4xl md:text-5xl z-50 hover:scale-110 transition"
      >
        ‹
      </button>

      <!-- NEXT -->
      <button
        @click.stop="nextMedia"
        class="absolute right-2 md:right-6 text-white text-4xl md:text-5xl z-50 hover:scale-110 transition"
      >
        ›
      </button>

      <!-- CONTENT -->
      <div
        @click.stop
        class="relative flex items-center justify-center"
      >

        <!-- IMAGE -->
        <img
          v-if="selectedMedia.type === 'image'"
          :src="selectedMedia.url"
          class="max-w-full md:max-w-[92vw] max-h-[80vh] md:max-h-[88vh] object-contain rounded-2xl md:rounded-3xl shadow-2xl"
        />

        <!-- VIDEO -->
        <video
          v-else
          controls
          autoplay
          class="max-w-full md:max-w-[92vw] max-h-[80vh] md:max-h-[88vh] object-contain rounded-2xl md:rounded-3xl shadow-2xl"
        >
          <source
            :src="selectedMedia.url"
            type="video/mp4"
          />
        </video>

      </div>

    </div>

  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/products'
import { useHead } from '@vueuse/head'

const route = useRoute()

const productId = route.params.slug.split('-')[0]
const product = products.find(
  p => p.id == productId
)

const currentIndex = ref(0)
const showLightbox = ref(false)

const mediaItems = computed(() => {
  return [
    ...(product.images || []).map(img => ({
      type: 'image',
      url: img
    })),

    ...(product.video || []).map(video => ({
      type: 'video',
      url: video
    }))
  ]
})

const selectedMedia = computed(
  () => mediaItems.value[currentIndex.value]
)

const nextMedia = () => {
  if (currentIndex.value < mediaItems.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prevMedia = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = mediaItems.value.length - 1
  }
}

const handleKey = (e) => {
  if (!showLightbox.value) return

  if (e.key === 'ArrowRight') nextMedia()
  if (e.key === 'ArrowLeft') prevMedia()
  if (e.key === 'Escape') showLightbox.value = false
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})

const formatPrice = (price) => {
  return price.toLocaleString('id-ID')
}

useHead({
  title: `${product.name} | Offset Machinery Market`,
  meta: [
    {
      name: 'description',
      content: product.description
    },

    {
      property: 'og:title',
      content: `${product.name} | Offset Machinery Market`
    },

    {
      property: 'og:description',
      content: product.description
    },

    {
      property: 'og:image',
      content: product.images[0]
    },

    {
      property: 'og:type',
      content: 'product'
    }
  ]
})

const waLink =
  `https://wa.me/628123456789?text=Halo, saya tertarik dengan ${product.name}. bisakah saya mendapatkan informasi lebih lanjut?`
</script>