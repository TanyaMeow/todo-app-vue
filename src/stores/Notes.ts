import {defineStore} from "pinia";
import {ref} from "vue";
import Note from "@/components/Note.vue";

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

    function deleteNote(noteId: number) {
        notes.value.find((note: NoteInterface, index: number) => {
            if (note.id === noteId) {
                notes.value.splice(index, 1);
            }
        })
    }

    return {notes, addNote, updateNote, deleteNote}
})