import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { allproduct } from "../productdata";
import { ChangeProductlist } from "../State/Slice/Product";
import "./Filterlist.css";
function Filterlist(){
   const dispatch = useDispatch();
   
   
   function changelist(){
         
         if(document.getElementById('check1').checked && !document.getElementById('check2').checked && !document.getElementById('check3').checked){
            let arr = allproduct.filter((elem,ind)=>{
               return elem.type === 'Men';
               
            })
          
          dispatch(ChangeProductlist(arr));
          console.log('true false false')
         }
         else if(!document.getElementById('check1').checked && document.getElementById('check2').checked && !document.getElementById('check3').checked){
            let arr = allproduct.filter((elem,ind)=>{
               return elem.type === 'kids';
            })
          
          dispatch(ChangeProductlist(arr));
            
            console.log('false true false')
         }
         else if(!document.getElementById('check1').checked && !document.getElementById('check2').checked && document.getElementById('check3').checked){
            let arr = allproduct.filter((elem,ind)=>{
               return elem.type === 'Women';
            })
          
          dispatch(ChangeProductlist(arr));
            console.log('false false true')
         }
         else if(document.getElementById('check1').checked && document.getElementById('check2').checked && !document.getElementById('check3').checked){
            let arr = allproduct.filter((elem,ind)=>{
               return elem.type === 'kids' || elem.type === 'Men';
            })
          
          dispatch(ChangeProductlist(arr));
            console.log('true true false')
         }
         else if(document.getElementById('check1').checked && !document.getElementById('check2').checked && document.getElementById('check3').checked){
            let arr = allproduct.filter((elem,ind)=>{
               return elem.type === 'Men' || elem.type === 'Women';
            })
          
          dispatch(ChangeProductlist(arr));
            console.log('true false true')
         }
         else if(!document.getElementById('check1').checked && document.getElementById('check2').checked && document.getElementById('check3').checked){
            let arr = allproduct.filter((elem,ind)=>{
               return elem.type === 'kids' || elem.type === 'Women';
            })
          
          dispatch(ChangeProductlist(arr));
            console.log('false true true')
         }
         else{
            dispatch(ChangeProductlist(allproduct))
            console.log('(true true true) or (false false false)')
         }
      
   }
    
   return (
       <div className="filterctn" id="filterlist">
         <div className="innerfilterlist">
          <h1>Filter list</h1>
          <div className="filteritem"> <input type="checkbox" id="check1" onClick={changelist} className="filterinput"/>Men</div><br /><br />
          <div className="filteritem"> <input type="checkbox" id="check2" onClick={changelist} className="filterinput"/>Kids</div><br /><br />
          <div className="filteritem"> <input type="checkbox" id="check3" onClick={changelist} className="filterinput"/>Women</div><br /><br />
          </div>
       </div>
   ) 
}

export default Filterlist;