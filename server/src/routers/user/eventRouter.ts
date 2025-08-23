import { Router } from 'express'
import eventController from '../../controllers/eventController.js'

const router = Router()

router.get('/', eventController.receipt)
router.post('/', eventController.adder)
router.delete('/:id', eventController.delete)

export default router