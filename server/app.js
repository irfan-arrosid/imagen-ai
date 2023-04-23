import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './db/database.js'
import postRoutes from './routes/postRoutes.js'
import imaginRoutes from './routes/imagenRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/posts', postRoutes)
app.use('/api/v1/imagin', imaginRoutes)

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