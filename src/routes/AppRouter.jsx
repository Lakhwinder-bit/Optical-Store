import HomePage from "../pages/home";
import Product from "../pages/product"
import Login from "../pages/login";
import Signup from "../pages/register";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/mainLayout";
export default function Approunts() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>


        <Route path="/" element={<HomePage />} />
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Login" element={<Login/>}/>
         <Route path="/register" element={<Signup/>}/>
         </Route>
      </Routes>
    </>
  );
}
