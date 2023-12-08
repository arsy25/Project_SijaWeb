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
    <q-header class="row navbar flex flex-center q-mt-sm" id="navbar">
      <div class="col-1"></div>
      <div class="col-4 text-weight-bold text-h5">LOGO</div>

      <div class="col-1 q-mr-sm">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          id="buttonmenu"
          label="Home"
          @click="scrollToSection('section1')"
          :class="{ active: activeSection === 'section1' }"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-xl">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="Learn"
          @click="scrollToSection('section2')"
          :class="{ active: activeSection === 'section2' }"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-xl">
        <q-btn
          rounded
          flat
          style="width: 129px"
          class="btn"
          label="Documentation"
          @click="scrollToSection('section3')"
          :class="{ active: activeSection === 'section3' }"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-md q-ml-md">
        <q-btn
          rounded
          flat
          style="width: 100px"
          class="btn"
          label="About"
          @click="scrollToSection('section4')"
          :class="{ active: activeSection === 'section4' }"
        ></q-btn>
      </div>

      <div class="col-2"></div>
    </q-header>

    <section class="flex-section1" id="section1">
      <q-card
        class="q-pa-md q-ml-xl borderhome"
        style="width: 60%; height: 62%"
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
          <q-btn icon="play_arrow" class="btdemo" flat>watch demo</q-btn>
        </div>
      </q-card>
      <div class="overlay-content q-mr-xl">
        <lottie style="width: 750px" :options="defaultOptions" />
      </div>
    </section>
    <div class="tombolkebawah">
      <q-btn class="btreadmore" flat rounded @click="scrollToNextSection"
        >read more
        <div class="tombolkebawah">
          <q-icon name="keyboard_arrow_down" style="color: #7081f5" />
        </div>
      </q-btn>
    </div>

    <section class="flex-section2" id="section2">
      <div class="title2">Apa saja yang kita pelajari?</div>
    </section>
    <section class="flex-section" id="section3">Documentation</section>
    <section class="flex-section" id="section4">About</section>
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
      activeSection: null,
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 2,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    scrollToSection(targetId) {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
        this.updateActiveButton(targetId);
      }
    },
    updateActiveButton(targetId) {
      if (this.activeSection) {
        // Hapus kelas 'active-button' dari tombol yang sebelumnya aktif
        const previousActiveButton = document.getElementById(
          this.activeSection
        );
        previousActiveButton.classList.remove("active");
      }

      // Tambahkan kelas 'active-button' ke tombol yang baru aktif
      const newActiveButton = document.getElementById(targetId);
      newActiveButton.classList.add("active");

      this.activeSection = targetId;
    },
    handleScroll() {
      const scrollY = window.scrollY;
      const sectionOffsets = {
        section1: document.getElementById("section1").offsetTop,
        section2: document.getElementById("section2").offsetTop,
        section3: document.getElementById("section3").offsetTop,
        section4: document.getElementById("section4").offsetTop,
      };

      // Temukan section yang sedang terlihat
      let activeSection = null;

      for (const section in sectionOffsets) {
        if (
          scrollY >= sectionOffsets[section] &&
          scrollY < sectionOffsets[section] + 200
        ) {
          activeSection = section;
          break;
        }
      }

      this.activeSection = activeSection;
    },

    mounted() {
      window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY >= 50) {
          navbar.classList.add("navbar-scrolled");
        } else {
          navbar.classList.remove("navbar-scrolled");
        }
      });
    },

    scrollToNextSection() {
      const nextSection = document.getElementById("section2"); // Ganti dengan ID dari section selanjutnya
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
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
.flex-section2 {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.flex-section1 {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 95vh;
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
  font-size: 4rem;
  padding: 2%;
  font-weight: 900;
}
.title2 {
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  margin-top: -40%;
}

.capt {
  font-family: Poppins;
  padding: 2%;
  font-size: 120%;
  margin-top: -4%;
  margin-bottom: -1px;
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
  width: 40%;
}

.btdemo:hover {
  background: #000000;
  color: #e8e8eb;
}

.overlay-content {
  position: relative;
  z-index: 2; /* Atur z-index overlay lebih tinggi daripada q-card */
  margin-left: -9%; /* Sesuaikan nilai negatif untuk menimpa bagian kiri */
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

/* Add styling for active links */
.navbar .btn.active {
  background-color: #7081f5;
  color: #000000;
}
</style>
