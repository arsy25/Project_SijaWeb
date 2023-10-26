<template>
  <q-layout>
    <q-header class="row navbar flex flex-center">
      <div class="col-1"></div>
      <div class="col-3 text-weight-bold text-h5">LOGO</div>

      <div class="col-1 q-mr-md">
        <q-btn
          rounded
          flat
          style="width: 200px"
          class="btn"
          label="Home"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-md">
        <q-btn
          rounded
          flat
          style="width: 200px"
          class="btn"
          label="Learn"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-md">
        <q-btn
          rounded
          flat
          style="width: 200px"
          class="btn"
          label="About"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-mr-xl">
        <q-btn
          rounded
          flat
          style="width: 200px"
          class="btn"
          label="Contact"
          href="#"
        ></q-btn>
      </div>

      <div class="col-1 q-ml-md">
        <q-btn
          rounded
          flat
          style="width: 200px"
          class="btn"
          label="Documentation"
          href="#"
        ></q-btn>
      </div>
      <div class="col-2"></div>
    </q-header>
  </q-layout>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
.btn {
  border-radius: 20px 5px;
}
.navbar {
  background: transparent;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: black;
  height: 50px;
  position: fixed;
}
</style>
