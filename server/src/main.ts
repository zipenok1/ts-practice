import 'dotenv/config'
import express from 'express'
import fileUpload from 'express-fileupload'
import path from 'path'
import sequelize from './db.js'
import './models/models.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))

const start = async () => {
    try {
      await sequelize.authenticate()
      await sequelize.sync({ alter: true })
      app.listen(5000, () => { console.log('server start') });
    } catch(error: any) {
      console.log('Error:', error);
    }
  }

start()