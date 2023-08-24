import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { profileReducer } from "./profileReducer";
import { cartReducer } from "./cartReducer";
import { orderCompletedReducer } from "./orderCompletedReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user:userReducer,
    product:productReducer,
    profile:profileReducer,
    cart:cartReducer,
    order:orderCompletedReducer,
})