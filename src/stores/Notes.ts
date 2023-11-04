import {defineStore} from "pinia";
import {ref} from "vue";

export interface NoteInterface {
    id: number | null,
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

    function updateNote(noteCreate: NoteInterface) {
        notes.value = notes.value.map((note: NoteInterface) => {
            if (note.id === noteCreate.id) {
                return noteCreate;
            }
            return note;
        })

        setNotes(notes.value);
    }

    function deleteNote(id: number) {
        notes.value.map((note: NoteInterface, index: number) => {
            if (note.id === id) {
                notes.value.splice(index, 1);
            }
        })

        setNotes(notes.value);
    }

    return {notes, addNote, updateNote, deleteNote}
})