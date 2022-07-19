import React, { useState , useEffect } from "react";
import Item from "./Item/Item";

function Items(props){

  const itemsData =[
    {
      id: 1,
      name: "Producto 1",
      category: "Aceites",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-1.jpg",
    },
    {
      id: 2,
      name: "Producto 2",
      category: "Verduras",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-2.jpg",
    },
    {
      id: 3,
      name: "Producto 3",
      category: "Harina",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-3.jpg",
    },
    {
      id: 4,
      name: "Producto 3",
      category: "Jugos",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-4.jpg",
    },
    {
      id: 5,
      name: "Producto 3",
      category: "Embolsados",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-5.jpg",
    },
    {
      id: 6,
      name: "Producto 3",
      category: "Bebidas",
      price: "10",
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "product-6.jpg",
    },
  ]

  const [items, setItems] = useState([]);

   useEffect(
    () => {
      let promiseItems = new Promise((resolve, reject) => {
        setTimeout(
          () => {
            resolve(itemsData);
        }, 2000);
      });

      promiseItems.then(
        (respuesta) =>{
          setItems(itemsData);
        }
      ).catch(
        (errorMsg) => console.log(errorMsg)
      )
    },
    []
  )

  return (
    <div className="row">
      {items.map((item) => {
        return  <Item name={item.name} img={require(`./Images/${item.img}`)}  category={item.category}  price={item.price} description={item.description} />
      })}
    </div>
  );
};

export default Items;