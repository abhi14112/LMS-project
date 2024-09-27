import { Schema, model } from "mongoose";
const myCourseSchema = new Schema(
  {
    userId: {
      type: String,
      required: [true, "user id is required to store user course progress"],
      unique: [true, "user id must be unique"],
    },
    myEnrolledCourses: [
      {
        courseId: {
          type: String,
          required: true,
        },
        lectureProgress: [
          {
            lectureId: {
              type: String,
              required: true,
            },
            marked: {
              type: Boolean,
              default: false,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);
const MyCourse = model("myCourse", myCourseSchema);
export default MyCourse;