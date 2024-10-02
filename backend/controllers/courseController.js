import Course from "../models/CourseModel.js";
const createCourse = async (req, res) => {
    try {
        const {title, description, createdBy, category,thumbnail} = req.body;
        const courseExists = await Course.findOne({title});
        if(courseExists){
            return res.status(400).json({success:false,message:"Course title already exists"});
        }

        const newCourse = new Course({
            title,
            description,
            createdBy,
            category,
            thumbnail,
        });
        await newCourse.save();
        res.status(201).json({
            success: true,
            message: "Course created successfully",
            course: newCourse,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
}
const getAllCourses = async (req, res)=>{
    try {
        const courses = await Course.find({});
        res.status(200).json({success:true,courses});
    } catch (error) {
        res.status(500).json({success:false,message:"Server Error",error:error.message});
    }
};



export {createCourse,getAllCourses};