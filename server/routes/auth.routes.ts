import { Router } from "express";
import {loginHandler} from '../controllers/auth.controller'

const router = Router()

router.post('/login',loginHandler )

router.get('/profile')

export default router