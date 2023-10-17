import  Sequelize  from "sequelize"

import Product from "../app/model/Products"

import configDatabase from '../config/database'

const models = [Product]

class Database {
    constructor(){
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase)
        models.map((model) => model.init(this.connection))
    }
}

export default new Database