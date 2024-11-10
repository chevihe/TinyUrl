import LinkModel from "../Models/LinkModel.js";
import UserModel from "../Models/UserModel.js";
const LinkController = {
  getList: async (req, res) => {
    try {
      const links = await LinkModel.find();
      res.json({links});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const link = await LinkModel.findById(req.params.id);
      res.json(link);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const {userId,originalUrl} = req.body;
    try {
      const newLink = await LinkModel.create({originalUrl});
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      user.links.push(newLink._id);
      await user.save();

      res.json(newLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedLink);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await LinkModel.findByIdAndDelete(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default LinkController;

  
  