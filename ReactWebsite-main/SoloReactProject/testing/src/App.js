import { BrowserRouter as Router, Route, Routes, Form, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About'
import ProductItems from './Components/Product';
import ProductPage from './Pages/ProductPage';
import Navigation from './Components/Navigation'
import Basket from './Pages/Basket';
import Category from './Pages/CategoryDirectory';
import CategoryItems from './Pages/Category';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Order from './Pages/Order'
import Ordered from './Pages/Ordered';
import { ThemeProvider, useTheme } from './Context/theme';
import { ThemeButton } from './Components/ThemeButton';


// function Usedatabase(target){
// const UseDataBase = (target) =>{
//       const data = fetch(target).then(result => result.json)
// }

// const LoadAllData = (props) => {
//   const data = UseDataBase(props.target)
//   console.error("Wrong database name")
// }

// const [Productdata, setProductData] = React.useState([])  // [] is added to fix this map reading issue
//   const product = "/product"
//   setProductData(UseDataBase(product))

//   const [BasketData, setBasketData] = React.useState([])
//   const basket = "/basket"
//   setBasketData()



// Search - needs finishing.
        
function CustomForm(){

  const [data, setData] = React.useState({name : "",
                                          year : ""})  
  // use state at the highest you can get away with
  // react can get stuck in an infinite rerendering loop. State can slow down a website.
  // 

  function handleForm(name, year){
    console.log(`CLICK: ${name}, ${year}`)
    // fetch("http//:localhost:3001/create/")
    // fetch(`/product/${name}/${year}`)
  }

  console.log("CUSTOM-FORM")

  const formdata = (search) =>{
    console.log(search)}
  return(
    <>
        <label for="title"> Title </label>
        <input name="title" onChange={e => setData({name : e.target.value})}></input>
        <label for="year">Publication Year</label>
        <input name="year" onChange={e => setData({...data, year : e.target.value})}></input>
        <input type = "submit" onClick={() => handleForm(data.name, data.year)}></input>
        <p>{data.name}</p>
        <p>{data.year}</p>
    </>
  )
}


// Make sure you clean the data.

function item(info){
  console.log(info)
  return(
    <div>
      <p>!info.product_name ?</p>  
    </div>
  )// You can put !value ? trueout : falseout instead of value === 0 ? trueout : falseout. Its called truthy and falsey.
}

// function SearchBar(){
//   const [target, setTarget] = useState([]) // [] or ''

//   function SearchItem(item){
//     fetch(`/product/${item}`).then(result => result.json()).then(data => {
//         setTarget(data)})
//         // console.log(item)
//         console.log(target)
//     }
// return(
//   <>
//     <input onChange={e => SearchItem(e.target.value)}/>
//     {
//       target.map(data =>{
//           <p>{data.product_name}</p>
// })
//     }
//   </>
// ) // e is added, as it stands or on event.
// }


function ItemListing(name){
  const [data, setData] = React.useState([]) // [] or ''

  function searchItem(item){
    fetch(`/product/${item}`).then(result => result.json()).then(data => {
        setData(data)})
  }
  React.useEffect = () => {
    fetch("/product").then(result => result.json()).then(data => {
      setData(data)})
  }

  return(
    <div>
      <input onchange = {e => searchItem(e.target.value)}/>
      {data.length == 0 ? <p>Loading</p> : data.map((data) => (
        <item info = {data}/>  // Inputs product data
      ))}
    </div>
  )
}


// html form - sends data to a server. However, react and general html forms are created/used differently.

// Loading CategoryS

function App()
{
  //const {isDarkMode} = useTheme()

  const [data, setData] = React.useState([])  // [] is added to fix this map reading issue
  const [basketData, setBasketData] = React.useState([]) // Not query server.

  const addToBasket = (product, quantity = 1) => {
    console.log(product)
    const existingIndex = basketData.findIndex((item) => item.ID == product.ID)

    if (existingIndex !== -1){
      const updatedBasket = [...basketData]
      updatedBasket[existingIndex].quantity += quantity
      setBasketData(updatedBasket)
      
    } else {
      setBasketData([...basketData, {...product, quantity: quantity}]) // All of the previous items, and new item with quantity.
    }
    console.log(basketData)
  }
  const removeItem = (product, quantity = -1) => {
    if (product.quantity != 1){
      const index = basketData.findIndex(item => item.ID == product.ID)
      const updatedBasket = [...basketData]
      updatedBasket[index].quantity -= 1
      setBasketData(updatedBasket)
    }else{
      const updatedBasket = basketData.filter((item) => item.ID !== product.ID)  // Excludes product of ID from listing.
      //console.log(updatedBasket)
      setBasketData(updatedBasket)
      //console.log(basketData)
    }
  }

  const [accountData, setAccountData] = React.useState([])
  React.useEffect(() =>
    {
      // Database 1
          fetch("/product").then(result => result.json()).then(data => {
            setData(data)  
            // HAS TO SAY DATA - OR IT WONT WORK!!!
            //console.log(data) 
          }).catch(error => console.error(error))
      // Database 2
          // fetch("/basket").then(result => result.json()).then(data => {
          //   setBasketData(data)
          // })
      // Database 3
      // fetch("/account").then(result => result.json()).then(data => {
      //   setAccountData(data)
      // })
    }, []
    )


  function SearchItem(item){
        fetch(`/product/${item}`).then(result => result.json()).then(data => {
            setData(data)})
            // console.log(item)
            console.log(data)
        }

  
  function SearchBar(){
    return(
      <div className="search">
        <label>Search: </label>
        <input  onKeyDown={(e) => e.key == "Enter" ? SearchItem(e.target.value) : null}/>
      </div>
    ) 
  }
  // e is added, as it stands or on event.

  
    const AllCategories = [
      {path : "/comedy", text : "comedy"},
      {path : "/mystery", text : "mystery"},
      {path : "/thriller", text : "thriller"},
      {path : "/fantasy", text : "fantasy"},
      {path : "/sci-fi", text : "sci-fi"}
    ]

    const Tempdata = [  // Temp data for testing and designing.
      {ID : 1, Name : "temp1", Category: "Thriller", Price : 5.00, Info : "Example", Remaining : "1"},
      {ID : 2, Name : "temp2", Category: "Comedy", Price : 5.00, Info : "Example", Remaining : "1"},
      {ID : 3, Name : "temp3", Category: "", Price : 5.00, Info : "Example", Remaining : "1"},
      {ID : 4, Name : "temp4", Category: "", Price : 5.00, Info : "Example", Remaining : "1"},
      {ID : 5, Name : "temp5", Category: "", Price : 5.00, Info : "Example", Remaining : "1"}
    ]

        // CONSTANTLY REPEATS
    // const [items, setItems] = useState([])
    // fetch(`/basket/${1}`).then(result => result.json().then(data => {
    //   setItems(data)}))
    console.log(accountData)

    const {DarkMode} = useTheme()
    return(
    <div className={`app-${DarkMode ? "dark" : "light"}`}>
      <Header/>      
      <BrowserRouter>
      <SearchBar/>
      <Navigation setData={setData}/>
        <ThemeButton/>
        {/* <CustomForm/> */}
          <Routes>
            <Route path='/' exact element={
            <>
              <h1 className="page-title">Home</h1>
              
              <ProductItems data = {Tempdata}/>
            </>}/>

            {Tempdata.map(item => {
              return(
                  <Route path = {`/product/${item.Name}`} exact element = {
                    <>
                      <ProductPage item={item} addToBasket={addToBasket}/>
                    </>
                  }/>
              )
            })}

            <Route path='/basket' exact element={<Basket items = {basketData} removeItem = {removeItem} addItem={addToBasket}/>}/>
            <Route path='/basket/order' exact element = {
              <Order basket={basketData}/>
            }/>
            <Route path={'/basket/order/completed'} exact element={
              <Ordered/>
            }/>
            <Route path='/category' exact element={
              <>
                <h1 className="page-title">Categories</h1>
                <Category categories = {AllCategories} setData = {setData}/>
              </>}/>
            
            {AllCategories.map(Category => {
              return(
                <Route path = {`/category${Category.path}`} exact element={
                <>
                  <h1>{Category.text}</h1>
                  <ProductItems data = {data}/>
                </>
              }/>)})}
            <Route path='/about' exact element={ <About/> }/>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;


