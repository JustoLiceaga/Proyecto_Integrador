module.exports = function(sequelize, dataTypes){

    let alias = 'Comentario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_producto: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_usuario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        texto: {
            type: dataTypes.STRING(355),
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE,
            field: 'createdAt'
        },
        updatedAt: {
            type: dataTypes.DATE,
            field: 'updatedAt'
        },
        deletedAt: {
            type: dataTypes.DATE,
            field: 'deletedAt'
        }
    };

    let config = {
        tableName: 'comentarios',
        timestamps: true,
        paranoid: true
    };

    const Comentario = sequelize.define(alias, cols, config);

    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Producto, {
            foreignKey: 'id_producto',
            as: 'producto'
        });

        Comentario.belongsTo(models.Usuario, {
            foreignKey: 'id_usuario',
            as: 'usuario'
        });
    };

    return Comentario;
}
