<template>
  <q-layout view="hHh lpR fFf" class="scroll">
    <q-header class="row navbar flex flex-center">
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

    <section class="flex-section">
      <q-card
        class="q-pa-md q-ml-xl borderhome"
        style="width: 45%; height: 30%; margin-left: 15%"
        flat
        >abc
      </q-card>
      <div>a</div>
    </section>

    <section class="flex-section"></section>
    <section class="flex-section">Section 3</section>
  </q-layout>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  height: 50px;
}

.flex-section {
  display: flex;
  align-items: center;
  justify-content: left;
  height: 100vh;
  background-color: #f1f1f2; /* Ganti dengan warna latar belakang yang Anda inginkan */
  text-align: left;
  margin: 0;
}

.flex-section:nth-child(2) {
  background-color: #f1f1f2;
}

.flex-section:nth-child(3) {
  background-color: #f1f1f2;
}

.borderhome {
  background: #7081f5;
  border-radius: 30px;
}

* {
  scrollbar-width: thin;
  scrollbar-color: rgb(112, 129, 245) #f1f1f2;
  scroll-behavior: smooth;
}
</style>
