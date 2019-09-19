import { SHOW_TO_DECRYPT_PAGE, SHOW_TO_ENCRYPT_PAGE } from "./types";

export const showToEnctyptPage = () => dispath => {
    dispath({
        type: SHOW_TO_ENCRYPT_PAGE,
        payload: {
            encrypt: true,
            decrypt: false
        }
    });
};

export const showToDectyptPage = () => dispath => {
    dispath({
        type: SHOW_TO_DECRYPT_PAGE,
        payload: {
            encrypt: false,
            decrypt: true
        }
    });
};