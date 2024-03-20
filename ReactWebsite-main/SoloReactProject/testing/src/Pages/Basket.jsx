import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Basket({items, removeItem, addItem}){
    // const removeFromBasket = (item) => {
    //     fetch(`/baskets/${item.basket_id}/remove/${item.product_id}`)
    // }

    const total = () => {
        let amount = 0
        items.map(item => {
            amount += item.Price * item.quantity
        })
        return amount
    }
    const navigate = useNavigate()
    return(
        <div className="basket-page">
            <h1 className="page-title">My Basket</h1>
            <div className="basket-item-list">
            {items.map((item) => {
                return(
                    <div className="basket-item">
                        <h2>{item.Name}</h2>
                        <img src="" alt="Image"/>
                        <div className = "basket-item-buttons">
                            <button onClick={
                            () => {removeItem(item)}}>-</button>
                            <p>[ X {item.quantity} ]</p>
                            <button onClick={
                                () => {addItem(item)}
                            }>+</button>
                        </div>
                        
                        <p>Remaining: {item.Remaining}</p>
                        {/* <p>Category: {item.Category}</p> */}
                        <p>Price: £{item.Price}</p>
                        <p>SubTotal: £{item.Price * item.quantity}</p>
                    </div>
                )
            })}
            </div>
            <h1>Post</h1>
            <p>Postage options</p>
            <h1>Total: £{total()}</h1>
            <button 
                disabled = {!items.length > 0}  // Disabled if no items.
                onClick={() => {
                    navigate('/basket/order')}}>Order</button>
        </div>
    )
}

export default Basket