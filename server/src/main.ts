import 'dotenv/config'
import express from 'express'
import sequelize from './db.js'
import cors from 'cors'

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