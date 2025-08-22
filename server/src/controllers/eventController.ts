import { Request, Response } from 'express';
import { IEvent } from '../models/typeModels.js';
import model from '../models/models.js';

class EventController{
    async receipt(req: Request, res: Response<IEvent>) {
        const events = await model.Event.findAll() 
        return res.json(events as unknown as IEvent);
    }
}

export default new EventController()