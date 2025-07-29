const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    class Profissional extends Model {
        static associate(models) {
            this.hasMany(models.Agendamentos, {
                foreignKey: "profissional_id",
                as: "agendamentos",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            });
        }
    }

    Profissional.init(
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
            cpf_cnpj: {
                type: DataTypes.STRING,
                unique: true,
            },
            categoria: DataTypes.STRING,
            bio: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Profissional",
            tableName: "profissional",
        }
    );

    return Profissional;
};
