import React, { useState } from "react";
import { Link } from "react-router-dom";

// const categories = [
//     {path : "/comedy", text : "comedy"},
//     {path : "/mystery", text : "mystery"},
//     {path : "/thriller", text : "thriller"},
//     {path : "/fantasy", text : "fantasy"},
//     {path : "/sci-fi", text : "sci-fi"}
// ]


// function CategoryPage(selected){

//     fetch(`http//:localhost:3001/createbook//${selected}`)
//     return(
//         <Home data = {data``}/>
//     )
// }


function Category({categories, setData}){
    return(
        <div className="Category-Table">
            {
            categories.map((data) => {
                return(
                    <Link key = {categories.indexOf(data)} to = {`/category${data.path}`} onClick={() => {
                        fetch(`/products/category/${data.text}`).then(result => result.json()).then(data => setData(data))  // Sends request to server for all items of category.
                    }}>
                        {data.text}
                    </Link>
                )
            })}
        </div>
    )
}



export default Category