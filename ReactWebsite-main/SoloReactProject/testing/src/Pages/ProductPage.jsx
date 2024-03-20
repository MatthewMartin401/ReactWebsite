import React from "react";

const ProductPage = ({item, addToBasket}) => {
    // const addToBasket = () => {
    //     fetch(`/basket/add/${item.ID}`)
    // }
    // console.log(item)
    // console.log(item.Name)

    return(
        <div className="product-page">
            <h1>{item.Name}</h1>
            <img src="" alt="Image"/>
            <p>Category: {item.Category}</p>
            <p>£{item.Price}</p>
            <p>Remaining: {item.Remaining}</p>
            <button onClick={
                () => addToBasket(item)}>Add to Basket</button>
            <div className="product-page-info">
                <p>{item.Info}</p>
            </div>
        </div>
    )
}

export default ProductPage