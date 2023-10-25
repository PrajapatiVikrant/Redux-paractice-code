import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeProcuctCartArray } from "../State/Slice/addSlice";
import { increment } from "../State/Slice/Cartno";

import './Selectproduct.css'
function Selectproduct(){
    const dispatch = useDispatch();
    const data = useSelector((state)=>{
        return state.product;
    })
    const cartarray = useSelector((state)=>{
         return state.cartarray;
    })
    function addcart(){
      let flag = false;
          cartarray.map((elem,ind)=>{
            if(elem.Name === data.Name){
               flag = true;
            }
          })
         if(flag === false){
          dispatch(ChangeProcuctCartArray(data))
          dispatch(increment(1))
          alert('Item added')
         }else{
          alert('Aleady added');
         }
       
    }
   
    return (
      <>
        <div className="cartdetailctn">
        <div className="detailimagectn">
            <div className="cartdetailimage">
                <img src={data.url} alt="image" className="selectimg"/>
                <br/>
            </div>
            <div className="cartaddbtn">
                <div className="addcart" onClick={addcart}><i className="fa-solid fa-cart-shopping"></i>Add to Cart</div>
                <div className="buy">&gt;&gt;Buy now</div>
            </div>
            
        </div>
        <div className="detailtextctn">
          <div className="pricectn">
            <div className="productname">{data.Name}</div>
            <div className="productprice">₹{data.price}</div>
            <div className="delivery">Free delivery</div>
          </div>
          <div className="Cartproductdetail">
            <div className="detailheading">Product detail</div>
            <div>Name : {data.Name}</div>
            <div>Fabric : {data.Fabric}</div>
            <div>Pattern : {data.Pattern}</div>
            <div>Type:{data.type}</div>
          </div>
        </div>
    </div>
   
    </>
   
    )
}
export default Selectproduct;