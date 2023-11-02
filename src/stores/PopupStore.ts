import {defineStore} from "pinia";
import {ref} from "vue";

export const usePopupStore = defineStore('popup', () => {
    const onOK = ref(() => {});
    const show = ref(true);

    return {onOK, show}
})

export function showPopup(callback) {
    usePopupStore().onOK = callback;
    usePopupStore().show = false;
}