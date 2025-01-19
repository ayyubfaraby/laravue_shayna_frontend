<template>
    <div>
      <div class="owl-carousel owl-theme">
        <div class="item" v-for="(item, index) in images" :key="index">
          <div class="button-on-card">
            <img :src="`/img/${item.image}`" :alt="item.title" />
            <div class="quick-view-text">
              <router-link to="/detail" class="btn">Quick View</router-link>
            </div>
          </div>
          <button class="quick-view-btn">Quick View</button>
              <div class="card-title">
                <p>{{ item.title }}</p>
              </div>
              <div class="card-name">
                <p>{{ item.name }}</p>
              </div>
              <div class="card-price">
                <p>${{ item.price }}.00</p>
              </div>
            </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted } from "vue";
  
  export default {
    name: "CardSlider",
    data() {
      return {
        images: [
          { image: "mickey1.jpg", title: "T O P S", name: "Guangzhou Sweater", price: 34 },
          { image: "mickey1.jpg", title: "B A G", name: "Ethereal Wraps", price: 82 },
          { image: "mickey1.jpg", title: "O U T E R", name: "Aristo Coats", price: 72 },
          { image: "mickey1.jpg", title: "A C C E S S O R I E S", name: "Velvet Whispers", price: 43 },
        ],
      };
    },
    setup() {
      onMounted(() => {
        const $ = window.$;
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          },
          nav: false,  // Menyembunyikan kontrol prev/next
          dots: false, // Menyembunyikan dots navigasi
        });
      });
    },
  };
  </script>
  
  <style scoped>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    .owl-carousel {
      padding: 0 50px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  
    .owl-carousel .item {
      margin: 0 10px;
      text-align: center;
      padding: 10px;
      position: relative;
    }
  
    .item img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  
    .card-title {
      font-size: smaller;
      color: #8b8b8b;
      margin-top: 18px;
      font-family: Arial, Helvetica, sans-serif;
      margin-bottom: 16px;
    }
  
    .card-name {
      font-size: large;
    }
  
    .card-price {
    font-size: x-large;
    color: #e7ab3b;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
  
    .quick-view-btn {
      position: absolute;
      bottom: -50px; /* Awalnya disembunyikan di bawah */
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      transition: bottom 0.3s ease, opacity 0.3s ease;
      opacity: 0; /* Transparan saat awal */
    }
  
  .quick-view-text {
    position: absolute;
    bottom: 0; /* Awalnya tersembunyi di bawah gambar */
    left: 50%;
    transform: translate(-50%, 100%);
    width: auto;
    background-color: #ffffff;
    padding: 10px 20px;
    color: #000000;
    text-align: center;
    font-size: 14px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-decoration: none;
    opacity: 0;
    transition: all 0.3s ease-in-out; /* Animasi transisi */
  }
  
  
  .image-container:hover .quick-view-btn {
    bottom: 0; /* Pindahkan ke dalam gambar */
    opacity: 1; /* Tampilkan tombol */
  }
  
  .button-on-card {
    position: relative;
    width: 100%; /* Pastikan card mengikuti lebar yang ditentukan */
    overflow: hidden;
  }
  
  .button-on-card img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  
  .button-on-card:hover .quick-view-text {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  
  </style>  