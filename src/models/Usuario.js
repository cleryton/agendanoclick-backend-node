const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasOne(models.Login, {
        foreignKey: "login_id",
        as: "login",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });

      Usuario.hasMany(models.Schedules, {
        foreignKey: "usuario_id",
        as: "agendamentos",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Usuario.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: DataTypes.STRING,
      telefone: DataTypes.STRING,
      cpf: DataTypes.STRING,
      data_nascimento: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "usuarios",
      timestamps: false,
    }
  );

  return Usuario;
};
