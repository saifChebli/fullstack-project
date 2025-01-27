import JWT from 'jsonwebtoken'
import User from '../jobsmodel/User.js'


export const protect = async (req , res , next)=>{
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            // Get Token
            token = req.headers.authorization.split(' ')[1]

            //Verify Token 
            const decoded = JWT.verify(token , process.env.JWT_secret)

            // Check / Find User
            req.user = await User.findById(decoded.id).select("-password")

            next()
        } catch (error) {
            return res.status(400).json({message : 'No authorized' })
        }
    }
    if(!token){
        return res.status(400).json({message : 'No token found'})
    }
}



