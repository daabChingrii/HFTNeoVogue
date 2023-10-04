dotenv.config();
dbConnect();
import express from "express";
import dotenv from "dotenv";
import { router as authRoute } from "./routes/auth.js";
import { dbConnect } from "./db/Connection.js";

const app = express();

app.use(express.json());
app.use("/api/user", authRoute);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
