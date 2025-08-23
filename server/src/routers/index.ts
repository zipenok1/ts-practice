import { Router } from 'express'
import event from './user/eventRouter.js'
import photo from './user/photoRouter.js'

const router = Router() 

router.use('/event', event)
router.use('/photo', photo)

export default router