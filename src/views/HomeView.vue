<script setup lang="ts">

import {NotesStore} from "@/stores/Notes";
import {ref} from "vue";

const notes = NotesStore().notes;
const tasks = NotesStore().notes[0].tasks;

const open = ref(false);

console.log(tasks)

</script>

<template>
  <main>
    <div class="block_notes">
      <div>
        <h1 class="title_todo">ToDo</h1>
        <div class="container_notes" v-for="note of notes">
          <div class="container_note">
            <div class="note_functional">
              <div class="head">
                <h1 class="title_note">{{note.title}}</h1>
                <img class="but" v-bind:class="{active: open}" @click="open = true" src="public/icons/caret_down.svg" alt="">
              </div>
              <div class="functional">
                <img src="public/icons/edit.svg" title="изменить заметку" alt="изменить заметку"/>
                <img src="public/icons/delete.svg" title="удалить заметку" alt="удалить заметку"/>
              </div>
            </div>
            <div class="container_tasks" v-for="task of tasks">
              <div class="todo">{{task.title}}</div>
            </div>
          </div>
        </div>
        <div class="func">
          <RouterLink to="/note"><img src="public/icons/add.svg" alt="">Создать заметку</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>

a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

main {
  display: flex;
  justify-content: center;
}

.block_notes {
  width: 700px;
}

.title_todo {
  text-align: center;
  font-family: 'Nunito Regular', sans-serif;
}

.title_note {
  font-size: 20px;
  font-family: 'Nunito Regular', sans-serif;
}

.container_note {
  margin-top: 10px;
  background-color: #1a796770;
  border-radius: 5px;
  padding: 0 10px;
}

.container_notes {
  margin-top: 20px;
}

img {
  width: 30px;
}

.note_functional {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.func {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.head {
  display: flex;
  align-items: center;
}

.todo {
  border-radius: 10px 0 0;
  padding: 0 5px;
  background-color: #dcf5e696;
  border-bottom: 1px solid #DCF5E6;
  height: 30px;
  display: flex;
  align-items: center;
}
</style>