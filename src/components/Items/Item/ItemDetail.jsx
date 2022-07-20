import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../../components/ItemCount';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetail = (props) => {

    const params = useParams();
    console.log(params);

    return (
        <>Hola Detalle de Producto</>
    )
}

export default ItemDetail