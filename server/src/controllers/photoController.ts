import { Request, Response } from 'express';
import { IPhoto } from '../models/typeModels.js';
import { __dirname } from '../utils/paths.js';
import { UploadedFile } from 'express-fileupload';
import model from '../models/models.js';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs'

class PhotoController {
    async adder(req: Request, res: Response) {
        try {
            if (!req.files || !req.files.link_img) return res.json({ error: 'Файл не был загружен' })

            const link_img = req.files.link_img as UploadedFile
            
            const fileExtension = path.extname(link_img.name)
            const fileName = uuidv4() + fileExtension
            
            const staticPath = path.resolve(__dirname, 'static')
            
            if (!fs.existsSync(staticPath)) fs.mkdirSync(staticPath, { recursive: true })

            const filePath = path.join(staticPath, fileName)
            await link_img.mv(filePath)

            const photo = await model.Photo.create({ 
                link_img: fileName 
            })
            return res.json(photo as unknown as IPhoto)

        } catch(error) {
            console.error('Ошибка добавления', error)
        }
    }
}

export default new PhotoController();