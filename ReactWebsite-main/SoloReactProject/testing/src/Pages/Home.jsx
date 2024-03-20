import React from "react";
import ProductItems from "../Components/Product";
import { Link } from "react-router-dom";

function Home({data, setItem}){
    // console.log(data)
    return(
            <ProductItems data={data} setItem = {() => setItem()}/>
    )
}

export default Home