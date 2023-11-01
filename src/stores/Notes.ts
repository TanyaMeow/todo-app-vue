import {defineStore} from "pinia";
import {ref} from "vue";

export interface NoteInterface {
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

        return note.id;
    }

    function updateNote(noteN: NoteInterface) {
        notes.value = notes.value.map((note) => {
            if (note.id === noteN.id) {
                return noteN
            }
            return note;
        })
    }

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

    return {notes, addNote, changeTask, updateNote}
})