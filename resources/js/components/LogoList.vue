<template>
    <footer class="footer">
      <div class="logo-container">
        <div v-for="(logo, index) in logos" :key="index" class="logo-item">
          <img :src="logo.src" :alt="logo.name" class="logo" />
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "LogoList",
    data() {
      return {
        logos: [
          { name: "Logo 1", src: "img/logo-carousel/logo-1.png" },
          { name: "Logo 2", src: "img/logo-carousel/logo-2.png" },
          { name: "Logo 3", src: "img/logo-carousel/logo-3.png" },
          { name: "Logo 4", src: "img/logo-carousel/logo-4.png" },
          { name: "Logo 5", src: "img/logo-carousel/logo-5.png" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Footer Styles */
  .footer {
    background-color: #303030; /* Warna latar belakang footer */
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  /* Kontainer logo */
  .logo-container {
    display: flex;
    flex-wrap: wrap; /* Logo dapat turun ke baris baru jika layar kecil */
    justify-content: center;
    gap: 80px; /* Jarak antar logo */
    width: 90%; /* Lebar kontainer, menyesuaikan layar */
    max-width: 1200px; /* Batas maksimal lebar kontainer */
  }
  
  /* Elemen logo */
  .logo-item {
    flex: 1 1 calc(25% - 20px); /* Setiap logo memiliki lebar fleksibel */
    max-width: 150px; /* Batas maksimal lebar logo */
    text-align: center;
  }
  
  .logo {
    max-width: 100%; /* Logo menyesuaikan elemen parent */
    height: auto; /* Menjaga rasio aspek */
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  .logo:hover {
    transform: scale(1.1); /* Animasi hover memperbesar logo */
    opacity: 0.8; /* Efek hover pada logo */
  }
  
  /* Responsivitas untuk layar kecil */
  @media (max-width: 768px) {
    .logo-item {
      flex: 1 1 calc(33.33% - 10px); /* Tiga logo per baris */
      max-width: 120px;
    }
    .logo-container {
      gap: 10px; /* Kurangi jarak antar logo */
    }
  }
  
  /* Responsivitas untuk layar sangat kecil */
  @media (max-width: 480px) {
    .logo-item {
      flex: 1 1 calc(50% - 10px); /* Dua logo per baris */
      max-width: 100px;
    }
  }
  </style>