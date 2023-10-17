import * as Yup from 'yup'

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
}
}

export default new ProductController()