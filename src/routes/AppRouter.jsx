import HomePage from "../pages/home";
import Product from "../pages/product"
import { Routes, Route } from "react-router-dom";
export default function Approunts() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<Product/>}/>
      </Routes>
    </>
  );
}
