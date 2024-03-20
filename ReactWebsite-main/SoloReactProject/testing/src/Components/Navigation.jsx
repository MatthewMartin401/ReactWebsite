import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

// const load = () => fetch("/product").then(result => result.json()).then(data => {
//     setData(data)})

const NavOptions = [
    {path : "/", text : "Home", id : 0},
    {path : "/basket", text : "Basket", id : 1},
    {path : "/category", text : "Categories", id : 2},
    // {path : "/orders", text : "Orders", id : 3},
    {path : "/about", text : "About", id : 4}
]

const displaylimit = NavOptions.length
const doc = document.querySelector(":root")
const options = " auto".repeat(displaylimit)  // Ensure that the number of rows is alway 1, but adding a new column for each NavOption.
doc.style.setProperty('--options', options)

function Navigation({setData}){
    // const load = () => fetch("/product").then(result => result.json()).then(data => {
    //     setData(data)})

    return(  // Needs to load old search options. OR needs to load at new Link, with seperate cache of items. This would also apply to categories, thought this section has its own links.
            <div className="app-nav">
                    {NavOptions.map((opt) => {
                    return(
                        <Link className="PageLink" key={NavOptions.indexOf(opt)} to = {opt.path}> {opt.text} </Link>
                    )})}         
             </div>
    )
}

export default Navigation;

{/* {NavOptions.map(option => {
            // <Link className = "nav-item" to = {button.path}>
            //     {button.text}
            // </Link>
            return(
                <button>{option.text}</button>
                
            )
        })} */}



