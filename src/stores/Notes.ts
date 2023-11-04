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

export const useNotesStore = defineStore('notes', () => {
    const notes = ref(getNotes());

    function getNotes() {
        return (localStorage.getItem('notes') === null) ? [] : JSON.parse(localStorage.getItem('notes') as string);
    }

    function setNotes(notes: NoteInterface) {
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function addNote(note: NoteInterface) {
        note.id = notes.value.length + 1;
        notes.value.push(note);
        setNotes(notes.value);

        return note.id;
    }

    function updateNote(noteN: NoteInterface) {
        notes.value = notes.value.map((note: NoteInterface) => {
            if (note.id === noteN.id) {
                return noteN
            }
            return note;
        })

        setNotes(notes.value);
    }

    function deleteNote(noteId: number) {
        notes.value.map((note: NoteInterface, index: number) => {
            if (note.id === noteId) {
                notes.value.splice(index, 1);
            }
        })

        setNotes(notes.value);
    }

    return {notes, addNote, updateNote, deleteNote}
})