import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './Context/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>   
  </React.StrictMode>
);









// export class Money{
//   constructor(value, currency){
//     this.value = value
//     this.currency = currency
//   }
//   static Dollar(value){  // Static methods are a method that can be called from anywhere within the program, not just within the class. Creating a new class wont change it.
//     return new Money(value, "usd")
//   }
//   static Euro(value){
//     return new Money(value, "eur")
//   }
// }

// export class items{
//   constructor(product_id : Number,
//               name : String,
//               author : String,
//               category : String,
//               publisher : String,
//               synopsis : String,
//               stock : Number,
//               price : String,
//               sale : Number){
//     this.product_id = product_id
//     this.name = name
//     this.author = author
//     this.category = category
//     this.publisher = publisher
//     this.synopsis = synopsis
//     this.stock = stock
//     this.price = price
//     this.sale = sale
//   }
// }

// export class rating{
//   constructor(review_id, product_id, account_id, rating, comment){
//     this.review_id = review_id
//     this.product_id = product_id
//     this.account_id = account_id
//     this.rating = rating
//     this.comment = comment
//   }
// }

// export class basket{
//   constructor(basket_id, product_id, account_id, amount, destination, ordered, postage){
//     this.basket_id = basket_id  // int
//     this.product_id = product_id  // int
//     this.account_id = account_id  // int
//     this.amount = amount  // int
//     this.destination = destination // str
//     this.ordered = ordered  // bool
//     this.postage = postage  // int
//   }
// }

// export class postage{
//   constructor(service_id, postage_name, postage_cost, postage_info){
//     this.service_id = service_id
//     this.postage_name = postage_name
//     this.postage_cost = postage_cost
//     this.postage_info = postage_info
//   }
// }

// export class account{
//   constructor(account_id, email, password, first_name, last_name, phone){
//     this.account_id = account_id
//     this.email = email
//     this.password = password
//     this.first_name = first_name
//     this.last_name = last_name
//     this.phone = phone
//   }
// }


// class dog{
//   constructor(name, age){
//     this.name = name
//     this.age = age
//   }
// }

// let doggyOne = new dog("Fido", 13)
// let doggyTwo = new dog("Luke", 9)
// let doggyThree = new dog("Spanner", 4)

// let DogArrayUnfiltered = [doggyOne, doggyTwo, doggyThree]
// let DogArrayFiltered = DogArrayUnfiltered.filter(x => x.name != "Fido")

// let findADog = DogArrayUnfiltered.find(x => x.name === doggyOne.name)  // Finds the value with the name.
// // console.log(findADog)

// // console.log(DogArrayFiltered)


// let unfiltered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let filtered = unfiltered.filter(x => x % 2 === 0)
// // console.log(filtered)

// let double = unfiltered.map(x => x*2)
// // console.log(double)

// let threash_hold = 20
// const Err = (val) => val < threash_hold
// let isError = unfiltered.every(Err)
// // console.log(isError)  // True

// threash_hold = 2
// isError = unfiltered.every(Err)
// // console.log(isError)  // False

// // console.log(unfiltered.includes(2))  // True
// // console.log(unfiltered)
// // console.log(unfiltered.reverse())
// // console.log(unfiltered, unfiltered.reverse())  // Prints the same.

// // // product_id, name, author, category, publisher, synopsis, stock, price
// // let itemOne = new items(0, "book1", "Mike", "IT", "Packt", "Example", 1, "£15", 0)
// // let itemTwo = new items(1, "book2", "Mike", "IT", "Packt", "Example", 1, "£10", 33)

// // const onSale = x =>  x.sale > 0
// // console.log(onSale(itemOne))  // False
// // console.log(onSale(itemTwo))  // True


// /*
// all sql
// for(x = 0; i < len)
// for(i = 0; i < length(sql); i++){
//   sql[i]
// }
// */



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();