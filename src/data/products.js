const img52_1 = "/uploads/products/52_Bali/52_1.png";
const img52_2 = "/uploads/products/52_Bali/52_2.png";
const img52_3 = "/uploads/products/52_Bali/52_3.png";
const img52_4 = "/uploads/products/52_Bali/52_4.png";
const img58_1 = "/uploads/products/58_Bali/58_1.png";
const img58_2 = "/uploads/products/58_Bali/58_2.png";
const img58_3 = "/uploads/products/58_Bali/58_3.png";
const img58_4 = "/uploads/products/58_Bali/58_4.png";
const img272_1 = "/uploads/products/272_Aprinta/272_1.jpg";
const img272_2 = "/uploads/products/272_Aprinta/272_2.jpg";
const img272_3 = "/uploads/products/272_Aprinta/272_3.jpg";
const img272_4 = "/uploads/products/272_Aprinta/272_4.jpg";
const img272_5 = "/uploads/products/272_Aprinta/272_5.jpg";
const img272_6 = "/uploads/products/272_Aprinta/272_6.jpg";
const vid272_1 = "/uploads/products/272_Aprinta/272_7.mp4";
const vid272_2 = "/uploads/products/272_Aprinta/272_8.mp4";
const vid272_3 = "/uploads/products/272_Aprinta/272_9.mp4";
const vid272_4 = "/uploads/products/272_Aprinta/272_10.mp4";
const imgsorM_1 = "/uploads/products/SorM_Aprinta/imgsorM_1.JPG";
const imgsorM_2 = "/uploads/products/SorM_Aprinta/imgsorM_2.JPG";
const imgsorM_3 = "/uploads/products/SorM_Aprinta/imgsorM_3.JPG";
const imgsorM_4 = "/uploads/products/SorM_Aprinta/imgsorM_4.JPG";
const imgsorM_5 = "/uploads/products/SorM_Aprinta/imgsorM_5.JPG";
const imgsorM_6 = "/uploads/products/SorM_Aprinta/imgsorM_6.JPG";

export const products = [
  {
    id: 1,
    name: "Oliver 52",
    brand: "Sakurai",
    price: 125000000,
    images: [img52_1, img52_2, img52_3, img52_4],
    video: [vid272_1],
    description:
      "Mesin offset Oliver 52 kondisi siap pakai, hasil cetak tajam, cocok untuk percetakan skala menengah.",
    specifications: {
      ukuran: "520 x 360 mm",
      warna: "1 Warna",
      tahun: "1987",
      kondisi: "Siap Pakai",
      listrik: "~3,5 kW",
      speed: "4000-12000 lembar/jam",
      lokasi: "Surabaya",
    },
    stockStatus: "hot",
  },
  {
    id: 2,
    name: "Oliver 8",
    brand: "Sakurai",
    price: 110000000,
    images: [img58_4, img58_2, img58_3, img58_1],
    video: [vid272_1],
    description:
      "Ukuran lebih besar, performa stabil, cocok untuk produksi lebih tinggi.",
    specifications: {
      ukuran: "580 x 440 mm",
      warna: "1 Warna",
      tahun: "1984",
      kondisi: "Siap Pakai",
      listrik: "~4,05 kW",
      speed: "4300-12000 lembar/jam",
      lokasi: "Surabaya",
    },
    stockStatus: "hot",
  },
  {
    id: 3,
    name: "Oliver 272",
    brand: "Sakurai",
    price: 220000000,
    images: [img272_1, img272_2, img272_3, img272_4, img272_5, img272_6],
    video: [vid272_1, vid272_2, vid272_3, vid272_4],
    description:
      "Mesin offset besar dengan performa tinggi, siap produksi berat.",
    specifications: {
      ukuran: "720 x 520 mm",
      warna: "2 Warna",
      tahun: "1988",
      kondisi: "Siap Pakai",
      listrik: "~12,8 kW",
      speed: "4000-12000 lembar/jam",
      lokasi: "Surabaya",
    },
    stockStatus: "ready",
  },
  {
    id: 4,
    name: "SorM",
    brand: "Heidelberg",
    price: 150000000,
    images: [imgsorM_1, imgsorM_2, imgsorM_3, imgsorM_4, imgsorM_5, imgsorM_6],
    video: [vid272_1, vid272_2, vid272_3, vid272_4],
    description:
      "Mesin offset besar dengan performa tinggi, siap produksi berat.",
    specifications: {
      ukuran: "740 x 520 mm",
      warna: "1 Warna",
      tahun: "1988",
      kondisi: "Siap Pakai",
      listrik: "~12,8 kW",
      speed: "4000-12000 lembar/jam",
      lokasi: "Surabaya",
    },
    stockStatus: "ready",
  }
];
