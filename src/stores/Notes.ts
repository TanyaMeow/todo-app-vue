import {defineStore} from "pinia";
import {ref} from "vue";

interface NoteInterface {
    id: number,
    title: string,
    tasks: TaskInterface[] | []
}

export interface TaskInterface {
    title: string,
    id: number,
    completed: boolean
}

export const NotesStore = defineStore('notes', () => {
    const notes = ref([]);

    function addNote(note: NoteInterface) {
        note.id = notes.value.length + 1;
        notes.value.push(note);
    }

    function updateNote(note) {

    }

    const deleteTask = (idTask: number, idNote: number) => {
        const note = notes.value.find((note) => {
            return note.id === idNote;
        })

        note?.tasks.find((task, index) => {
            if (task.id === idTask) {
                note?.tasks.splice(index, 1);
            }
        })
    };

    const changeTask = (title:string, taskId: number, noteId: number) => {
        const note = notes.value.find((note) => {
            return note.id === noteId;
        })

        note?.tasks.find((task) => {
            if (task.id === taskId) {
                task.title = title;
            }
        })
    }

    return {notes, addNote, deleteTask, changeTask}
})