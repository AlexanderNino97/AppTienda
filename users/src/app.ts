import express from "express";
import userRoutes from "./routes/user.routes";
import sequelize from "./database"; 

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

export default app;
