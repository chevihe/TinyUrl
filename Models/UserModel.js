import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "new user"
  },
  email: {
    type: String,
    required: true,
    default: "tiny@gmail.com"
  },
  password: {
    type: String,
    required: true,
    default: "123456789"
  },
  links: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Link'
  }]
  
});

export default mongoose.model("user", UserSchema);