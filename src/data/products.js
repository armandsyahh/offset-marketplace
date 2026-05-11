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
    ukuran: "52 x 36 cm",
    warna: "1 Color",
    kondisi: "Siap Pakai",
    listrik: "Normal",
    tahun: "2005",
    speed: "5000 lembar/jam",
    lokasi: "Surabaya"},
    stockStatus: "ready"
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
      ukuran: "58 x 40 cm",
      warna: "1 Color",
      kondisi: "Siap Pakai",
      listrik: "Normal",
      tahun: "2008",
      speed: "6000 lembar/jam",
      lokasi: "Jakarta"
    },
    stockStatus: "ready"
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
      ukuran: "72 x 102 cm",
      warna: "4 Color",
      kondisi: "Siap Pakai",
      listrik: "Normal",
      tahun: "2010",
      speed: "8000 lembar/jam",
      lokasi: "Bandung"
    },
    stockStatus: "sold"
  },
  {id:4,
    name: "Sors",
    brand: "Heidelberg",
    price: 140000000,
    video: ["https://www.youtube.com/embed/VIDEO_ID"],
    images: [img52_1, img52_2, img52_3, img52_4],
    description: "Mesin offset Heidelberg Sors kondisi siap pakai, hasil cetak tajam.",
    specifications: {
      ukuran: "52 x 36 cm",
      warna: "1 Color",
      kondisi: "Siap Pakai",
      listrik: "Normal",
      tahun: "2005",
      speed: "5000 lembar/jam",
      lokasi: "Surabaya"
    },
    stockStatus: "hot"
  }
]