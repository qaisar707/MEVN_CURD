import env from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import customRoutes from "./routes/users.js";
import { urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
env.config();
const app = express();
const PORT = 5000;

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
    findOneAndDelete: true,
  })
  .then(() => console.log("Mongodb is Connected...!!"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("uploads"));
//User Specified Routes
app.use("/users", customRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express");
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/dist/"));
  app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.htm;");
  });
}
app.listen(PORT, () =>
  console.log(`Server Listening at http://localhost:${PORT}`)
);
