const { Chat } = require('./../db');
const test = require('./../options/test_options')
const editMessageChat = require('./../utils/editMessageChat');

module.exports = {
   name: 'message',
   async execute(client, msg) {
      let itemDb = await Chat.findOne({
         where: {
            chatId: msg.chat.id,
         }
      });


      if(itemDb != null) {
         if(itemDb.q5 == null)
         {
            itemDb.q5 = msg.text;
            itemDb.save();

            client.deleteMessage(msg.chat.id, msg.message_id);

            editMessageChat(client, itemDb.chatId, itemDb.msg, test.final)
         }
      }
   },
}