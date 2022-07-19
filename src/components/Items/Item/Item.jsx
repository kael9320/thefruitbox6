import React from 'react';
import ItemCount from '../../../components/ItemCount'

const Item = (props) => {

    const onAdd = (quantity) => {
        if (quantity <= 0){
        alert(`No hay productos para agregar`);
        }else{
        alert(`Agregaste ${quantity} unidades al carrito`);
        }
    }

    return (
        <div className="col-lg-4 pb-5">
            <div className="product">
                <span className="category">{props.category}</span>
                <img src={props.img} className="img-fluid" alt="Producto"/>
                <h3 className="mb-3">{props.name}</h3>
                <p className="price mb-3">S/ {props.price}</p>
                <p>{props.description}</p>
                <ItemCount initial={0} stock={10} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default Item