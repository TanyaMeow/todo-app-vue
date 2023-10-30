import {defineStore} from "pinia";
import {computed, ref} from "vue";

interface NoteInterface {
    id: number,
    title: string,
    tasks: TaskInterface[]
}

export interface TaskInterface {
    title: string,
    id: number,
    completed: boolean
}

export const NotesStore = defineStore('notes', () => {
    const notes = ref([{
        id: 1,
        title: 'Note 1',
        tasks: [{
            title: 'Task1',
            id: 1,
            completed: false
        }]
    }]);

    function addNote(note: NoteInterface) {
        notes.value.push(note);
    }

    const addTask = ((task:TaskInterface, id: number) => {
        const note = notes.value.find((note) => {
            return note.id === id;
        })

        return note.tasks.push(task);
    })

    return {notes, addNote, addTask}
})