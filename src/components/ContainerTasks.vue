<script setup lang="ts">

import {NotesStore, TaskInterface} from "@/stores/Notes";
import {inject, ref} from "vue";
import {InitialStore} from "@/stores/InitialNote";
import {useRoute} from "vue-router";

const titleTask = ref('');
const active = ref(false);
const activeChange = ref(false);
const nonActive = ref(true);
const title = ref('');

const editNote = inject('editNote');
let tasks = editNote.value.tasks;

function addTask(task: TaskInterface) {
  tasks.push(task);
}
function deleteTask(taskId: number) {
  tasks.find((task: TaskInterface, index: number) => {
    if (task.id === taskId) {
      tasks.splice(index, 1);
    }
  })
}
function changeTask(title: string, taskId: number) {
  tasks.find((task: TaskInterface) => {
    if (task.id === taskId) {
      task.title = title;
    }
  })
}

</script>

<template>
  <div class="todo_block">
    <p class="todo_title">Tasks</p>
    <div class="container" v-for="task of tasks">
      <div class="todo">
        <div class="check" v-bind:class="{active: task.completed}"><input type="checkbox" v-bind:class="{complete: task.completed}" v-model="task.completed" @click="console.log(task.completed)"/>{{task.title}}</div>
        <div class="functional_task">
          <img src="/icons/edit_task.svg" title="изменить задачу" @click="activeChange = true; nonActive = false" alt="">
          <img src="/icons/delete_forever.svg" title="удалить задачу" @click="deleteTask(task.id)" alt="">
        </div>
      </div>
      <div class="container_change" :class="{non_active: nonActive, active_change: activeChange}">
        <input class="change_task" type="text" v-model="task.title">
        <button class="change" @click="changeTask(task.title, task.id)">Изменить</button>
      </div>
    </div>
    <div class="add_todo">
      <input type="text" v-model="titleTask">
      <button @click="addTask({id: tasks.length + 1, title: titleTask, completed: false})">Добавить задачу</button>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 20px;
}

.change {
  height: 30px;
  position: relative;
  right: 10px;
}

.change_task {
  background-color: rgba(201, 232, 226, 0.44);
  border: 1px solid #114a3f70;
  height: 26px;
  border-radius: 0 5px 0 5px;
}

.change_task:focus {
  border: 1px solid #bfffef;
  outline: none;
}

.active_change {
  display: flex;
}

.non_active {
  display: none;
}

.container_change {
  align-items: center;
  justify-content: flex-end;
}

.active {
  color: #77819b;
  text-decoration: line-through;
}

.complete {
  display: none;
}

.todo_title {
  color: #3b3b5b;
  font-family: 'Nunito Regular', sans-serif;
  text-transform: uppercase;
  border-bottom: 1px solid #3b3b5b;
  font-weight: 600;
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