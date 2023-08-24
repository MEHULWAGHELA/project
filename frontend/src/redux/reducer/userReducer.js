import { USERGET } from "../type/type"

let defaultState = {
    userData: []
}
export const userReducer = (state = defaultState, action) => {
    const getapi=()=>{
        
    }
    switch (action.type) {
        case USERGET: {
            return state
        }
        default: return state
    }
}