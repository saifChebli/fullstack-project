import mongoose from 'mongoose'

const jobschema = mongoose.Schema({
    // user:{
    //     required : true ,
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref :"User"
    // },
    title: { type: String, required: true }, 
    description: String,
    salary_from: Number,
    salary_to: Number,
    job_category : String 
    

}, { timestamps: true })


export default mongoose.model("Jobs", jobschema)