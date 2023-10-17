import * as Yup from 'yup'
import Store from '../model/Stores'

class StoreController {
    async store(req, res) {

        const schema = Yup.object().shape({
                id: Yup.number().required(),
                description: Yup.string().required(),
                
               
               

        })

       try{
        await schema.validateSync(req.body, {abortEarly: false})
       } catch (err) {
        return res.status(400).json({error: err.errors})
       }

       
       const {id, description} = req.body

       const store = await Store.create({
        id,
        description,
        
       })

       return res.json(store)
}

async index(req, res){
    const stores = await store.findAll()

    return res.json(stores)
}
}

export default new StoreController()