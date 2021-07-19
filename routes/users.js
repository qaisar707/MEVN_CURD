import express from "express";
import userController from "../Controllers/userController.js";
import multer from "multer";

var router = express.Router();

//Multer middleware
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "" + Date.now() + "" + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

/* GET users listing. */
router.get("/", userController.getAll);

router.post("/post", upload, userController.createUser);

router.get("/:id", userController.getUser);

router.delete("/:id", userController.removeUser);

router.patch("/:id", upload, userController.editUser);

export default router;
