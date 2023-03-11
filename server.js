const express = require('express');
const dotenv = require('dotenv').config({path:'../.env'})

const cors = require('cors');
const port = 8000 || process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended: true}));
require("./config/mongoose.config");
require("./routes/buda.routes")(app);
app.listen(port, ()=> {console.log('you are now on port ' + port)});