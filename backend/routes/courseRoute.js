import express from "express";
import { createCourse,getAllCourses } from "../controllers/courseController.js"
const router = express.Router();
router.post("")
router.post("/create", createCourse);
router.get("/allcourses",getAllCourses)
export default router;