import express from "express";
import connectToMongoose from './config/dbConfig.js'
import jobsRoutes from './routes/routes.js'
import cors from 'cors'
const port = process.env.port;


const app = express();
app.use(express.json());
app.use(cors())

app.use("/api", jobsRoutes);

connectToMongoose();


    app.listen(port, () => {
        console.log(`server running on port ${port}`);
    });
