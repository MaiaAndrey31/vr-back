import { Router } from "express";

const routes =  Router()



 routes.get('/produtos', (req, res) => {
    return res.send("rodando servidor ok")
})

// routes.post('/products', upload.single('file'), ProductsController.store)
// routes.get('/products', ProductsController.index)
// routes.put('/products/:id', upload.single('file'), ProductsController.update)


export default routes