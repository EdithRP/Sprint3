import {collection, getDocs } from "@firebase/firestore"
import { db } from "../firebase/firebase";
import { types} from '../types/types'


export const mostrarProductoAsincronico = () => {
    return async (dispatch) => {
        const datos = await getDocs(collection(db, "productos"));
        const productos = [];
        console.log(datos)
        datos.forEach((document) => {
            productos.push(
                document.data()
            )
        })
        dispatch(mostrarProductoSincrono(productos))
    }
}
export const mostrarProductoSincrono = (productos) => {
    return {
        type: types.getProductos,
        payload: productos
    }
}

export const mayorcantvendida = () => {
    return async (dispatch) => {
        const datos = await getDocs(collection(db, "productos"));
     
        const product = [];
        datos.forEach((document) => {
            product.push(
                document.data()
            )
        })
        const productos= product.sort(((a, b) => a.cantvendida - b.cantvendida))
        dispatch(mayorcantidadven(productos))
    }
}
export const mayorcantidadven= (productos) => {
    return {
        type: types.mayorcantidad,
        payload: productos
    }
}
