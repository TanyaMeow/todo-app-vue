<script setup lang="ts">
import ContainerTasks from "@/components/ContainerTasks.vue";
import {NotesStore} from "@/stores/Notes";
import {ref} from "vue";

const Notes = NotesStore();
const modelValue = ref('');

defineProps(['modelValue']);
defineEmits(['update:setTitle']);

</script>

<template>
  <div class="note_title">
    <p>Title note: </p><input class="title_note" type="text" v-model="modelValue" @input="$emit('setTitle', modelValue)">
  </div>
  <router-view />
  <ContainerTasks />
</template>

<style scoped>
  .title_note {
    font-family: 'Nunito Regular', sans-serif;
    font-size: 28px;
    border: 1px solid #55a38d;
    border-radius: 5px;
    padding: 0 5px;
    text-align: center;
  }

  .note_title {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #DCF5E6;
    margin-top: 20px;
  }
</style>