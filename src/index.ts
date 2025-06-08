
import express from "express"
import { connectMongodb } from "./config/connectDB"
import { bookRouter } from "./routes/libraryRoutes"
process.loadEnvFile()

const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use("/api/books", bookRouter)

app.listen(PORT, () => {
    console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
    connectMongodb()
})

