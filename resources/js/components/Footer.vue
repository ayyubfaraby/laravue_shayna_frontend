<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Logo Section -->
        <div class="footer-brand">
          <img :src="logoFooter" class="footer-logo" />
          <p>Address: Setra Duta, Bandung</p>
          <p>Phone: +628 22081996</p>
          <p>Email: hello.shayna@gmail.com</p>
          <div class="social-icons">
            <a href="https://www.facebook.com/ayyub.f.p/"><font-awesome-icon :icon="['fab', 'facebook']" class="icon facebook" /></a>
            <a href="https://www.instagram.com/_faraby/"><font-awesome-icon :icon="['fab', 'instagram']" class="icon instagram" /><i class="fab fa-instagram"></i></a>
            <a href="https://id.pinterest.com/kudetaproject/"><font-awesome-icon :icon="['fab', 'pinterest']" class="icon pinterest" /><i class="fab fa-pinterest"></i></a>
            <a href="https://wa.me/6282247969652"><font-awesome-icon :icon="['fab', 'whatsapp']" class="icon whatsapp" /><i class="fab fa-pinterest"></i></a>
            <a href="https://x.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><font-awesome-icon :icon="['fab', 'twitter']" class="twitter" /><i class="fab twitter"></i></a>
          </div>
        </div>
  
        <!-- Links Section -->
        <div class="footer-links">
          <div class="footer-information">
            <h4>Information</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          <div class="baris-3">
            <h4>My Account</h4>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
    data() {
    return {
      // Tentukan jalur gambar menggunakan data
      logoFooter: '/img/blog/logo_website_shayna_white.png',
    };
  },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #191919;
    color: #8b8b8b;
    padding: 80px;
    font-family: Arial, sans-serif;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .footer-brand {
    max-width: 300px;
    flex: 1 1 300px; /* Responsif: mengizinkan kolom mengecil */
  }
  
  .footer-logo {
    width: 148px;
    margin-bottom: 10px;
  }
  
  .footer-links {
    display: flex;
    gap: 130px;
    flex: 2 1 400px; /* Responsif: kolom ini akan lebih lebar di layar besar */
  }
  
  .footer-links h4 {
    color: #ffffff;
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  .footer-brand img {
    margin-bottom: 30px;
  }
  
  .footer-information {
    margin-left: 250px;
  }
  
  .footer-links ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-links ul li {
    margin-bottom: 5px;
  }
  
  .footer-links ul li a {
    color: #8b8b8b;
    text-decoration: none;
  }
  
  .footer-links ul li a:hover {
    text-decoration: underline;
  }
  
  .social-icons {
    display: flex;
    gap: 15px;
    margin-top: 10px;
  }
  
  .social-icons a {
    color: #fff;
    font-size: 18px;
    text-decoration: none;
  }
  
  .baris-3 {
    margin-right: 140px;
  }
  
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-links {
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;
      text-align: center; /* Untuk membuat semua item daftar rata tengah */
    }
  
    .footer-brand {
      text-align: center;
      margin-bottom: 20px; /* Mengurangi margin bawah */
    }
  
    .footer-logo {
      width: 120px;
    }
  
    .footer-links h4 {
      font-size: 16px;
      margin-bottom: 10px; /* Mengurangi margin bawah untuk h4 */
    }
  
    .footer-links ul li {
      margin-bottom: 5px; /* Mengurangi margin antara item daftar */
    }
  
    .social-icons {
      justify-content: center;
      gap: 20px;
    }
  
    /* Mengurangi jarak antar elemen .baris-3 pada layar kecil */
    .baris-3 {
      margin-right: 0;
      margin-top: 10px;
    }
  }
  
  @media (max-width: 480px) {
    .footer {
      padding: 40px 20px;
    }
  
    .footer-logo {
      width: 100px;
    }
  
    .footer-links {
      gap: 10px;
    }
  
    .footer-links ul li {
      margin-bottom: 5px; /* Mengurangi margin lebih lanjut */
    }
  
    .footer-brand {
      margin-bottom: 15px; /* Mengurangi margin bawah lebih lanjut pada layar ponsel */
    }
  
    .footer-links h4 {
      margin-bottom: 8px; /* Mengurangi margin bawah pada h4 */
    }
  
    /* Mengurangi jarak di bawah kata "Shop" pada .baris-3 */
    .baris-3 {
      margin-top: 0;
    }
  }
  </style>
  