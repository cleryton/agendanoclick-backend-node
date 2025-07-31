const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Disponibilidade extends Model {
    static associate(models) {
      this.belongsTo(models.Profissional, {
        foreignKey: "profissional_id",
        as: "profissional",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Disponibilidade.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      dia_semana: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hora_inicio: DataTypes.TIME,
      inicio_intervalo: DataTypes.TIME,
      fim_intervalo: DataTypes.TIME,
      horario_fim: DataTypes.TIME,
      intervalo_agendamentos: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Disponibilidade",
      tableName: "disponibilidade",
      timestamps: false,
    }
  );
  return Disponibilidade;
};