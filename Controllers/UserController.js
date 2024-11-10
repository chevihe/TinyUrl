import UserSchema from "../Models/UserModel.js";

const UserController = {
  getList: async (req, res) => {
    try {
      const Users = await UserSchema.find();
      // await UserModel.find();//ללא סינון
    //   const filtered1 = await TaskModel.find({ iscomplete: true });//סינון 1
    //   const filtered2 = await TaskModel.where('isComplete', false);//סינון 2{ tasks, filtered1, filtered2}
      res.json({Users});
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  getById: async (req, res) => {
    try {
      const User = await UserSchema.findById(req.params.id);//שליפה לפי מזהה
      res.json(User);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  add: async (req, res) => {
    const {name,email,password,links} = req.body;
    try {
      const newUser = await UserSchema.create({ name,email,password,links });//הוספת חדש
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
      });//עדכון לפי מזהה
      res.json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await UserSchema.findByIdAndDelete(id);//מחיקה לפי מזהה
      res.json(deleted);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  },
};

export default UserController;

  
  