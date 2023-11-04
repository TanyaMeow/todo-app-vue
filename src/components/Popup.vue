<script setup lang="ts">

import {usePopupStore} from "@/stores/PopupStore";

const popupStore = usePopupStore();

</script>

<template>
  <div v-show="popupStore.show" class="popup_container">
    <div class="line"></div>
    <div class="popup_block">
      <h1 class="popup_title">Вы уверены?</h1>
      <div class="popup_container_button">
        <button class="consent" @click="popupStore.onOK(); popupStore.show = false">ОК</button>
        <button class="cancel" @click="popupStore.show = false">ОТМЕНА</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.popup_container {
  border: 1px solid #aa3131;
  border-radius: 10px 10px 2px 2px;
  position: absolute;
  width: 400px;
  background-color: #fefff7;
  z-index: 1;
}

.consent {
  background-color: #aa3131;
}

.consent:hover {
  background-color: #c43737;
}

.cancel {
  background-color: #1a7967;
}

.cancel:hover {
  background-color: #1f8c76;
}

.popup_block {
  padding: 20px;
}

.line {
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 30px;
  background-color: #aa3131;
}

.popup_title {
  text-align: center;
  margin-bottom: 35px;
  margin-top: 0;
}

.popup_container_button {
  display: flex;
  justify-content: space-evenly;
}
</style>