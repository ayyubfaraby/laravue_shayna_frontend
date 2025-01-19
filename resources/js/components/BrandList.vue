<template>
    <div class="gallery">
      <!-- Baris Foto -->
      <div class="photo-row">
        <div v-for="(photo, index) in photos" :key="index" class="photo-item">
          <!-- Overlay Header -->
          <div class="photo-header">
            <a 
              :href="`https://instagram.com/${photo.username}`" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="instagram-link"
            >
              <img :src="instagramLogo" alt="Instagram Icon" class="instagram-icon" />
              <span class="instagram-name">@{{ photo.username }}</span>
            </a>
          </div>
          <!-- Foto -->
          <img :src="photo.image" :alt="`Photo ${index + 1}`" class="photo" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Brandlist",
    data() {
      return {
        instagramLogo : '/img/instagram-white.png',
        // Data untuk foto
        photos: [
          { image: "img/insta-1.jpg", username: "kudetaproject.id" },
          { image: "img/insta-2.jpg", username: "kudetaproject.id" },
          { image: "img/insta-3.jpg", username: "kudetaproject.id" },
          { image: "img/insta-4.jpg", username: "kudetaproject.id" },
          { image: "img/insta-5.jpg", username: "kudetaproject.id" },
          { image: "img/insta-6.jpg", username: "kudetaproject.id" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Galeri Utama */
  .gallery {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 100%; /* Pastikan galeri menggunakan lebar penuh */
  }
  
  /* Baris Foto */
  .photo-row {
    display: flex;
    flex-wrap: nowrap; /* Mencegah elemen turun ke baris berikutnya */
    justify-content: space-between; /* Memberikan jarak antar foto */
    width: 100%; /* Lebar penuh layar */
  }
  
  .photo-item {
    flex: 1; /* Setiap foto memiliki lebar sama */
    position: relative; /* Agar elemen overlay bisa diatur dengan absolute */
    overflow: hidden; /* Sembunyikan elemen yang keluar dari batas */
  }
  
  /* Overlay Header */
  .photo-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex; /* Menggunakan flexbox untuk memposisikan konten */
    justify-content: center; /* Pusatkan secara horizontal */
    align-items: center; /* Pusatkan secara vertikal */
    opacity: 0; /* Sembunyikan overlay secara default */
    transition: opacity 0.3s ease; /* Animasi muncul */
    background-color: rgba(0, 0, 0, 0.5); /* Tambahkan efek gelap pada latar belakang */
  }
  
  .photo-item:hover .photo-header {
    opacity: 1; /* Tampilkan overlay saat hover */
  }
  
  .instagram-link {
    text-decoration: none; /* Hilangkan garis bawah pada tautan */
    color: inherit; /* Warna mengikuti elemen teks */
    display: flex;
    flex-direction: column; /* Susun ikon dan nama secara vertikal */
    align-items: center; /* Pusatkan konten secara horizontal */
  }
  
  .instagram-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 8px; /* Jarak antara ikon dan nama */
  }
  
  .instagram-name {
    font-size: 14px;
    color: #ffffff; /* Warna teks putih */
    font-weight: bold;
  }
  
  /* Foto */
  .photo {
    width: 100%; /* Foto memenuhi elemen parent */
    height: auto; /* Menjaga rasio aspek */
    object-fit: cover; /* Memastikan foto terpotong dengan rapi */
    transition: transform 0.3s ease; /* Tambahkan animasi transform */
  }
  
  /* Responsivitas */
  @media (max-width: 768px) {
    .photo {
      height: 180px; /* Atur tinggi foto untuk layar kecil */
    }
  }
  
  @media (max-width: 480px) {
    .photo {
      height: 100px; /* Sesuaikan tinggi foto untuk layar lebih kecil */
    }
  }
  </style>
  