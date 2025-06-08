import { Router } from "express"
import { getAllBooks, getBookById } from "../controllers/libraryControllers"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)

bookRouter.get("/:id", getBookById)

export { bookRouter }
