import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minLength: [5, "title must be  atleast 5 character long"],
        maxLength: [50, "title should be less than 50 character"],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minLength: [8, "description must be atleast 8 character long"],
        maxLength: [500, "description should be less than 500 character"],
    },
    category: {
        type: String,
        required: [true, "category is required"],
    },
    numberOfLectures: {
        type: Number,
        default: 0,
    },
    thumbnail: {
        public_id: {
            type: String,
            default:""
        },
        secure_url: {
            type: String,
            default:""
        },
    },
    lectures: [
        {
            name: String,
            description: String,
            lecture: {
                public_id: String,
                secure_url: String,
            },
        },
    ],
},
    {
        timestamps: true,
    }
);
const Course = mongoose.model("Course", courseSchema);
export default Course;
