<template>
  <footer class="relative bg-black text-gray-300 mt-24 overflow-hidden">

    <!-- BLUR EFFECT -->
    <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

      <!-- TOP -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

        <!-- BRAND -->
        <div>

          <!-- LOGO -->
          <div class="flex items-center gap-3 mb-5">
            <div>
              <h2 class="text-white font-bold text-xl">
                Offset Market
              </h2>
            </div>

          </div>

          <p class="text-gray-400 text-sm leading-relaxed">
            Menyediakan mesin percetakan berkualitas,
            siap produksi, terpercaya, dan cocok untuk
            kebutuhan bisnis printing profesional.
          </p>

        </div>

        <!-- NAVIGATION -->
        <div>

          <h3 class="text-white font-semibold text-lg mb-5">
            Navigasi
          </h3>

          <ul class="space-y-3 text-sm">

            <li>
              <router-link
                to="/"
                class="hover:text-white transition"
              >
                Beranda
              </router-link>
            </li>

            <li>
              <router-link
                to="/product"
                class="hover:text-white transition"
              >
                Produk
              </router-link>
            </li>

            <li>
              <router-link
                to="/about"
                class="hover:text-white transition"
              >
                Tentang Kami
              </router-link>
            </li>

          </ul>

        </div>

        <!-- CONTACT -->
        <div>

          <h3 class="text-white font-semibold text-lg mb-5">
            Kontak
          </h3>

          <div class="space-y-4 text-sm">

            <!-- WA -->
            <a
              href="https://wa.me/6281333537681"
              target="_blank"
              class="flex items-start gap-3 hover:text-white transition"
            >

              <div class="mt-1">
                💬
              </div>

              <div>
                <p class="text-gray-500 text-xs mb-1">
                  WhatsApp
                </p>

                <p>
                  +62 813-3353-7681
                </p>
              </div>

            </a>

            <!-- EMAIL -->
            <div class="flex items-start gap-3">

              <div class="mt-1">
                ✉️
              </div>

              <div>
                <p class="text-gray-500 text-xs mb-1">
                  Email
                </p>

                <p>
                  jualbelioffset@gmail.com
                </p>
              </div>

            </div>

            <!-- ADDRESS -->
            <div class="flex items-start gap-3">

              <div class="mt-1">
                📍
              </div>

              <div>
                <p class="text-gray-500 text-xs mb-1">
                  Alamat
                </p>

                <p>
                  Nginden Semolo No 100C<br />
                  Surabaya
                </p>
              </div>

            </div>

          </div>

        </div>

        <!-- CTA -->
        <div>

          <h3 class="text-white font-semibold text-lg mb-5">
            Konsultasi Mesin
          </h3>

          <p class="text-sm text-gray-400 leading-relaxed mb-5">
            Bingung memilih mesin yang sesuai?
            Hubungi kami untuk konsultasi dan penawaran terbaik.
          </p>

          <a
            href="https://wa.me/6281333537681"
            target="_blank"
            class="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-6 py-3 rounded-2xl hover:bg-gray-200 transition font-semibold shadow-xl"
          >
            Hubungi Sekarang
          </a>

        </div>

      </div>

      <!-- BOTTOM -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <p class="text-gray-500 text-sm text-center md:text-left">
          © 2026 Offset Market. All rights reserved.
        </p>

        

      </div>

    </div>

  </footer>
</template>