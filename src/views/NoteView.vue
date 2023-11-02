<script setup lang="ts">

import Note from "@/components/Note.vue";
import {onRenderTriggered, provide, ref, watchEffect} from "vue";
import {NoteInterface, NotesStore} from "@/stores/Notes";
import {InitialStore, TaskInterface} from "@/stores/InitialNote";
import {useRoute, useRouter} from "vue-router";
import router from "@/router";
import Popup from "@/components/Popup.vue";

const addNote = NotesStore().addNote;
const updateNote = NotesStore().updateNote;
const notes = NotesStore().notes;
const route = useRoute();
let id: any;

let editNote = ref({
  id: null,
  title: '',
  tasks: []
});

watchEffect(() => {

  id = route.params.id;

  if (id) {
    editNote.value = notes.find((note) => {
      return note.id === Number(id);
    });
  }
})

function setTitle(title: string) {
  editNote.value.title = title;
}

function setNote() {
  if (editNote.value.id) {
    updateNote({...editNote.value});
    return;
  }

  const idNote = addNote({...editNote.value});

  router.push({path: `/note/${idNote}`});
}

provide('editNote', editNote);

</script>

<template>
  <Popup/>
  <div class="note">
    <keep-alive>
      <Note v-on:setTitle="setTitle" />
    </keep-alive>
  </div>
  <div class="functional_note">
    <button @click="setNote">Сохранить</button>
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