<script setup>
import Header_ok from './components/main/Header_ok.vue';
import Content_ok from './components/main/Content_ok.vue';
import Footer_ok from './components/main/Footer_ok.vue';
import Popups_ok from './components/main/Pop-ups_ok.vue';
</script>

<template>
  <div id="PageLoading">
    <div id="PageLoading-zyyo">
      <div id="PageLoading-zyyo-center">
        <div class="object" id="object_four"></div>
        <div class="object" id="object_three"></div>
        <div class="object" id="object_two"></div>
        <div class="object" id="object_one"></div>
      </div>
    </div>
  </div>
  <div class="main">
    <Header_ok></Header_ok>
    <Content_ok></Content_ok>
    <Footer_ok></Footer_ok>
  </div>
  <Popups_ok></Popups_ok>
</template>

<style scoped></style>
