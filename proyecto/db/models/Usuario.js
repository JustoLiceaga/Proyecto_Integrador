module.exports = function(sequelize, dataTypes){

    let alias = 'Usuario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        contrasenia: {
            type: dataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento: {
            type: dataTypes.DATE,
            allowNull: false
        },
        foto_perfil: {
            type: dataTypes.STRING
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
        tableName: 'usuarios',
        timestamps: true,
        paranoid: true
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, {
            foreignKey: 'id_usuario',
            as: 'productos'
        });

        Usuario.hasMany(models.Comentario, {
            foreignKey: 'id_usuario',
            as: 'comentarios'
        });
    };

    return Usuario;
}
