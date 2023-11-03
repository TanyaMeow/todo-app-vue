<script setup lang="ts">

import {NotesStore, TaskInterface} from "@/stores/Notes";
import {inject, ref} from "vue";
import {InitialStore} from "@/stores/InitialNote";
import {useRoute} from "vue-router";

const titleTask = ref('');

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
    <div class="add_todo-wat">
      <p class="todo_title">Tasks</p>
      <div class="add_todo">
        <input class="add_todo-input" type="text" v-model="titleTask">
        <button class="add_todo-button" @click="addTask({id: tasks.length + 1, title: titleTask, completed: false})">Добавить задачу</button>
      </div>
    </div>
    <div class="container" v-for="task of tasks">
      <div class="todo">
        <div class="check" :class="{active: task.completed}">
          <input type="checkbox" :class="{complete: task.completed}" v-model="task.completed"/>
          <input class="task" :class="{active: task.completed}" type="text" v-model="task.title">
        </div>
        <div class="functional_task">
          <img src="/icons/edit_task.svg" title="изменить задачу" @click="changeTask(task.title, task.id)" alt="">
          <img src="/icons/delete_forever.svg" title="удалить задачу" @click="deleteTask(task.id)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 20px;
  cursor: pointer;
}

.container {
  margin-bottom: 10px;
  margin-top: 10px;
}

.task {
  background: transparent;
  border: transparent;
}

.task:focus {
  outline: none;
  border-bottom: 1px solid #DCF5E6;
}

.active {
  color: #77819b;
  text-decoration: line-through;
}

.complete {
  display: none;
}

.todo_title {
  margin: 0;
  color: #3b3b5b;
  font-family: 'Nunito Regular', sans-serif;
  text-transform: uppercase;
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

.add_todo-wat {
  display: flex;
  border-bottom: 1px solid #3b3b5b;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.add_todo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.add_todo-input {
  height: 25px;
  border-radius: 5px;
  border: 1px solid #1a7967;
  padding: 1px 10px;
}

.add_todo-input:focus {
  border: 1px solid #DCF5E6;
  outline: none;
}

.add_todo-button {
  position: relative;
  right: 10px;
  height: 29px;
  width: 117px;
}
</style>