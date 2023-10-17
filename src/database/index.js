import  Sequelize  from "sequelize"

import Product from "../app/model/Products"

import configDatabase from '../config/database'
import Store from "../app/model/Stores"

const models = [Product, Store]

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