import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import HomeView from '../views/HomeView.vue'
// @ts-ignore
import NoteView from "@/views/NoteView.vue";
import Note from "@/components/Note.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/note',
      component: NoteView,
      children: [{
        path: '/:id',
        component: Note
      }]
    }]
})

export default router
