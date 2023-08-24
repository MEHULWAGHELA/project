import { USERGET } from "../type/type"

export const getUserData = () => {
    return (dispatch) => {
        dispatch({ type: USERGET })
    }
}