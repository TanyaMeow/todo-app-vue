import {defineStore} from "pinia";
import {ref} from "vue";

type callback = () => {};

export const usePopupStore = defineStore('popup', () => {
    const onOK = ref(() => {});
    const show = ref(false);

    function showPopup(callback: callback) {
        onOK.value = callback;
        show.value = true;
    }

    return {onOK, show, showPopup}
})