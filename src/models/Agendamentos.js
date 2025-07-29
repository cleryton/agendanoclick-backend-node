const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Agendamento extends Model {
    static associate(models) {
      this.belongsTo(models.Profissional, {
        foreignKey: "profissional_id",
        as: "profissional",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      this.belongsTo(models.Usuario, {
        foreignKey: "usuario_id",
        as: "usuario",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Agendamento.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      servico: DataTypes.STRING,
      notas: DataTypes.TEXT,
      criado_em: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Agendamento",
      tableName: "agendamentos",
      timestamps: false,
    }
  );
  return Agendamento;
};
