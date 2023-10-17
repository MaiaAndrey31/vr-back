import Sequelize, {Model} from 'sequelize'



class Product extends Model {
    static init(sequelize){
        super.init({
            id: Sequelize.NUMBER,
            description: Sequelize.STRING,
            cost_price: Sequelize.DECIMAL,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL,
                get(){
                    return `http://localhost:3000/product-file/${this.path}`
                },
            },
        },
         {
            sequelize
        }
        )
    }

}

export default Product
