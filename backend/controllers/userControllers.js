import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

import generateTokenAndSetCookie from "../utils/tokenAndCookie.js";
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please enter a valid email address' });
    }
    try {
        const user = await User.findOne({ email: email.toLowerCase().trim() });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        generateTokenAndSetCookie(user._id, res);
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({ message: 'Server error. Please try again later' });
    }
};

const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || name.trim().length === 0) {
        return res.status(400).json({ message: 'Name is required' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'Name must be at least 3 characters long' });
    }
    if (name.length > 50) {
        return res.status(400).json({ message: 'Name cannot be more than 50 characters long' });
    }

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    const emailRegex = /.+@.+\..+/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please enter a valid email address' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email is already registered' });
        }
        user = new User({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: password,
        });
        const userData = await user.save();
        if (userData) {
            generateTokenAndSetCookie(userData._id, res);
            return res.status(201).json({ message: 'User registered successfully' });
        }
        else {
            return res.status(500).json({ message: 'User registration failed' });
        }
    } catch (error) {
        console.error('Error during user registration:', error.message);
        res.status(500).json({ message: 'Server error. Please try again later' });
    }
};
export { login, register };