'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ User, Album }) {
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.belongsTo(Album, {foreignKey: 'album_id'})
    }
  }
  Admission.init({
    album_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Admission',
  });
  return Admission;
};
