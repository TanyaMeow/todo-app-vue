<script setup lang="ts">

</script>

<template>
  <div class="todo_block">
    <div class="todo">
      <div class="check"><input type="checkbox"/>Task1</div>
      <div class="functional_task">
        <img src="public/icons/edit_task.svg" title="изменить задачу" alt="">
        <img src="public/icons/delete_forever.svg" title="удалить задачу" alt="">
      </div>
    </div>
    <div class="todo">
      <div class="check"><input type="checkbox"/>Task2</div>
      <div class="functional_task">
        <img src="public/icons/edit_task.svg" title="изменить задачу" alt="">
        <img src="public/icons/delete_forever.svg" title="удалить задачу" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 20px;
}

.todo_block {
  width: 500px;
}

.todo {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #17645e;
}
</style>