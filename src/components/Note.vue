<script setup lang="ts">
import ContainerTasks from "@/components/ContainerTasks.vue";
import {inject} from "vue";

const modelValue = inject('title');
const setTitle = inject('setTitle');

</script>

<template>
  <div class="note_title">
    <p class="title_change">Title note: </p><input class="title_note" type="text" v-model="modelValue" @input="setTitle(modelValue)">
  </div>
  <router-view />
  <ContainerTasks />
</template>

<style scoped>
.title_change {
  font-size: 18px;
  margin: 0 10px 0 0;
  font-family: 'Nunito Regular', sans-serif;
  color: #1d1d51;
}
  .title_note {
    background: transparent;
    border: transparent;
    font-family: 'Nunito Regular', sans-serif;
    width: 200px;
    height: 40px;
    font-size: 26px;
    padding: 0 5px;
    text-align: center;
  }

  .title_note:focus {
    outline: none;
    border-bottom: 1px solid #1c754e;
  }

  .note_title {
    height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #DCF5E6;
    margin-top: 20px;
  }
</style>