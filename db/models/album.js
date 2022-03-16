'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Photo }) {
      this.hasMany(Photo, {foreignKey: "album_id"})
      this.belongsTo(User, {foreignKey: 'user_id'})
    }
  }
  Album.init({
    title: DataTypes.STRING,
    photo: DataTypes.STRING,
    body: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
