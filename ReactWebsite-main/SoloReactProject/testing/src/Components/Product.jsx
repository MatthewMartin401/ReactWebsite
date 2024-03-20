import React, { useCallback } from "react";
import { Link, Router, useNavigate } from "react-router-dom";

const ProductItems = ({data}) => {
    // console.log(data.items)
    // console.log(data.data.items)
    return(
        <div>
          {/* <h1 className="page-list-title">Example</h1> */}
          <div className='product-space'>
            {data.map((product) => (
              <Link to = {`/product/${product.Name}`}>
                  <div key={product.ID} className="item">
                    <h2>Title: {product.Name}</h2>
                    <img src="" alt="Image"/>
                    <p>Price: £{product.Price}</p>
                    <p>Category: {product.Category}</p>
                    <p>Remaining: {product.Stock}</p>
                  </div>
              </Link>
            ))}
          </div>
        </div>
    )
}
// () => useNavigate(`/about`)
export default ProductItems;