'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Message.hasOne(models.Attachment,{
        as:"attachments",
        foreignKey:"messageId"
      })
    }
  }
  Message.init({
    senderId: DataTypes.INTEGER,
    chatId: DataTypes.INTEGER,
    message: DataTypes.STRING,
    attachment:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Message',
    tableName:'messages',
    paranoid:true
  });
  return Message;
};