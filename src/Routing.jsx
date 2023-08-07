import React from "react";
import Product from "./component/Product";
import { Route, Routes } from "react-router-dom";
import Form from "./component/Form";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default Routing;
