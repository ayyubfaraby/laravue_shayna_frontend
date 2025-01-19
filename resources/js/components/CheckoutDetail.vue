<template>
    <div class="whole-page">
      <div class="checkout-table-container">
        <div class="tables-container">
          <!-- Tabel Produk -->
          <div class="table-wrapper">
          <table class="checkout-table">
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT NAME</th>
                <th>PRICE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in products" :key="index">
                <td>
                  <img :src="product.image" :alt="product.name" class="product-image" />
                </td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>
                  <button @click="removeProduct(index)" class="delete-button">
                    <img :src="LogoClose" alt="" class="delete-icon" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
  
          <!-- Tabel Informasi Transaksi -->
          <div class="transaction-container">
            <table class="transaction-table">
              <tbody>
                <tr>
                  <td>ID Transaction</td>
                  <td>#SH12000</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>$240.00</td>
                </tr>
                <tr>
                  <td>Pajak</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Total Biaya</td>
                  <td>$440.00</td>
                </tr>
                <tr>
                  <td>Bank Transfer</td>
                  <td>Mandiri</td>
                </tr>
                <tr>
                  <td>No. Rekening</td>
                  <td>2208 1996 1403</td>
                </tr>
                <tr>
                  <td>Nama Penerima</td>
                  <td>Shayna</td>
                </tr>
              </tbody>
            </table>
            <div class="button-container">
              <button class="confirm-button">
                <router-link to="/success" class="nav-link">I ALREADY PAID</router-link>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Informasi Pembeli -->
        <div class="buyer-info-container">
          <h4 class="text-form">Informasi Pembeli:</h4>
          <form @submit.prevent="submitForm" class="buyer-info-form">
            <div class="form-group">
              <label for="name">Nama Lengkap</label>
              <input type="text" id="name" v-model="buyerInfo.name" placeholder="Masukkan Nama" required />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="buyerInfo.email" placeholder="Masukkan Email" required />
            </div>
            <div class="form-group">
              <label for="phone">No. HP</label>
              <input type="text" id="phone" v-model="buyerInfo.phone" placeholder="Masukkan No. HP" required />
            </div>
            <div class="form-group">
              <label for="address">Alamat Lengkap</label>
              <textarea id="address" v-model="buyerInfo.address" placeholder="Masukkan Alamat Lengkap" required></textarea>
            </div>
          </form>
        </div>
  
        <!-- Tombol Konfirmasi -->
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CheckoutDetail",
    data() {
      return {
        LogoClose: '/img/close.png',
        products: [
          { image: "/img/mickey1.jpg", name: "Mickey Baggy", price: "$20.00" },
          { image: "/img/mickey2.jpg", name: "Mickey Classic", price: "$30.00" },
          { image: "/img/mickey3.jpg", name: "Mickey Modern", price: "$40.00" }
        ],
        buyerInfo: {
          name: "",
          email: "",
          phone: "",
          address: ""
        }
      };
    },
    methods: {
      removeProduct(index) {
        this.products.splice(index, 1);
      },
      submitForm() {
        console.log("Informasi Pembeli:", this.buyerInfo);
        alert("Form berhasil disubmit!");
      }
    }
  };
  </script>
  
  <style scoped>
  .whole-page {
    padding: 0 80px;
    margin-top: 30px;
  }
  
  /* Kontainer fleksibel untuk kedua tabel */
  .tables-container {
    display: flex;
    gap: 20px;
  }
  
  .table-wrapper {
    flex: 2;
  }
  
  .transaction-container {
    flex: 1;
  }
  
  .checkout-table,
  .transaction-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .checkout-table th {
    padding: 10px;
    text-align: center; /* Pusatkan teks secara horizontal */
    vertical-align: middle; /* Pusatkan teks secara vertikal */
    border-bottom: 1px solid #ddd; /* Garis bawah untuk judul */
    background-color: #f8f8f8; /* Opsional: Tambahkan warna latar untuk judul */
    font-weight: bold; /* Penekanan teks */
  }
  
  
  .checkout-table td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  
  .transaction-table td {
    border: none;
    padding: 10px;
    text-align: center;
  }
  
  .product-image {
    width: 140px;
    height: 140px;
    object-fit: cover;
    display: block;
  }
  
  .delete-button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .delete-icon {
    width: 20px;
    height: 20px;
  }
  
  .button-container {
    text-align: right;
  }
  
  .confirm-button {
    background-color: #e7ab3b;
    color: white;
    border: none;
    padding: 10px 130px;
    cursor: pointer;
    font-size: 14px;
  }
  
  table {
    border-collapse: collapse; /* Gabungkan border agar rapi */
    width: 100%;
    border: 1px solid #ddd; /* Garis luar tabel */
  }
  
  tr, td {
    border: none; /* Hilangkan garis pada baris dan sel */
  }
  
  td {
    padding: 10px;
    text-align: center; /* Rata tengah teks */
  }
  
  .buyer-info-form {
    margin-right: 660px;
    margin-top: 20px;
    margin-bottom: 4%;
    display: flex;
    flex-direction: column;
    gap: 15px; /* Jarak antar field */
  }
  
  .text-form {
    margin-top: 30px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  .form-group label {
    margin-bottom: 5px; /* Jarak antara label dan input */
    font-weight: bold;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .checkout-table td:first-child {
    padding-left: 20px;  /* Hilangkan padding di sisi kiri */
  }
  
  .checkout-table th:first-child {
    width: 140px; /* Sesuaikan dengan lebar gambar */
  }
  
  .just-title-checkout {
    text-align: center;
  }
  
  .checkout-table td:nth-child(3) {
    color: #e7ab3b; /* Warna teks untuk kolom PRICE */
    font-weight: bold; /* Opsional: Penekanan teks */
  }
  </style>