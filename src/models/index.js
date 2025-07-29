const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Usuario = require('./usuario')(sequelize, Sequelize);
db.Login = require('./login')(sequelize, Sequelize);
db.Agendamentos = require('./agendamentos')(sequelize, Sequelize);
db.Profissional = require('./profissional')(sequelize, Sequelize);
db.Disponibilidade = require('./disponibilidade')(sequelize, Sequelize);

module.exports = db;
