import multer from 'multer'
import {v4} from 'uuid'
import {extname, resolve} from 'path'
import { request } from 'express'

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (request: any, file: any, callback: (arg0: null, arg1: any) => void) => {
        callback(null, v4() + extname(file.originalname))}
    }),
}