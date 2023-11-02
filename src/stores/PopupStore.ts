import {defineStore} from "pinia";
import {ref} from "vue";

export const usePopupStore = defineStore('popup', () => {
    const onOK = ref(() => {});
    const show = ref(false);

    function showPopup(callback) {
        onOK.value = callback;
        show.value = true;
    }

    return {onOK, show, showPopup}
})