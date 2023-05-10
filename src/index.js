const express =  require('express');
const mongoose = require("mongoose"); 
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const cors = require('cors') 
const app = express();  
const Door = process.env.PORT || 8080

const productsRoute = require("./routers/products_");
const brandRoute = require("./routers/brand_");
const stateRoute = require("./routers/state_");
const formsRoute = require("./routers/forms_");

// middleware
app.use(cors());
app.use(express.json());
app.use('/Api', productsRoute);
app.use('/Api', brandRoute);
app.use('/Api', stateRoute);
app.use('/Api', formsRoute);

// routers 
app.get('/', (req, res) =>{
    res.send('welcome to my Api Jc4milo ');
 })

// cnoncetion
mongoose.connect(process.env.KEY_URI)
.then(()=> console.log("Connected a database Atlas"))
.catch((error)=> console.error(error));

app.listen(Door, () => console.log("All is okay... door ", Door));

