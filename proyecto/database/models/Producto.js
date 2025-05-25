module.exports = function(sequelize, dataTypes){

    let alias = 'Producto';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(300)
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
        tableName: 'productos',
        timestamps: true,
        paranoid: true
    };

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, {
            foreignKey: 'id_usuario',
            as: 'usuario'
        });

        Producto.hasMany(models.Comentario, {
            foreignKey: 'id_producto',
            as: 'comentarios'
        });
    };

    return Producto;
}
