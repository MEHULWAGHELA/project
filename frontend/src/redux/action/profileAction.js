import { GETPROFILE } from "../type/type"

export const getProfile = () => {
    return (dispatch) => {
        dispatch({ type: GETPROFILE })
    }
}