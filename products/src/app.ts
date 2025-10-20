import express from "express";
import productRoutes from "./infrastructure/routes/product.routes";
import sequelize from "./infrastructure/database";

const app = express();
app.use(express.json());

app.use("/products", productRoutes);

export default app;
