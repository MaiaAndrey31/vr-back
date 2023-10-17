import { Router } from "express";
import multer from 'multer'
import multerConfig from "./config/multer";
import ProductController from './app/controller/ProductController.js'
import StoreController from "./app/controller/StoreController";

const routes =  Router()
const upload = multer(multerConfig)


 routes.get('/', (req, res) => {
    return res.send("rodando servidor ok")
})

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.get('/store', StoreController.index)
routes.post('/store', StoreController.store)


export default routes