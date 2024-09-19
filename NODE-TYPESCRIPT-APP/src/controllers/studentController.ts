import express, { Request, Response } from "express";
import { studentModel } from "../db/studentSchema";

class StudentController {
  getAllStudent = async (req: Request, res: Response) => {
    try {
      const students = await studentModel.find();
      return res.status(200).json({ data: students });
    } catch (error) {
      return res.status(400);
    }
  };

  getStudent = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findById(id);
      return res.status(200).json({ data: student });
    } catch (error) {
      return res.status(400);
    }
  };

  createStudent = async (req: Request, res: Response) => {
    try {
      const { name, email, phone, department } = req.body;
      const student = new studentModel({ name, email, phone, department });
      await student.save();
      return res
        .status(200)
        .json({ message: "Created Successfully", data: student });
    } catch (error) {
      return res.status(400);
    }
  };

  updateStudent = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, email, phone, department } = req.body;

      const student = await studentModel.findById(id);

      if (student) {
        (student.name = name),
          (student.email = email),
          (student.phone = phone),
          (student.department = department);
        await student.save();

        return res
          .status(200)
          .json({ message: "Updated Successfully", data: student });
      }

      return res.status(400);
    } catch (error) {
      return res.status(400);
    }
  };

  deleteStudent = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findByIdAndDelete(id);

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      return res
        .status(200)
        .json({ message: "Deleted Successfully", data: student });
    } catch (error) {
      return res.status(400);
    }
  };
}

export default new StudentController();
