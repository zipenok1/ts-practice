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

    async delete(req: Request, res: Response){
        try{
            const {id} = req.params
            if (!id) return res.json({message: 'Такого id не существует'})
            
            const events = await model.Event.findOne({ where: {id_event: id} })
            if(!events) return res.json({message: 'Такого элемента нет'})
            
            await model.Event.destroy({ where: {id_event: id} })
            return res.json({message: 'Событие успешно удалено'})
        } catch(error){
            console.error('Ошибка удаления', error);
        }
    }
}

export default new EventController()