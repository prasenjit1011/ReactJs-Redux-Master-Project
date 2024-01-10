import { combineReducers, legacy_createStore as createStore } from "redux";

const USER      = {data:["X", "Y", "XY"]};
const PRODUCT   = {data:["P", "Q", "R"]};

const userReducer = (state = USER, action) => {
    const type      = action.type;
    const payload   = action.action;

    if(type == 'ADDUSER'){
        let user = state.data;
        user.push(payload);
        console.log(user);
        return {...state, userstore:user};
    }
    return state;
}


const productReducer = (state = PRODUCT, action) => {
    const type      = action.type;
    const payload   = action.action;

    if(type == 'ADDPROD'){
        let prod = state.data;
        prod.push(payload);
        console.log(prod);
        return {...state, productstore:prod};
    }
    return state;
}


const rootReducer   = combineReducers({userstore:userReducer, productstore:productReducer});
export const store  = createStore(rootReducer);