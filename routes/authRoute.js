import express  from "express";
import {registerController,loginController} from "../controllers/authController.js"

// route object
const router = express.Router()


// routing
// register route
router.post('/register',registerController)

// login route
router.post('/login',loginController)


export default router;