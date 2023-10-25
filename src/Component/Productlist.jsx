import React from "react";
import Product from "./Product";
import { useSelector, useDispatch } from 'react-redux';
import {  selectList, ChangeProductlist } from "../State/Slice/Product";
import "./Productlist.css"
function Productlist(){
   const data = useSelector((state)=>{
    return state.productlist
   })
  

    return (
    <div className="Productlistctn">
        {data.map((elem,ind)=>{
            return <Product url = {elem.url} name = {elem.Name} price = {elem.price}  />
        })}
    </div>
    )
}
export default Productlist;