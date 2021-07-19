// const mongooose = require("mongoose");
import mongoose from "mongoose";

const modelSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  // image: {
  //   type: String,
  // },
  age: {
    type: Number,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const userModel = mongoose.model("userModel", modelSchema);
export default userModel;
