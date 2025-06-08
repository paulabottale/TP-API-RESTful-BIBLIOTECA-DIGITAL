import { Router } from "express"
import { getAllBooks, getBookById, createBook } from "../controllers/libraryControllers"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)

bookRouter.get("/:id", getBookById)

bookRouter.post("/", createBook)

export { bookRouter }
