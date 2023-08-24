import { GETPRODUCT } from "../type/type";
let defaultState = {
    productData: []
}
export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GETPRODUCT: {
            return state
        }
        default: return state
    }
}