import app from "./app";
import sequelize from "./infraestructure/database";

async function start() {
  try {
    await sequelize.authenticate();
    console.log("DB connected (Orders)");
    await sequelize.sync({ alter: true });
    const PORT = process.env.PORT || 3003;
    app.listen(PORT, () => console.log(`Orders service running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("DB connection error:", err);
  }
}
start();
