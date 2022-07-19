import React from "react";
import NavBar from "./components/NavBar";
import NavFooter from "./components/NavFooter";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/"></Route>
        </Routes>
        <NavBar></NavBar>
        <ItemListContainer />
        <NavFooter></NavFooter>
      </BrowserRouter>
    </>
  );
}

export default App;
