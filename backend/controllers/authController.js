import auth from "../models/auth.js";

const createUser = async (req, res) => {

    try {
        const newUser = new auth(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getUser = async (req, res) => {
    try {
        const user = await auth.findById(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

export { createUser, getUser };