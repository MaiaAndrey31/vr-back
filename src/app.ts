import express from 'express'
import cors from 'cors'
import routes from './routes'
import {resolve} from 'path'


class App{ 


    public express: express.Application 

    public constructor () {
        this.express = express()
        this.middlewares()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use('/product-file', express.static(resolve(__dirname, '..', 'uploads'))
        )
        this.express.use(cors())
    }
    private routes (): void {
        this.express.use(routes)
    }
}


export default new App().express