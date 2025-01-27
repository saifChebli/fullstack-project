import express from 'express'
import Jobs from '../jobsmodel/Job.js'

export const getJobs = async(req,res) => {
    try {
        const jobs = await Jobs.find({user : req.user.id})
        res.status(200).json(jobs)
    } catch (error) {
        console.log(error)
        res.status(500).json({message : 'Internal Server Error'})
    }
}

export const getAllJobs = async(req,res) => {
  try {
      const jobs = await Jobs.find()
      res.status(200).json(jobs)
  } catch (error) {
      console.log(error)
      res.status(500).json({message : 'Internal Server Error'})
  }
}

export const setJobs = async (req, res) => {
    const {title ,description ,job_category ,salary_to ,salary_from} = req.body
    try {
        const Job = new Jobs({user : req.user.id ,title ,description ,job_category ,salary_to ,salary_from })
        await Job.save()
     res.status(201).json({message : 'Job Created' , Job});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateJobs = async (req, res) => {
    const id = req.params.id;
    const job = req.body
  try {
    const Job =  await Jobs.findOneAndUpdate({_id : id} , job);
    res.status(200).json({ message: "Job Updated", Job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteJobs = async (req, res) => {
    const id = req.params.id;
  try {
    const Job = await Jobs.deleteOne({_id : id});
    res.status(201).json({ message: "Job Deleted", Job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};