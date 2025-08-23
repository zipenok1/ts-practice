import { Router } from 'express'
import photoController from '../../controllers/photoController.js'

const router = Router()

router.post('/', photoController.adder)

export default router