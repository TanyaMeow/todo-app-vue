<script setup lang="ts">

import Note from "@/components/Note.vue";
import {ref} from "vue";
import {NotesStore} from "@/stores/Notes";

const addNote = NotesStore().addNote;
let note = ref('');
function updateNote(noten: string) {
  note.value = noten;
}

</script>

<template>
  <div class="note">
    <keep-alive>
      <Note v-on:updateNote="updateNote" />
    </keep-alive>
  </div>
  <div class="functional_note">
    <button @click="addNote({ id: 2, title: note, tasks: [] })">Сохранить</button>
    <button>Отмена</button>
  </div>

  <div class="history">
    <img class="undo" src="/icons/undo.svg" alt="">
    <img class="redo" src="/icons/undo.svg" alt="">
  </div>
</template>

<style scoped>
  .note {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a796770;
    width: 700px;
    border-radius: 10px;
    margin-top: 40px;
  }

  .functional_note {
    margin-top: 40px;
     & button:first-child {
        margin-right: 10px;
     }
  }

  .redo {
    transform: scale(-1,1);
    margin-left: 10px;
  }

  .history {
    margin-top: 30px;
    display: none;
  }
</style>