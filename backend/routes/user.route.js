import { registerUser } from "../controllers/user.controller.js";
import { Router } from "express";

const router=Router()

router.route('/signup').post(registerUser)

export default router