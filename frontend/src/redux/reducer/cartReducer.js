import { GETCART } from "../type/type";
let defaultState = {
    cartData: []
}
export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GETCART: {
            return state
        }
        default: return state
    }
}