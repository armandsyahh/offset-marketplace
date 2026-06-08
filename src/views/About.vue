<template>
  <div class="max-w-5xl mx-auto px-6 pt-14 pb-20">

    <div class="animate-fade-up">
      <h1 class="text-4xl font-bold mb-6 text-gray-900">
        Tentang Kami
      </h1>

      <p class="text-gray-600 leading-relaxed mb-6">
        Kami adalah penyedia mesin percetakan berkualitas yang telah dipercaya
        oleh berbagai pelaku usaha percetakan. Fokus kami adalah menyediakan mesin
        siap pakai dengan performa optimal dan harga yang kompetitif.
      </p>

      <p class="text-gray-600 leading-relaxed mb-6">
        Setiap unit yang kami tawarkan telah melalui proses pengecekan untuk memastikan
        kondisi mesin tetap prima dan siap digunakan tanpa kendala.
      </p>

      <p class="text-gray-600 leading-relaxed">
        Kami percaya bahwa kualitas mesin dan kepercayaan pelanggan adalah kunci
        dalam membangun hubungan jangka panjang.
      </p>
    </div>

    <!-- highlight -->
    <div class="grid md:grid-cols-3 gap-6 mt-12">

      <div class="bg-white p-6 rounded-2xl shadow">
        <h3 class="font-semibold mb-2">Kualitas Terjamin</h3>
        <p class="text-gray-500 text-sm">
          Mesin telah dicek dan siap produksi.
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow">
        <h3 class="font-semibold mb-2">Harga Kompetitif</h3>
        <p class="text-gray-500 text-sm">
          Harga sesuai dengan kondisi dan performa.
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow">
        <h3 class="font-semibold mb-2">Support Konsultasi</h3>
        <p class="text-gray-500 text-sm">
          Siap membantu memilih mesin yang tepat.
        </p>
      </div>

    </div>

    <!-- LOCATION -->
    <section class="mt-20">

      <div class="mb-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">
          Lokasi Kami
        </h2>

        <p class="text-gray-500">
          Kunjungi lokasi kami untuk melihat kondisi mesin secara langsung.
        </p>
      </div>

      <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4696293804827!2d112.771626!3d-7.3010159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa59ff4512dd%3A0x7a08c6f096acf136!2sAprinta!5e0!3m2!1sen!2sid!4v1778359655197!5m2!1sen!2sid"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full"
        ></iframe>

      </div>

    </section>

  </div>
</template>

<script>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Tentang Kami | Offset Machinery Market',
  meta: [
    {
      name: 'description',
      content: 'Pelajari lebih lanjut tentang Aprinta Offset Machinery Market.'
    }
  ]
})
</script>