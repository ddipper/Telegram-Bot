const editMessage = require('./../utils/editMessage')
let options = require('./../options/options')

module.exports = {
  name: 'callback_query',
  async execute(client, callbackQuery) {
      client.answerCallbackQuery(callbackQuery.id).then(async () => {
         if (callbackQuery.data == 'catalog' || callbackQuery.data == 'back') {
            editMessage(client, callbackQuery, options.catalog);
         } else if (callbackQuery.data == 'test') {
            
         }

      });
   }
};