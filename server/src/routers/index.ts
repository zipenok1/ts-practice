import { Router } from 'express'
import event from './user/eventRouter.js'

const router = Router() 

router.use('/event', event)


export default router