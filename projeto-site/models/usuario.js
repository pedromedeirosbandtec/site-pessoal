'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {  
    let Usuario = sequelize.define('Usuario',{
		
		idcadastro: {
			field: 'idcadastro',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},

		sobre_nome: {
			field: 'sobre_nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		tel: {
			field: 'tel',
			type: DataTypes.STRING,
			allowNull: false
		},
		endereco: {
			field: 'endereco',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
	}, 
	
	{

		tableName: 'cadastro', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,

	});

    return Usuario;
};
