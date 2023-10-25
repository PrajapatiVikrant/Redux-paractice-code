import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  UpdateCartarray } from "../State/Slice/addSlice";
import { decrement } from "../State/Slice/Cartno";
import './CartCard.css';
function CartCard(props){
  const cartarray = useSelector((state)=>{
    return state.cartarray;
});
  const dispatch = useDispatch();
function Removeitem(name){
  const updatedarr = cartarray.filter((elem,ind)=>{
          return elem.Name !== name;
  })
  dispatch(UpdateCartarray(updatedarr))
  dispatch(decrement(1))
}
    return(
        <div className="allcart">
        <div className="cartctn">
          <div className="cartsection">
        <img src={props.url} alt="" className="cartimage"/>
        <div className="carttext">
          <div className="cartitem">{props.name}</div>
          <div className="cartitem">₹{props.price}</div>
          <div className="cartitem">All issue easy returns allowed</div>
          
          <div className="removebtn" onClick={()=>Removeitem(props.name)}><i className="fa-solid fa-xmark"></i>Remove</div>
        </div>
        </div>
        <div className="edit">Edit</div>
      </div>
     
      </div>
    )
}
export default CartCard;