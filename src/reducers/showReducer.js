import { SHOW_TO_DECRYPT_PAGE, SHOW_TO_ENCRYPT_PAGE } from "../actions/types";

const initialState = {
    pages: {
        encryptPage: {
            enable: true
        },
        decryptPage: {
            enable: false
        }
    }
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_TO_ENCRYPT_PAGE:
            return {
                ...state,
                pages: {
                    encryptPage: {
                        enable: action.payload.encrypt
                    },
                    decryptPage: {
                        enable: action.payload.decrypt
                    }
                }
            }
         case SHOW_TO_DECRYPT_PAGE: 
            return {
                ...state,
                pages: {
                    encryptPage: {
                        enable: action.payload.encrypt
                    },
                    decryptPage: {
                        enable: action.payload.decrypt
                    }
                }
            }
         default:
             return state;
    } 
 }