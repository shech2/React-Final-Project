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
        if(req.params.id){ 
        const user = await auth.find({ uid: req.params.id });
        res.status(200).json(user);
        } else {
        const users = await auth.find();
        res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const getStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear()));
  
    try {
      const data = await auth.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  };

export { createUser, getUser , getStats };