<template>
    <div class="container">
      <div class="content-wrapper">
        <!-- Foto di sebelah kiri -->
        <div class="pic-main">
          <img :src="`/img/${selectedImage}`" alt="Main Image" class="pic-size" />
        </div>
  
        <!-- Title dan Deskripsi di sebelah kanan -->
        <div class="text-content">
            <div class="category">
                <p>B A G</p>
            </div>
            <div class="name">
                <p>MICKEY BAGGY</p>
            </div>
            <div class="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur. Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores. Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?</p>
            </div>
            <div class="price">
              <p>$64.00</p>
            </div>
            <div class="add-to-cart">
              <button>
                <router-link to="/checkout" class="nav-link">ADD TO CART</router-link>
              </button>
            </div>
        </div>
      </div>
    </div>
  
  <!-- CAROUSEL SUB-MAIN -->
      <div class="owl-carousel owl-theme">
        <div class="item" v-for="(item, index) in images" :key="index">
          <div class="button-on-card">
            <img :src="`/img/${item.image}`" :alt="item.title" @click="changeMainImage(item.image)" />
          </div>
        </div>
      </div>
  <!-- PENUTUP -->
  </template>
  
  
  
  <script>
  import { onMounted } from "vue";
  
  export default {
    name: "ProductDetail",
    data() {
      return {
        selectedImage: "mickey1.jpg",  // Gambar default yang ditampilkan di atas
        images: [
          { image: "mickey1.jpg" },
          { image: "mickey2.jpg" },
          { image: "mickey3.jpg" },
          { image: "mickey4.jpg" },
        ],
      };
    },
    methods: {
      changeMainImage(image) {
        this.selectedImage = image;  // Memperbarui gambar utama sesuai dengan klik
      },
    },
    setup() {
      onMounted(() => {
        const $ = window.$;
        $(".owl-carousel").owlCarousel({
          loop: true,
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
    .container {
      padding: 0 30px;
      margin-top: 30px;
      margin-bottom: 0px;
    }
  
    .owl-carousel {
      padding-top: 0px;
      padding-right: 700px;
      padding-left: 12px;
      padding-bottom: 5px;
      margin-top: 40px;
      margin-bottom: 60px;
      margin-left: 80px;
      margin-right: 20px;
    }
  
    .owl-carousel .item img {
    width: 230px; /* Sesuaikan ukuran lebar gambar */
    height: 230px; /* Tinggi akan mengikuti proporsi gambar */
  }
  
  .content-wrapper {
      display: flex;
      align-items: center; /* Vertikal tengah */
      gap: 20px; /* Jarak antar elemen */
      margin-bottom: 60px;
    }
    
    /* Foto */
    .pic-main {
      flex-shrink: 0; /* Jangan izinkan foto mengecil */
    }
    
    .pic-size {
      width: 550px; /* Lebar gambar */
      height: 670px; /* Tinggi gambar */
      object-fit: cover; /* Sesuaikan konten gambar */
    }
    
    /* Konten teks */
    .text-content {
      display: block;
      margin-left: 30px;
    }
    
    .name {
      font-size: 46px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    
    .description {
      font-size: medium;
      margin: 10px 5px 30px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      color: #8b8b8b;
    }
  
    .category {
      font-size: medium;
      color: #a9a9a9;
      font-family: Arial, Helvetica, sans-serif;
    }
  
    .price {
      font-size: 37px;
      color: #e7ab3b;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
  
    .add-to-cart button{
      background-color: #e7ab3b;
      color: #ffffff;
      border: none;
      padding: 12px 40px;
      cursor: pointer;
    }
  
  </style>
    