import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Order({basket}){
    const ID = 1
    const [order, setOrder] = useState({})
    const navigate = useNavigate()
    // console.log([true].includes(true))
    return(
        <div className="order">
            <h1 className="page-title">Orders</h1>
            <div>
                <>
                    <label for="name">Name: </label>
                    <input name="name" onChange={e => setOrder({...order, name : e.target.value})}></input>    
                </>
                <>
                    <label for="surname">Surname: </label>
                    <input name="surname" onChange={e => setOrder({...order, surname : e.target.value})}></input>    
                </>
                <>
                    <label for="email">Email: </label>
                    <input type="email" name="email" onChange={e => setOrder({...order, email : e.target.value})}></input>    
                </>
                <>
                    <label for="address">Address: </label>
                    <input name="title" onChange={e => setOrder({...order, address : e.target.value})}></input>    
                </>
                <>
                    <label for="Post-Code">Post-Code: </label>
                    <input name="Post-Code" onChange={e => setOrder({...order, post_code : e.target.value})}></input>
                </>
                <>
                    <label for="Payment">Payment method: </label>
                    <select name="Payment" id="Payment">
                        <option value="Select">Select</option>
                        <option value="option-1">Option-1</option>
                        <option value="option-2">Option-2</option>
                        <option value="option-3">Option-3</option>
                    </select>
                </>
            </div>
            <button 
                disabled={order.length < 5}
                onClick={() => {// Disable if one of the inputs is empty.
                // fetch(`/basket/order/${order.name}/${order.surname}/${order.email}/${order.address}/${order.post_code}/${order.basket}`)
                console.log(basket)
                console.log(order) 
                fetch(`/basket/${basket}/${order}/`)
                navigate(`/basket/order/completed`)
            }}  
            >Place Order</button>
        </div>
    )
}

export default Order;