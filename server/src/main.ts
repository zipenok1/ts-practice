require('dotenv').config()
import express from 'express'
import sequelize from './db'
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(5000, () => {console.log('server start')})
    } catch(error: any){
        console.log(error);
    }
}

start()