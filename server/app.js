import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './db/database.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', async (req, res) => {
    res.send('Hello, World!')
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(3000, () => {
            console.log('Server listening on http://localhost:3000');
        })
    } catch (error) {
        console.log(error);
    }
}

startServer()