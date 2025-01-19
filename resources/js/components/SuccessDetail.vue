<template lang="">
    <div class="whole-page">
        <div class="container">
            <img :src="logoSuccess" class="atur-gambar">
            <h3 class="title-text">Sukses Terbayar!</h3>
            <p class="first-text">Silakan tunggu update terbaru dari kami via email</p>
            <p class="second-text">yang sudah Anda daftarkan sebelumnya.</p>
            <div class="button-container">
            <button class="confirm-button">
              <router-link to="/" class="nav-link">BACK TO HOME</router-link>
            </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SuccessDetail",
  data() {
  return {
    // Tentukan jalur gambar menggunakan data
    logoSuccess: '/img/success-buy.png',
  };
},
};
</script>

<style scoped>
.whole-page {
  padding: 0 80px;
  margin-top: 30px;
}

.container {
    text-align: center;
    margin-top: 120px;
    margin-bottom: 120px;
}

.title-text {
    margin-top: 20px;
}

.first-text {
    margin-top: 20px;
}

.second-text {
    margin-top: -14px;
}

.confirm-button {
  background-color: #e7ab3b;
  color: white;
  border: none;
  padding: 10px 35px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 20px;
}

.atur-gambar {
    width: 330px;
    height: 280px;
    margin-left: 338px;
}
</style>