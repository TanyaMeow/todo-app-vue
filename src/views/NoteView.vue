<script setup lang="ts">

import Note from "@/components/Note.vue";
import {provide, ref} from "vue";
import {NotesStore} from "@/stores/Notes";
import {InitialStore, TaskInterface} from "@/stores/InitialNote";
import {useRoute} from "vue-router";

const addNote = NotesStore().addNote;
const notes = NotesStore().notes;

let editNote = ref({})
const id = useRoute().params.id

if (id) {
  editNote.value = NotesStore().notes.find((note) => {
    return note.id === id;
  });
}

editNote.value = {
  id: null,
  title: '',
  tasks: []
}

provide('editNote', editNote)

function updateNote(title: string) {
  editNote.value.title = title;
}

</script>

<template>
  <div class="note">
    <keep-alive>
      <Note v-on:updateNote="updateNote" />
    </keep-alive>
  </div>
  <div class="functional_note">
    <router-link to="/"><button @click="addNote({ id: editNote.id, title: editNote.title, tasks: editNote.tasks })">Сохранить</button></router-link>
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