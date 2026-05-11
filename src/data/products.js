import img52_1 from '../assets/52_1.png'
import img52_2 from '../assets/52_2.png'
import img52_3 from '../assets/52_3.png'
import img52_4 from '../assets/52_4.png'
import img58_1 from '../assets/58_1.png'
import img58_2 from '../assets/58_2.png'
import img58_3 from '../assets/58_3.png'
import img58_4 from '../assets/58_4.png'
import img272_1 from '../assets/272_1.jpg'
import img272_2 from '../assets/272_2.jpg'
import img272_3 from '../assets/272_3.jpg'
import img272_4 from '../assets/272_4.jpg'
import img272_5 from '../assets/272_5.jpg'
import img272_6 from '../assets/272_6.jpg'
import vid272_1 from '../assets/272_7.mp4'
import vid272_2 from '../assets/272_8.mp4'
import vid272_3 from '../assets/272_9.mp4'
import vid272_4 from '../assets/272_10.mp4'

export const products = [
  {
    id: 1,
    name: "Oliver 52",
    brand: "Sakurai",
    price: 140000000,
    images: [img52_1, img52_2, img52_3, img52_4],
    video: [vid272_1],
    description: "Mesin offset Oliver 52 kondisi siap pakai, hasil cetak tajam, cocok untuk percetakan skala menengah.",
    specifications: {
    ukuran: "520 x 365 mm",
    warna: "1 Warna",
    tahun: "1987",
    kondisi: "Siap Pakai",
    listrik: "3,5 kW",
    speed: "4000-12000 lembar/jam",
    lokasi: "Surabaya"},
    stockStatus: "hot"
  },
  {
    id: 2,
    name: "Oliver 58",
    brand: "Sakurai",
    price: 135000000,
    images: [img58_4, img58_2, img58_3, img58_1],
    video: [vid272_1],
    description: "Ukuran lebih besar, performa stabil, cocok untuk produksi lebih tinggi.",
    specifications: {
      ukuran: "580 x 400 mm",
      warna: "1 Warna",
      tahun: "1984",
      kondisi: "Siap Pakai",
      listrik: "4,05 kW",
      speed: "4300-12000 lembar/jam",
      lokasi: "Jakarta"
    },
    stockStatus: "hot"
  },
  {
    id: 3,
    name: "Oliver 272",
    brand: "Sakurai",
    price: 220000000,
    images: [img272_1,img272_2,img272_3, img272_4, img272_5, img272_6],
    video: [vid272_1, vid272_2, vid272_3, vid272_4],
    description: "Mesin offset besar dengan performa tinggi, siap produksi berat.",
    specifications: {
      ukuran: "720 x 520 mm",
      warna: "2 Warna",
      tahun: "1988",
      kondisi: "Siap Pakai",
      listrik: "Normal",
      speed: "4000-12000 lembar/jam",
      lokasi: "Surabaya"
    },
    stockStatus: "ready"
  },
  
]