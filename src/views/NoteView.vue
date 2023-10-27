<script setup lang="ts">
import Note from "@/components/Note.vue";
</script>

<template>
  <div class="note">
    <h1>Note 1</h1>
    <Note />
  </div>
</template>

<style scoped>
  .note {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a796770;
    width: 700px;
  }
</style>