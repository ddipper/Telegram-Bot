const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
   dialect: 'sqlite',
   storage: 'db.sqlite',
   logging: false,
 })

 const Chat = sequelize.define( 
   'Chat',
   {
      chatId: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      usr: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      msg: {
         type: DataTypes.INTEGER,
         allowNull: false,
      },
      q1: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      q2: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      q3: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      q4: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      q5: {
         type: DataTypes.STRING,
         allowNull: true,
      },
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