import app from "./app";
import sequelize from "./database";

async function start() {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
    await sequelize.sync({ alter: true }); 
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => console.log(`User service running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("DB connection error:", err);
  }
}
start();
