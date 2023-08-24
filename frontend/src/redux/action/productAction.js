import { GETPRODUCT } from "../type/type"

export const getProduct = () => {
    return (dispatch) => {
        dispatch({ type: GETPRODUCT })
    }
}
export const setProduct = (obj) => {
    return (dispatch) => {
        dispatch({ type: GETPRODUCT, obj: obj })
    }
}
export const deleteProduct = (id) => {
    return (dispatch) => {
        dispatch({ type: GETPRODUCT, id: id })
    }
}