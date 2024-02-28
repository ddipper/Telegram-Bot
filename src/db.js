const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: 'db.sqlite',
   logging: false,
 })

 const Chat = sequelize.define( 
   'Chat',
   {
      usr: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      messageId: {
         type: DataTypes.INTEGER,
         allowNull: false,
      }
   },
   {
      timestamps: false,
      sequelize, 
      modelName: 'Chat', 
   }
)

function initDb(){
   sequelize.sync();
}


module.exports = {
   initDb,
   sequelize,
   Chat
}