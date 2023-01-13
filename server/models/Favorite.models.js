const { db, DataTypes } = require('../utils/database.utils');

const Favorite = db.define('favorite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
    ref_api: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    favorite: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true,
	},
});

module.exports = { Favorite };