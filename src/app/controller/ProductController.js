import * as Yup from 'yup'
import Product from '../model/Products'
class ProductController {
    async store(req, res) {

        const schema = Yup.object().shape({
                id: Yup.number().required(),
                description: Yup.string().required(),
                cost_price: Yup.number().required(),
               

        })

       try{
        await schema.validateSync(req.body, {abortEarly: false})
       } catch (err) {
        return res.status(400).json({error: err.errors})
       }

       const {filename:path} = req.filename
       const {id, description, cost_price} = req.body

       const product = await Product.create({
        id,
        description,
        cost_price,
        path,
       })

       return res.json(product)
}

async index(req, res){
    const products = await Product.findAll()

    return res.json(products)
}

async update(req, res) {

    const schema = Yup.object().shape({
            id: Yup.number().required(),
            description: Yup.string().required(),
            cost_price: Yup.number().required(),
           

    })

   try{
    await schema.validateSync(req.body, {abortEarly: false})
   } catch (err) {
    return res.status(400).json({error: err.errors})
   }


   const {id} = req.params
    
const product = await Product.findByPk(id)

if(!product){
  return res.status(401).json({error: 'Produto não existe!'})
}

let path
if(req.file){
  path = req.file.filename
}


const { _id, description, cost_price,} = req.body

await Product.update({
    _id, description, cost_price,
},


{
  where:{id}
}
)

return res.status(200).json( )
}

}



export default new ProductController()