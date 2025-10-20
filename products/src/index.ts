import app from "./app";
import sequelize from "./infrastructure/database";

async function start() {
  try {
    await sequelize.authenticate();
    console.log("DB connected (Products)");
    await sequelize.sync({ alter: true });
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => console.log(`Products service running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("DB connection error:", err);
  }
}
start();
