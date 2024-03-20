
// Connect to SQL Azure Server.
// install tedious and sequelize


// import { Sequelize } from 'sequelize'
const { Sequelize, DataTypes, Model, json } = require(`sequelize`)  // is exporting the model?

// Options - sequelize has options - Read the documents
// Most perfered option: JSON


const database = "";

// Database is not server. Host is server IP.
const sequelize = new Sequelize("DatabaseName", "User", "Password", {
    dialect: "mssql",
    host: "ServerIP",
    //port: 1433,
    options: {
        encrpyt: true
    }
})  // Contains database authentication information


async function main(){
    try{
        await sequelize.authenticate()
        console.log("Connection established!!!")
    } catch (error){
        console.error("Unable to connection to database", error)
    } 
    sequelize.close()
}  // Connects to the database

// main()


class Product extends Model{  // Extends - Inheritance. Children gain access to fields and methods.

}  // Makes class with inheritence of Model class.

Product.init(  // init is method of  Model. 
    {
        product_id:{
            type: DataTypes.INTEGER,
            allowNull: false,  // This must be accurate. Otherwise it will crash.
            primaryKey: true
        },
        product_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product_price:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        product_rating:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_info:{
            type: DataTypes.STRING,
            allowNull: false
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "Product",
        timestamps: false
    }
)

class Basket extends Model{
    
}

Basket.init(
    {
        basket_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        destination: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ordered: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: "Basket",
        timestamps: false,
        freezeTableName: true
    }
)

class Account extends Model{

}

Account.init(
    {
        account_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "Account",
        timestamps: false,
        freezeTableName: true // This will stop the table names from becoming plural, and making it difficult to find the table.
    }
)
// For Foriegn keys, look up associations in Model.

let account = new Account({account_id : 1, first_name : "Steve", last_name: "Example", email: "SteveOne@example.com", phone: Number("000111222")})

let basket = new Basket({basket_id: 1, product_id: 1, account_id: 1, amount: 2, destination: "postcode", ordered: true})

let product = new Product({product_id: 1, product_name: "Example", category: "Science", product_price: 15.50, product_info: "its an example", stock: 50})  // Has to be passed as key pair values.

const test = async () => {
    let table = await Account.findAll()
    console.log(table)
}

// Will select all the products from datatable.
const getproducts = async () =>
{
    const myProduct = await sequelize.query(`SELECT * FROM dbo.Products`,
    {
        Model: Product,
        mapToModel: true
    })
    console.log(myProduct)
}


const convertProductToModel = (Sql) => {
    // convert to json
    return new Product({
        product_id: Sql.product_id, 
        product_name: Sql.product_name, 
        category: Sql.category, 
        product_price: Sql.product_price, 
        product_info: Sql.product_info, 
        stock: Sql.stock})
}

const packProducts = (sqlProducts) => {
    let all_products = []
    for(let i = 0; i < sqlProducts[0].length; i++)
    {
        // all_products[i] = sqlProducts[i]
        // console.log(sqlProducts[i])
        all_products.push( {
            ID: sqlProducts[0][i].product_id,
            Name: sqlProducts[0][i].product_name ,
            Category: sqlProducts[0][i].category,
            Price: sqlProducts[0][i].product_price,
            Info: sqlProducts[0][i].product_info,
            Stock: sqlProducts[0][i].stock
        } )
    }
    return all_products
}

const products = async () =>{
    const sqlProducts = await sequelize.query(`Select * From dbo.Products`,
    {
        Model: Product,
        mapToModel: true
    })
    let all_products = packProducts(sqlProducts)
    // console.log(sqlProducts)
    console.log(all_products)
    return all_products
}

const baskets = async () => {
    const sqlBasket = await sequelize.query(`SELECT * FROM dbo.Basket`,
    {
        Model: Basket,
        mapToModel: true
    })
    let all_baskets = []
    for (let i = 0; i < sqlBasket.length; i++){
        all_baskets[i] = sqlBasket[i]
    }
    return all_baskets
}



const accounts = async () => {
    const sqlAccount = await sequelize.query(`SELECT * FROM dbo.Account`,
    {
        Model: Account,  // Called an Option
        mapToModel: true
    })
    let all_account = []
    for(let i = 0; i < sqlAccount.length; i++){
        all_account[i] = sqlAccount[i]
    }
    return all_account
}

const searchSQLProductsByName = async (name) => {
    const sqlProducts = await sequelize.query(`Select * From dbo.Products Where product_name Like '%${name}%'`,
    {
        Model: Product,
        mapToModel: true
    })
    let all_products = packProducts(sqlProducts)  // Destructures and assigns new keys.
    // console.log(sqlProducts)
    console.log(sqlProducts)
    return all_products
}

const searchProductsByCategory = async (category) => {
    const sqlSearch = await sequelize.query(`Select *
                                            From dbo.Products
                                            Where dbo.Products.category = '%${category}%'`
    )
    let all_products = packProducts(sqlSearch)
    // console.log(sqlProducts)
    console.log(all_products)
    return all_products
}

// const searchSQLProductsByID = async (ID) => {
//     const sqlproducts = await sequelize.query(`Select * From dbo.Products where product ID = '${ID}'`,
//     {
//         Model: Product,
//         mapToModel: true
//     })
//     return sqlproducts[0]
// }


const LoadBasketInfo = async (ID) => {  // This should be able to return the basket based on basket ID.
    console.log(ID) 
    
    const sqlproducts = await sequelize.query(
        `Select 
            dbo.Products.product_name, 
            dbo.Products.product_price,
            dbo.Products.product_info,
            dbo.Products.stock,  
            dbo.Basket.amount
        From dbo.Products
        Inner Join dbo.Basket ON dbo.Basket.product_id = dbo.Products.product_id
        Where dbo.Basket.basket_id = ${ID}`,
    {
        Model: Product,
        mapToModel: true
    })
    return sqlproducts[0]
}


// const searchBasket = async (id) => {
//     const sqlBasket = await sequelize.query(`Select * From dbo.Basket Where basket_id = ${id}`,  // This could be one query without "searchSQLProductByID"
//     {
//         Model: Basket,
//         mapToModel: true
//     })

//     let items = []
//     for(let i = 0; i < sqlBasket[0].length; i++){
//         items.push(searchSQLProductsByID(
//             ID,
//             account_id,
//             product_id
//         ))  // Gets the product from its ID and add them to items list.
//     }
//     return items
    // return sqlBasket[0]  // Only gets index 0
//}

const createNewProduct = async (name, category, price, rating, info, stock) => {
    const sql = await sequelize.query(`Insert INTO dbo.Products(
        product_name, 
        category, 
        product_price, 
        product_rating, 
        product_info, 
        stock)
        Values(${name}, ${category}, ${price}, ${rating}, ${info}, ${stock});`,
        {
            Model: Product,
            mapToModel : true
        })
    return (sql)
}


products()

const express = require(`express`)  // Dependency of request, make sure its downloaded. This line ensures that the code has it.
const cors = require(`cors`)  // Cross origin resource sharing - Some may need this, Some wont.
const port = 3001  // Ports - Where different information travels through. 
const app = express()
app.use(express.static(`server`))  // Allows Cross.Origin.Resource.Sharing CORS
app.use(cors())

// promise can return ok or not ok. promise something when you dont know how long it will take to get a response.
// Closure - Use varialves from within scopes. app.get first variable is always the request, and the second is always response.
// Destructuring - declaring two variables so that we can use them. app.get gets to things, so it can be divided into two variables.

app.get(`/product`, (req, res) =>{
    products().then(result => res.json(result))  // Calls products( creates a promise ) then the promise result is turned into JSON.
})

app.get(`/basket`, (req, res) =>{
    baskets().then(result => res.json(result))  
} )

app.get(`/account`, (req, res) =>{
    accounts().then(result => res.json(result))
})

// http://localhost:3001/product/the
app.get(`/product/:name/`, (req, res) => {  // when we pass a parameter, we use :parameterName
    searchSQLProductsByName(req.params.name).then(result => res.json(result))
    // res.send(req.params)
})  // Sends request to function, then formats the results as json and sends as response.

app.get(`/product/category/:category`, (req, res) => {
    searchProductsByCategory(req.params.category).then(result => res.json(result))
})


// app.get(`/product/:name/:year`)

// app.get(`/basket/:id/`, (req, res) => {
//     // res.send(req.params)
//     LoadBasketInfo(req.params.id).then(result => res.json(result))
// })


const pushOrder = async ({order, basket}) => {
    console.log(order.name)

    for(let i = 0; i < basket.length; i++){
        var item = basket[i]
        console.log(tar.ID)
        const push = await sequelize.query(
        `Insert into 
        dbo.Basket(
            basket_id, product_id, account_id, amount, destination, ordered,fname,lname,email) 
        Values(
            ${order.order_ID}, ${item.ID}, ${null}, ${item.quantity}, ${order.post_code},${1},${order.name},${order.surname},${order.email})`
        )
    }
    return "Success"
}


app.get(`/basket/:basket/:order/`, (req, res) => {  // Might need to be broken down into single variables to understand whats wrong.
    pushOrder(req.params.order, req.params.basket)
})

// app.post(`/basket/:basket/:order/`, function (req, res))

app.post(`/createbook/:product_name/:category/:product_price/:product_rating/:product_info/:stock`), () =>{
    console.log(req.params)
    console.log(req.params.product_name)
    // Create new book query.
    createNewProduct(
        req.params.product_name,
        req.params.category, 
        req.params.product_price, 
        req.params.product_rating, 
        req.params.product_info, 
        req.params.stock).then(result => console.log(result), res.json(result))
}  // This creates a new record within the database.

// We need to tell our machine to listen to ports.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)  // Needs to be on localhost:{port number}
})


// app.get('/hello', (req, res) => {  // If local host recieves a request at /hello, res
//     res.send('<h2>Hello World!</h2>')
// })



// 4 different server requests: get, post, put, delete.


