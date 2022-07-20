import React from 'react';

const ItemDetail = ({ item }) => {
    return(
        <>
            <div className="product">
                <h3 className="mb-3">{item.name}</h3>
            </div>
        </>
    )
}

export default ItemDetail;