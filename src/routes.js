import { Router } from "express";
import multer from 'multer'
import multerConfig from "./config/multer";
import ProductController from './app/controller/ProductController.js'

const routes =  Router()
const upload = multer(multerConfig)


 routes.get('/produtos', (req, res) => {
    return res.send("rodando servidor ok")
})

routes.post('/products', upload.single('file'), ProductController.store)
// routes.get('/products', ProductsController.index)
// routes.put('/products/:id', upload.single('file'), ProductsController.update)


export default routes