import axios from "axios"
import { SIGNIN } from "../type/type"

let defaultState = {
    userData: []
}
export const signinReducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case SIGNIN: {
            axios.post('http://localhost:7000/api/user/login', action.obj).then((res) => {
                return ({
                    userData: [123],
                    response: "res"
                })
            }).catch((err) => {
                console.log(err)
            })
        }

        default: return state
    }
}