<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />

  <q-layout view="hHh lpR fFf" class="scroll">
    <q-header class="row navbar flex flex-center" id="navbar">
      <div class="col-1"></div>
      <div class="col-4 text-weight-bold text-h5">LOGO</div>

      <div class="col-1 q-mr-md">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="Home"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-md">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="Learn"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-md">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="About"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-xl">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="Contact"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-sm">
        <q-btn
          rounded
          flat
          style="width: 123px"
          class="btn"
          label="Documentation"
          href="#"
        ></q-btn>
      </div>
      <div class="col-2"></div>
    </q-header>

    <section class="flex-section1">
      <q-card
        class="q-pa-md q-ml-xl borderhome"
        style="width: 90%; height: 62%"
        flat
      >
        <div class="title">Sistem Informasi Jaringan dan Aplikasi</div>
      </q-card>
      <div class="overlay-content q-mr-xl">
        <lottie style="width: 590px" :options="defaultOptions" />
      </div>
    </section>
    <div class="tombolkebawah">abcv</div>
    <div class="tombolkebawah">abcv</div>

    <section class="flex-section"></section>
    <section class="flex-section">Section 3</section>
  </q-layout>
</template>

<script>
import Lottie from "./../components/lottie.vue";
import * as animationData from "assets/coding.json";
export default {
  name: "IndexPage",
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
    };
  },
};

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY >= 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
</script>

<style>
.q-card {
  position: relative;
  z-index: 1;
}
.btn {
  border-radius: 20px;
}
.btn:hover {
  background-color: #7081f5;
  font-weight: 600;
  transition: background-color 0.9s ease-in-out, color 0.9s ease-in-out,
    font-weight 0.3s ease-in-out;
}
.navbar {
  background: transparent;
  font-family: "Poppins", sans-serif;
  color: black;
  height: 50px;
}
.navbar-scrolled {
  background: #e8e8eb;
  transition: background-color 0.9s ease-out;
}

.flex-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f1f1f2; /* Ganti dengan warna latar belakang yang Anda inginkan */
  text-align: center;
  margin: 0;
}
.flex-section1 {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 95vh;
  background-color: #f1f1f2; /* Ganti dengan warna latar belakang yang Anda inginkan */
  margin-left: -10%;
}

.flex-section:nth-child(2) {
  background-color: #f1f1f2;
}

.flex-section:nth-child(3) {
  background-color: #f1f1f2;
}

.borderhome {
  position: relative;
  background: #7081f5;
  border-radius: 60px;
  margin-left: 15%;
}
.title {
  font-family: Poppins;
  font-size: 35px;
  padding: 2%;
  font-weight: 900;
}
.overlay-content {
  position: relative;
  z-index: 2; /* Atur z-index overlay lebih tinggi daripada q-card */
  margin-left: -10%; /* Sesuaikan nilai negatif untuk menimpa bagian kiri */
  margin-top: 10%;
  margin-bottom: 10%;
}
.tombolkebawah {
  background: #f1f1f2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgb(112, 129, 245) #f1f1f2;
  scroll-behavior: smooth;
}
</style>
