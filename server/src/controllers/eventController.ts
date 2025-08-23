import { Request, Response } from 'express';
import { IEvent } from '../models/typeModels.js';
import model from '../models/models.js';


class EventController{
    async receipt(req: Request, res: Response<IEvent>) {
        try{
            const events = await model.Event.findAll() 
            return res.json(events as unknown as IEvent)
        } catch(error){
            console.error('Ошибка получения', error)
        }
    }

    async adder(req: Request, res: Response<IEvent>){
        try{
            const { title, description } = req.body 
            const events = await model.Event.create({ title, description })
            return res.json(events as unknown as IEvent)
        } catch(error){
            console.error('Ошибка добавления', error)   
        }
    }
}

export default new EventController()