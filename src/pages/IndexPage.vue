<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
  />

  <q-layout view="hHh lpR fFf" class="bgall">
    <q-header class="row navbar flex flex-center" id="navbar">
      <div class="col-1"></div>
      <div class="col-4 text-weight-bold text-h5">LOGO</div>

      <div class="col-1 q-mr-sm">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="Home"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-xl">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="Learn"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-xl">
        <q-btn
          rounded
          flat
          style="width: 129px"
          class="btn"
          label="Documentation"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-md q-ml-md">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="About"
          href="#"
        ></q-btn>
      </div>

      <!-- <div class="col-1 q-mr-xl q-ml-md">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="Contact"
          href="#"
        ></q-btn>
      </div> -->

      <div class="col-2"></div>
    </q-header>

    <section class="flex-section1">
      <q-card
        class="q-pa-md q-ml-xl borderhome"
        style="width: 90%; height: 62%"
        flat
      >
        <div class="title">Sistem Informasi Jaringan dan Aplikasi</div>
        <p class="capt">
          SIJA merupakan singkatan dari Sistem Informasi, Jaringan, dan
          Aplikasi. Dimana kompetensi keahlian ini khusus ditempuh selama 4
          tahun. Mempersiapkan tenaga kerja tingkat menengah yang terampil dalam
          bidang teknologi informasi Komputer Jaringan Dasar dan Sistem
          Komputer.
        </p>
        <div class="demovid q-gutter-xl">
          <q-btn class="btdemo" flat>Demo Video</q-btn>
          <q-btn class="btdemo" flat>Explore</q-btn>
        </div>
      </q-card>
      <div class="overlay-content q-mr-xl">
        <lottie style="width: 590px" :options="defaultOptions" />
      </div>
    </section>
    <div class="tombolkebawah">
      <q-btn class="btreadmore" flat rounded
        >read more
        <div class="tombolkebawah"><i class="bi bi-arrow-down-short"></i></div>
      </q-btn>
    </div>

    <section class="flex-section">Learn</section>
    <section class="flex-section">Documentation</section>
    <section class="flex-section">About</section>
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
.bgall {
  background: linear-gradient(
    321deg,
    #f1f1f2,
    #a2abe9,
    #f1f1f2,
    #f1f1f2,
    #f1f1f2
  );
  background-size: 400% 400%;

  animation: AnimationName 11s ease infinite;
}

@keyframes AnimationName {
  0% {
    background-position: 32% 0%;
  }
  50% {
    background-position: 69% 100%;
  }
  100% {
    background-position: 32% 0%;
  }
}

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
  height: 10px;
  transition: background-color 0.9s ease-in-out, color 0.9s ease-in-out,
    font-weight 0.3s ease-in-out;
}
.navbar {
  background: transparent;
  font-family: "Poppins", sans-serif;
  color: black;
  height: 38px;
}
.navbar-scrolled {
  background: #f1f1f2;
  transition: background-color 0.9s ease-out;
}

.flex-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  margin: 0;
}
.flex-section1 {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 95vh;
  /* background-color: #f1f1f2; Ganti dengan warna latar belakang yang Anda inginkan */
  margin-left: -10%;
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
.capt {
  font-family: Poppins;
  padding: 2%;
  margin-top: -2%;
}
.demovid {
  padding: 2%;
}
.btreadmore {
  background: transparent;
  height: 50px;
}
.btdemo {
  background: #e8e8eb;
  border: solid 1px;
  border-color: #000000;
  border-radius: 30px;
  font-family: Poppins;
  width: 30%;
}

.btdemo:hover {
  background: #000000;
  color: #e8e8eb;
}

.overlay-content {
  position: relative;
  z-index: 2; /* Atur z-index overlay lebih tinggi daripada q-card */
  margin-left: -10%; /* Sesuaikan nilai negatif untuk menimpa bagian kiri */
  margin-top: 10%;
  margin-bottom: 10%;
}
.tombolkebawah {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2%;
  width: 100%;
}
.iconread {
  margin-top: -1%;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgb(112, 129, 245) #f1f1f2;
  scroll-behavior: smooth;
}
</style>
