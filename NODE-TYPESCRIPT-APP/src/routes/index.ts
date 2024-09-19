import express, { Request, Response } from "express";
import studentController from "../controllers/studentController";

const router = express.Router();

router.get("/student/:id", studentController.getStudent);
router.post("/student", studentController.createStudent);
router.get("/student", studentController.getAllStudent);
router.put("/student/:id", studentController.updateStudent);
router.delete("/student/:id", studentController.deleteStudent);

export default router;
