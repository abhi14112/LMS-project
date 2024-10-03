import express from "express";
import protectRoute from "../middlewares/protectRoute.js"
import { createCourse,getAllCourses } from "../controllers/courseController.js"
const router = express.Router();
router.post("")
router.post("/create",protectRoute, createCourse);
router.get("/allcourses",protectRoute,getAllCourses)
export default router;