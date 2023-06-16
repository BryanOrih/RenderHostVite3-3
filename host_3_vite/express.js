import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const server = express()
const port = 3006

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

server.use(express.static(path.join(__dirname, '/dist')))

server.listen(port, ()=>{
    console.log("SUCESSESSSSSSS")
})