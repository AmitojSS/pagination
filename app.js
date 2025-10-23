import connectDB from "./config/db.js"
import router from "./routes/userRoutes.js"
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use("/api/users", router);

const port = 3000;

app.listen(port,() =>
{
    console.log("Server Started");
}
);