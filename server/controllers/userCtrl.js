import User from "../jobsmodel/User.js"
import validator from 'validator'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    const { fullName, email, password } = req.body
    console.log(fullName)
    try {
        const existUser = await User.findOne({ email })
        if (existUser) {
           return res.status(400).json({ message: "Bad request" });
        }
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });

        }
        if (!validator.isEmail(email)) {
           return res.status(400).json({ message: "Invalid Email" });

        }
        if (!validator.isLength(password , {min : 8})) {
           return res.status(400).json({ message: "Invalid Password" });
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ fullName, email, password: hashedPassword })
        await newUser.save()

       return res.status(201).json({
            id : newUser._id,
            email :newUser.email,
            fullName : newUser.fullName,
            token : GenerateToken(newUser._id)
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export const login = async (req, res) => {
    const {email , password} = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
          return res.status(400).json({ message: "Invalid email or password" });
          
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        if (isMatch) {
        return res.status(200).json({
            id : user._id ,
            email : user.email ,
            fullName : user.fullName ,
            token : GenerateToken(user._id)});
        }
    } catch (error) {
        console.log(error)
       return res.status(500).json({ message: "Internal Server Error" });

    }
};

export const GetProfile = (req,res)=>{
    const { email , fullName , _id } = req.user

    return res.status(200).json({
        id : _id,
        fullName,
        email
    })

}

export const getUsers = async (req,res) => {
     try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
            res.status(500).json({message : 'Internal Server Error'})
        }
}

const GenerateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_secret , {expiresIn:'1d'})
}