
import express from "express"
import { connectMongodb } from "./config/connectDB"
process.loadEnvFile()

const PORT = process.env.PORT

const app = express()
app.use(express.json())


app.listen(PORT, () => {
    console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
    connectMongodb()
})

