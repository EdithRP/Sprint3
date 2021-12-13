import { types } from "../types/types";

const menorReducer = (state = [], action) =>{
    switch (action.type){
        case types.menorproducto:
          return action.payload
        default:
            return state
    }
}

const vendidasReducer = (state = [], action) =>{
    switch (action.type){
        case types.mayorcantvendida:
            return action.payload
        default:
            return state
    }
}

const productosReducer = (state = [], action) =>{
    switch (action.type){
        case types.getProductos:
            return action.payload
        default:
            return state
    }
}

export {productosReducer, vendidasReducer, menorReducer}