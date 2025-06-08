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


export { getAllBooks }