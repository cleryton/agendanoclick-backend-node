const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Usuario extends Model {
    static associate(models) {
      this.belongsTo(models.Login, {
        foreignKey: "login_id",
        as: "login",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      this.hasMany(models.Agendamentos, {
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
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefone: DataTypes.STRING,
      cpf: {
        type: DataTypes.STRING,
        unique: true,
      },
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