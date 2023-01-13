const { db, DataTypes } = require('../utils/database.utils');

const Character = db.define('character', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
 

});

module.exports = { Character };