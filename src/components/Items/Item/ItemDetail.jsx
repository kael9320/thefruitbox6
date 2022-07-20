import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../../components/ItemCount';
import { Button } from 'react-bootstrap';

const Item = (props) => {

    const onAdd = (quantity) => {
        if (quantity <= 0){
        alert(`No hay productos para agregar`);
        }else{
        alert(`Agregaste ${quantity} unidades al carrito`);
        }
    }

    return (
        <div className="col-lg-10">
            <div className="product">
                <h3 className="mb-3">{props.name}</h3>
            </div>
        </div>
    )
}

export default Item