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

const getStats = async (req, res) => {
  const currentYear = parseInt(req.query.year || new Date().getFullYear(), 10);

    try {
      const data = await auth.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  };

export { createUser, getUser , getStats , getAllUsers };