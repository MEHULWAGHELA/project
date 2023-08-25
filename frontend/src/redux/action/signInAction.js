import { SIGNIN } from "../type/type"

export const signin = (data) => {
    return (dispatch) => {
        dispatch({ type: SIGNIN, obj: data })
    }
}