import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path"; // Import path module
dotenv.config();

const app = express();
const port = process.env.PORT;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cors());
app.use(express.json());

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "./public", "index.html"));
// });

//using routes
import useRoutes from "./routes/userRoutes.js";
import { User } from "./model/userModel.js";

app.use("/api/v1/user", useRoutes);
app.get("/api/v1/admin", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
});
const startServer = async () => {
  try {
    await connectDB(); // Ensure DB connection is established before starting the server
    app.listen(port, () => {
      console.log("Server running on port 3000...");
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};
startServer();
