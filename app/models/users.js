'use strict'

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
    tableName: "users",
    createdAt: "created_time",
    updatedAt: "updated_time",
  })

  return User
}