<script setup lang="ts">

</script>

<template>
  <main>
    <div class="block_notes">
      <div>
        <h1 class="title_todo">ToDo</h1>
        <div class="container_notes">
          <div class="container_note">
            <div class="note_functional">
              <h1 class="title_note">Note1</h1>
              <img src="public/" alt="">
              <div class="functional">
                <img src="public/icons/edit.svg" title="изменить заметку" alt="изменить заметку"/>
                <img src="public/icons/delete.svg" title="удалить заметку" alt="удалить заметку"/>
              </div>
            </div>
            <div class="container_tasks">
              <div>Task1</div>
              <div>Task2</div>
            </div>
          </div>
        </div>
        <div class="func">
          <img src="public/icons/add.svg" alt="">Создать заметку
          <img src="" alt="">
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
  main {
    display: flex;
    justify-content: center;
  }

  .block_notes {
    width: 700px;
  }

  .title_todo {
    text-align: center;
  }

  .title_note {
    font-size: 20px;
  }

  .container_note {
    margin-top: 10px;
    background-color: #1a796770;
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
    align-items: center;
    justify-content: center;
  }
</style>