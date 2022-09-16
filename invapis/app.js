require('dotenv').config();
require('./db/db')

const express = require('express')
const invRouter = require('./routers/invapi')
const port = process.env.PORT
//const mongoString = process.env.DATABASE_URL;

const cors = require('cors');


const app = express()
app.use(cors());
app.options('*', cors());
app.use(express.json())
app.use(invRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})




