import { Router } from 'express'
import eventController from '../../controllers/eventController.js'

const router = Router()

router.get('/', eventController.receipt)

export default router