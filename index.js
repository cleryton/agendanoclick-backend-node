require("dotenv").config({ path: "db.env" });
const express = require("express");
const models = require('./src/models');
const app = express();
app.use(express.json());

const authRoutes = require("./src/routes/authRoutes");
const registerRoutes = require("./src/routes/registerRoutes");

app.use("", authRoutes);
app.use("/register", registerRoutes);

models.sequelize
  .authenticate()
  .then(() => models.sequelize.sync())
  .catch((err) => console.error("Erro BD", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));
