import React from 'react';
import { useSelector} from 'react-redux';

import Cardok from './Card';

export const List = () => {

const data = useSelector(store => store)
console.log(data)
const products= data.productos
console.log(products)
const productos= products.productos
console.log(productos)

    return (
        <>
   
                   {products.map((data) => (
            
                            <Cardok 
                                nombre={data.nombre}
                                imagen={data.imagen}
                                precio={data.precio}
                                id={data.id}
                                descripcion={data.descripcion}
                            /> 
                           
                    ))} 
        </>
    )
}
