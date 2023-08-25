import axios from "axios"
import { SIGNIN } from "../type/type"

let defaultState = {
    userData: [1]
}
export const signinReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGNIN: {
            axios.post('http://localhost:7000/api/user/login', action.obj).then((res) => {
                return {
                    userData: [1,2,3]
                }
            }).catch((err) => {
                console.log(err)
            })
        }

        default: return state
    }
}