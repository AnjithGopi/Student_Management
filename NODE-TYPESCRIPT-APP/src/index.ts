import express, { Application, Request, Response, Router } from "express";
import mongoose from "mongoose";
import router from "./routes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URL = "mongodb://127.0.0.1:27017/TYPESCRIPT_CRUD_APP";

mongoose.connect(MONGO_URL).then(()=>{
  console.log("Connected to MongoDB");
})
.catch((error)=>{

  console.log("Error in connection",error.message)

})

app.use("/", router);

app.listen(4000, () => {
  console.log("Server is running on port http://localhost:4000");
});
