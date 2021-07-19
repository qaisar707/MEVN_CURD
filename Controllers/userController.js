import userModel from "../model/userModel.js";

class userController {
  //getting ALL USERS
  static async getAll(req, res) {
    try {
      const users = await userModel.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // getting User by id
  static async getUser(req, res) {
    const id = req.params.id;

    try {
      const user = await userModel.find(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Create User
  static async createUser(req, res) {
    const user = req.body;
    // const imageName = req.file.fileName;
    // user.image = imageName;
    try {
      await userModel.create(user);
      res.status(200).json({ message: "User saved Successfuly" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // Updating USER
  static async editUser(req, res) {
    // let newImage = "";
    // if (req.file) {
    //   newImage = req.file.fileName;
    //   try {
    //     fs.unlinkSync("./uploads/" + req.body.oldImage);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // } else {
    //   newImage = req.body.oldImage;
    // }
    // newUser.image = newImage;
    const user = req.body;
    const id = req.params.id;
    try {
      await userModel.findOneAndUpdate(id, user);
      res.status(200).json({ message: "User Updated Successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //Deleting User
  static async removeUser(req, res) {
    const id = req.params.id;
    try {
      await userModel.findOneAndDelete(id);
      res.status(200).json({ message: "User Deleted Successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
}

export default userController;
