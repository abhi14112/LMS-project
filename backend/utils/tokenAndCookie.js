import jwt from "jsonwebtoken";
const generateTokenAndSetCookie = (userId, res) => {
    try {
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" });
        res.cookie("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 15 * 24 * 60 * 60 * 1000,
            sameSite: "strict"
        });
    } catch (error) {
        console.error("Error generating token and setting cookie:", error.message);
        throw new Error("Token generation failed");
    }
};
export default generateTokenAndSetCookie;