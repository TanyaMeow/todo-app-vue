<script setup lang="ts">

import {NotesStore} from "@/stores/Notes";
import {ref} from "vue";
import {storeToRefs} from "pinia";

const Note = NotesStore().addTask;
const tasks = ref(NotesStore().notes[0].tasks);

</script>

<template>
  <div class="todo_block">
    <div class="todo" v-for="task of tasks">
      <div class="check"><input type="checkbox"/>{{task.title}}</div>
      <div class="functional_task">
        <img src="public/icons/edit_task.svg" title="изменить задачу" alt="">
        <img src="public/icons/delete_forever.svg" title="удалить задачу" alt="">
      </div>
    </div>
    <div class="add_todo">
      <button @click="Note({title: `Task2`, id: 2, completed: false}, 1)">Добавить задачу</button>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 20px;
}

.todo_block {
  width: 500px;
  margin-top: 10px;
}

.todo {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #17645e;
}

.add_todo {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>