import { SIGNIN } from "../type/type"

export const signin = (data) => {
    console.log("sign")
    return (dispatch) => {
        dispatch({ type: SIGNIN, obj: data })
    }
}