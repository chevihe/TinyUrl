import UserSchema from "../Models/UserModel.js";

const UserController = {
  getList: async (req, res) => {
    try {
      const Users = await UserSchema.find();
      res.json({Users});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const User = await UserSchema.findById(req.params.id);
      res.json(User);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const {name,email,password,links} = req.body;
    try {
      const newUser = await UserSchema.create({ name,email,password,links });
      res.json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await UserSchema.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await UserSchema.findByIdAndDelete(id);
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UserController;

  
  