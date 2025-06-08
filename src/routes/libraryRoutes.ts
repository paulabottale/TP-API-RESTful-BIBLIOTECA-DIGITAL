import { Router } from "express"
import { getAllBooks } from "../controllers/libraryControllers"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)

export { bookRouter }
