const { Model, DataTypes, STRING } = require("sequelize");

module.exports = (sequelize) => {
  class Login extends Model {
    static associate(models) {
      Login.hasOne(models.Usuario, {
        foreignKey: "login_id",
        as: "usuario",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Login.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      role: DataTypes.ENUM("USUARIO", "PROFISSIONAL", "ADMINISTRADOR"),
      criado_em: DataTypes.DATE,
      ultimo_login: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Login",
    }
  );
  return Login;
};
