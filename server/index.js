import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { ChatCompletionResponseMessageRoleEnum } from 'openai'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/', async (req, res) => {
    res.send('Hello, World!')
})

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
})