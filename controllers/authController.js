import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import  JWT  from "jsonwebtoken"

export const registerController = async (req,res) =>{
    try{
        const {name,email,password,phone,address} = req.body
        // validation
        if(!name){
            return res.send({message:'Name is required'})
        }
        if(!email){
            return res.send({message:'Email is required'})
        }
        if(!password){
            return res.send({message:'Password is required'})
        }
        if(!phone){
            return res.send({message:'Phone Number is required'})
        }
        if(!address){
            return res.send({message:'Address is required'})
        }

        // existing user
        const existingUser = await userModel.findOne({email:email})

        if(existingUser){
            return res.status(200).send({
                success:false,
                message:"Already Register Please login"
            })
        }

        // register user
        const hashedPassword = await hashPassword(password)
        // save
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()

        res.status(200).send({
            success:true,
            message:'User Register Successfully',
            user
        })

    }catch(message){
        console.log(message)
        res.status(500).send({
            success:false,
            message:"Error in registration",
            message:message
        })
    }
}

// login 
export const loginController = async (req,res) =>{
     try{
        const {email,password} = req.body;
        if(!email || !password){
            res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        // check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not register"
            })
        }

        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }

        // token generate
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn:"7d"
        })
        res.status(200).send({
            success:true,
            message:"Login successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token:token
        })

     }catch(message){
        // console.log(message)
        res.status(500).send({
            success:false,
            message:"Error in login",
            message:message
        })
     }
}


// test
export const testController = (req,res) =>{
    res.send("test controller")
}