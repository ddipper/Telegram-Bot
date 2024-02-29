const editMessage = require('./../utils/editMessage')
const options = require('./../options/options')
const test = require('./../options/test_options')
const { Chat } = require('./../db')

module.exports = {
  name: 'callback_query',
  async execute(client, callbackQuery) {
      client.answerCallbackQuery(callbackQuery.id).then(async () => {
         
         let itemDb = await Chat.findOne({
            where: {
               chatId: callbackQuery.message.chat.id,
            }}
         );

         if (callbackQuery.data == 'catalog' || callbackQuery.data == 'back') {
            editMessage(client, callbackQuery, options.catalog);
         } else if (callbackQuery.data == 'test') {
            editMessage(client, callbackQuery, test.test1);
         }
         
         else if (callbackQuery.data == 'testSchool' || callbackQuery.data == 'testUniver') {
            const chat = Chat.build({chatId: callbackQuery.message.chat.id, msg: callbackQuery.message.message_id, q5: 'UNSIGNED'});
            if(callbackQuery.data == 'testSchool') {
               chat.q1 = 'Школа';
            } else {
               chat.q1 = 'Университет';
            }
            
            chat.save();
            if(itemDb!=null) { itemDb.destroy(); }

            editMessage(client, callbackQuery, test.test2);
         }
         
         else if (callbackQuery.data == 'testYes' || callbackQuery.data == 'testNo') {
            if(callbackQuery.data == 'testYes') {                
               itemDb.q2 = 'Да';
               itemDb.save();

            } else {
               itemDb.q2 = 'Нет';
               itemDb.save();
            }
            editMessage(client, callbackQuery, test.test3);
         }
         
         else if (callbackQuery.data == 'testBulYes' || callbackQuery.data == 'testBulNo') {
            if(callbackQuery.data == 'testBulYes') {
               itemDb.q3 = 'Да';
               itemDb.save();
            } else {
               itemDb.q3 = 'Нет';
               itemDb.save();
               editMessage(client, callbackQuery, test.final);
               return;
            }
            editMessage(client, callbackQuery, test.test4);
         }

         else if (callbackQuery.data == 'testTeach' || callbackQuery.data == 'testStud') {
            if(callbackQuery.data == 'testTeach') {
               itemDb.q4 = 'Учителя';
               itemDb.q5 = null;
               itemDb.save();
            } else {
               itemDb.q4 = 'Ученика';
               itemDb.q5 = null;
               itemDb.save();
            }
            editMessage(client, callbackQuery, test.test5);
         }
      });
   }
};