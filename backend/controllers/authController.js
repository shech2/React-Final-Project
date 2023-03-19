import auth from "../models/auth.js";
import {admin} from "../FirebaseAdmin/firebaseAdmin.js";

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
        const user = await auth.find({ uid: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await auth.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};


  const deleteUser = async (req, res) => {
    try {
        const userId = req.params.uid;
        await admin.auth().deleteUser(userId);
        const result = await auth.findOneAndDelete({ uid: userId });
        if (!result) {
            return res.status(404).json("User not found.");
        }
        res.status(200).json("User has been deleted...");
    } catch (error) {
       res.status(500).json(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await auth.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};


export { createUser, getUser, getAllUsers , deleteUser , updateUser };