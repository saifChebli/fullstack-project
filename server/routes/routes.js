import express from 'express';
import { deleteJobs, getAllJobs, getJobs, setJobs, updateJobs } from '../controllers/jobCtrl.js';
import { GetProfile, getUsers, login, signUp } from '../controllers/userCtrl.js';
import { protect } from '../middelware/userAuth.js';


// Jobs Route
const router = express.Router()
// get
router.get("/jobs", protect ,getJobs);
router.get("/get-jobs" ,getAllJobs);
// add
router.post("/add-jobs", protect,setJobs);
// update
router.put("/update-job/:id",protect, updateJobs);
// delete
router.delete("/delete-job/:id",protect, deleteJobs);

// User Route
router.post("/register", signUp );
router.post("/login", login );
router.get("/profile" ,protect,GetProfile );
router.get("/get-users" , getUsers)



export default router