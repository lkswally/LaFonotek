const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const { sequelize, config } = require(__dirname + '/../config/db.js');
const db = {};

const modelFiles = fs
  .readdirSync(__dirname)
  .filter(file => 
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  );

for (const file of modelFiles) {
  const model = require(path.join(__dirname, file))(sequelize, DataTypes);
  db[model.name] = model;
}

// se inicializan asociaciones...
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
