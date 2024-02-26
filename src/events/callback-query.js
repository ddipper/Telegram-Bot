const editMessage = require('./../utils/editMessage')
let options = require('./../options/options')

module.exports = {
  name: 'callback_query',
  async execute(client, callbackQuery) {
      if (callbackQuery.data == 'catalog' || callbackQuery.data == 'back') {
        client.answerCallbackQuery(callbackQuery.id).then(async () => {
           editMessage(client, callbackQuery, options.catalog);
         });
      }

   }
};