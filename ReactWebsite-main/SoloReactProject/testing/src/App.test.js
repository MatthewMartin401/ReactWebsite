import { render, fireEvent, screen } from '@testing-library/react';
import { ReactDOM } from 'react';
import React from 'react';
import App from './App';
import { Money } from './index';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductPage from './Pages/ProductPage';
import { ThemeProvider } from './Context/theme';
import ProductItems from './Components/Product';
import Basket from './Pages/Basket';
import Order from './Pages/Order';

// Unit testing

const Tempdata = [  // Temp data for testing and designing.
      {ID : 1, Name : "temp1", Category: "Thriller", Price : 5.00, Info : "Example", Remaining : "1"},
      {ID : 2, Name : "temp2", Category: "Comedy", Price : 5.00, Info : "Example", Remaining : "1"},
      {ID : 3, Name : "temp3", Category: "", Price : 5.00, Info : "Example", Remaining : "1"},
      {ID : 4, Name : "temp4", Category: "", Price : 5.00, Info : "Example", Remaining : "1"},
      {ID : 5, Name : "temp5", Category: "", Price : 5.00, Info : "Example", Remaining : "1"}
    ]
const AllCategories = [
  {path : "/comedy", text : "comedy"},
  {path : "/mystery", text : "mystery"},
  {path : "/thriller", text : "thriller"},
  {path : "/fantasy", text : "fantasy"},
  {path : "/sci-fi", text : "sci-fi"}
]

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Navigation", async () => {
  render(<ThemeProvider>
           <App />
         </ThemeProvider> )

  fireEvent.click(screen.getByText("About"))

  const items = await screen.findAllByText(/About/i)
  expect(items).toHaveLength(2)
})

test("Darkmode", async () => {
  render(<ThemeProvider>
           <App />
         </ThemeProvider> )  // Doesnt not render script.

  fireEvent.click(screen.getByText("Light"))
  const items = await document.getElementsByClassName("app-dark")

  expect(items).toHaveLength(1)
})

test("Load Basket", () => {
  const {content} = render(
    <React.StrictMode>
      <BrowserRouter>
        <Basket items ={Tempdata}/>
      </BrowserRouter>
    </React.StrictMode>)
  const item = document.getElementsByClassName("basket-item")
  console.log(item)
  expect(item).toHaveLength(Tempdata.length)
})




/*
class Dollar{
  constructor(value){
    this.value = 10
  }
}
*/


// This method is an exclusive feature of JEST. Its seperate but used within react. So its another dependency.
// const add = (x, y) => x + y;
// const divide = (x, y) => x / y;
// const multiply = (x, y) => x * y;


// npm test
// test('adding 1 + 1 returns 2', () => 
// {
//   expect(add(1, 1)).toBe(2)
// });

// test("dividing 25 by 5 = 5", () =>
// {
//   expect(divide(25, 5)).toBe(5)
// })

// test("muliply 5 by 10 = 50", () =>
// {
//   expect(multiply(5, 10)).toBe(50)
// })

// test("Prints string", () =>
// {
//   expect("hello").toBe("hello")
// })

// const word = String("hello")


// test(`${word} has ${String(word).length} characters`, (word) =>
// {
//   expect(String(word.at(String(word).charAt(-1) + 1)).toBe(5)
// })

// test("2 exponent 2 = 4", () =>
// {
//   expect(Number(1).toExponential(0)).toBe(1)
// })


// dollar has value
// euro has value?
// test(`dollar has value`, () =>
// {
//   let dollar = Money.Dollar(10);
//   let dollarNew = Money.Dollar(15)
//   expect(
//     dollar.value
//   ).toBe(10)
//   expect(
//     dollarNew.value
//   ).toBe(15)
// })

// test('euro has value', () =>
// {
//   let euro = Money.Euro(10)  // Creates a object
//   let euroTwo = Money.Euro(15)
//   expect(euro.value).toBe(10)
//   expect(euroTwo.value).toBe(15)
// })