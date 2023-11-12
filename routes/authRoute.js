import express  from "express";
import {registerController,loginController,testController} from "../controllers/authController.js"
import { IsAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// route object
const router = express.Router()


// routing
// register route
router.post('/register',registerController)

// login route
router.post('/login',loginController)

// test route
router.get('/test',requireSignIn,IsAdmin , testController)


export default router;