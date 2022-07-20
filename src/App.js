import React from "react";
import NavBar from "./components/NavBar";
import NavFooter from "./components/NavFooter";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, link} from "react-router-dom";
import ItemDetailContainer from "./components/Items/Item/ItemDetail";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:name" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>
        <NavFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
