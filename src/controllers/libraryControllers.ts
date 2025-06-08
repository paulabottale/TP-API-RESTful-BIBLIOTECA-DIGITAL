import { Book } from "../models/bookModels"
import { Request, Response } from "express"

const getAllBooks = async ( req: Request, res: Response): Promise <any> => 
    {
    try {
        const books = await Book.find()
        return res.json({
            succes: true,
            data: books,
            message: "Recuperando todos los libros"
        })
    } catch (error:any) {
        return res.json({
            succes: false,
            error: error.message
        })        
    }
}

const getBookById = async ( req: Request, res: Response): Promise <any> => {
    const id = req.params.id
    try {
        const findBook = await Book.findById(id)
        if(!findBook) return res.status(404).json({ succes: false, message: "Libro no encontrado"})
        return res.json({ succes: true, data: findBook, message: "Libro encontrado por su id"})
    } catch (error: any) {
        return res.status(500).json ({ succes: false, message: error.message})        
    }
}


export { getAllBooks, getBookById }