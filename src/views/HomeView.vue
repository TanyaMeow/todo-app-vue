<script setup lang="ts">
import Popup from "@/components/Popup.vue";

import {NotesStore} from "@/stores/Notes";
import {provide, ref} from "vue";
import {usePopupStore} from "@/stores/PopupStore";

const notes = NotesStore().notes;
const deleteNote = NotesStore().deleteNote;

const popupStore = usePopupStore();

const open = ref(false);

</script>

<template>
  <Popup/>
  <main>
    <div class="block_notes">
      <div>
        <h1 class="title_todo">ToDo</h1>
        <div class="notes_block">
          <p>Notes</p>
          <div class="container_notes" v-for="note of notes">
              <div class="container_note">
                <div class="note_functional">
                  <div class="head">
                    <h1 class="title_note">{{note.title}}</h1>
                    <img class="but" v-bind:class="{active: open}" @click="open = true" src="public/icons/caret_down.svg" alt="">
                  </div>
                  <div class="functional">
                    <router-link :to="{name: 'note', params: {id: note.id}}"><img src="public/icons/edit.svg" title="изменить заметку" alt="изменить заметку"/></router-link>
                    <img src="public/icons/delete.svg" title="удалить заметку" alt="удалить заметку" @click="popupStore.showPopup(() => deleteNote(note.id))"/>
                  </div>
                </div>
                <div class="container_tasks" v-for="task of note.tasks">
                  <div class="todo">{{task.title}}</div>
                </div>
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

p {
  color: #3b3b5b;
  font-family: 'Nunito Regular', sans-serif;
  text-transform: uppercase;
  border-bottom: 1px solid #3b3b5b;
  font-weight: 600;
}

.functional {
  display: flex;
}

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

.container_tasks {
  padding-left: 10px;
}

.container_note {
  margin-top: 10px;
  background-color: #1a796770;
  border-radius: 5px;
  width: 100%;
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
  padding: 0 10px;
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