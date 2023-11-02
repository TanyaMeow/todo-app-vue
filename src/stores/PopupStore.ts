import {defineStore} from "pinia";
import {ref} from "vue";

export const usePopupStore = defineStore('popup', () => {
    const onOK = ref(() => {});
    const show = ref(true);

    function showPopup(callback) {
        onOK.value = callback;
        show.value = false;
    }

    return {onOK, show, showPopup}
})