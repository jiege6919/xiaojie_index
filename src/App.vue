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
  <canvas id="universe" style="position: fixed; margin: 0; width: 100%; height: 100%; z-index: -1;"></canvas>
  <!-- 昼夜切换 -->
  <SwitchIcon />

  <div class="main">
    <Header_ok></Header_ok>
    <Content_ok></Content_ok>
    <Footer_ok></Footer_ok>
  </div>
  <Popups_ok></Popups_ok>
</template>

<script setup>
import Header_ok from './components/main/Header_ok.vue';
import Content_ok from './components/main/Content_ok.vue';
import Footer_ok from './components/main/Footer_ok.vue';
import Popups_ok from './components/main/Pop-ups_ok.vue';
import { SwitchIcon } from "vue-dark-switch";
import { dark } from './assets/dark.js';
import { onMounted } from 'vue';
onMounted(() => {
  dark();
});
</script>




<style scoped>
.sun-dark {
  display: block;
  width: 2em;
  height: auto;
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
}



/* 昼夜更替 */

.n-icon {
  position: fixed;
  top: 10px;
  right: 20px;
}

</style>
