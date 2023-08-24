import axios from "axios";
import { GETPROFILE } from "../type/type";
let defaultState = {
    productData: []
}
export const profileReducer = (state = defaultState, action) => {
    const get = () => {
        axios.get('http://localhost:7000/api/user/getUser')
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }
    console.log(action)
    switch (action.type) {
        case GETPROFILE: {
            get()
            return state
        }
        default: return state
    }
}