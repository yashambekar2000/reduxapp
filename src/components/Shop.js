import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'


 export const Shop = () => {
  const dispatch = useDispatch();
const actions = bindActionCreators(actionCreators,dispatch);
const {depositMoney , withdrawMoney} = actions;
const balance = useSelector(state=> state.amount);
  return (
    <div>
        <h2>Buy OnePlus Headphones at RS.400</h2>
        {/* <button className="btn btn-primary mx-4" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
        Add to Cart
        <button className="btn btn-danger mx-4" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button> */}

<button className="btn btn-primary mx-4" onClick={()=>{depositMoney(400)}}>+</button>
        Add to Cart Balance ({balance})
        <button className="btn btn-danger mx-4" onClick={()=>{withdrawMoney(400)}}>-</button>
    </div>
  )
}

