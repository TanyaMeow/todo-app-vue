<script setup lang="ts">

import Note from "@/components/Note.vue";
import {provide, ref, watchEffect} from "vue";
import {NoteInterface, useNotesStore} from "@/stores/Notes";
import {useRoute} from "vue-router";
import router from "@/router";
import Popup from "@/components/Popup.vue";
import {usePopupStore} from "@/stores/PopupStore";

const popupStore = usePopupStore();
const notesStore = useNotesStore();

const route = useRoute();
const id = route.params.id;
const open = ref(false);

function copyNote(note: NoteInterface) {
  const tasks = note.tasks.map(task => ({...task}));

  return {...note, tasks: tasks}
}

function getUndoNote() {
  if (undoStack.length === 0) {
    return;
  }

  const newNote = undoStack.pop();

  editNote.value = copyNote(newNote);

  console.log('redoStack',redoStack)
}

function getRedoNote() {
  if (redoStack.length === 0) {
    return;
  }

  const newNote = redoStack.pop();

  editNote.value = copyNote(newNote);

  console.log('undoStack',redoStack)
}

let editNote = ref({
  id: null,
  title: '',
  tasks: []
});

if (id) {
  const currentNote = notesStore.notes.find(note => note.id === Number(id));
  editNote.value = copyNote(currentNote);
}

const undoStack: NoteInterface[] = [];
const redoStack: NoteInterface[] = [];

function setNote() {
  if (editNote.value.id) {
    const currentNote = notesStore.notes.find(note => note.id === editNote.value.id);
    undoStack.push(copyNote(currentNote));
    notesStore.updateNote(copyNote(editNote.value));
    redoStack.push(copyNote(editNote.value));

    return;
  }

  const idNote = notesStore.addNote(copyNote(editNote.value));
  editNote.value.id = idNote;
  router.push({path: `/note/${idNote}`});
}

provide('editNote', editNote);

</script>

<template>
  <Popup/>
  <div class="note">
    <keep-alive>
      <Note />
    </keep-alive>
  </div>
  <div class="functional_note">
    <button @click="setNote(); open = true">Сохранить</button>
    <button @click="popupStore.showPopup(() => router.push({path: `/`}))">Отмена</button>
  </div>

  <div class="history">
    <img class="undo" src="/icons/undo.svg" title="отменить внесенное изменение" @click="getUndoNote" alt="">
    <img class="redo" src="/icons/undo.svg" title="повторить отмененное изменение" @click="getRedoNote" alt="">
  </div>
</template>

<style scoped>
img {
  cursor: pointer;
}

  .note {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a796770;
    width: 700px;
    border-radius: 10px;
    margin-top: 30px;
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
  }
</style>