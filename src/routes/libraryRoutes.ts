import { Router } from "express"
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/libraryControllers"

const bookRouter = Router()

bookRouter.get("/", getAllBooks)

bookRouter.get("/:id", getBookById)

bookRouter.post("/", createBook)

bookRouter.patch("/:id", updateBook)

bookRouter.delete("/:id", deleteBook)

export { bookRouter }
