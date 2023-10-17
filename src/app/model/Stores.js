import Sequelize, {Model} from 'sequelize'



class Store extends Model {
    static init(sequelize){
        super.init({
            id: Sequelize.NUMBER,
            description: Sequelize.STRING,
            
        },
         {
            sequelize
        }
        )
    }

}

export default Store
