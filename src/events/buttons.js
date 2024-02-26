const editMessage = require('./../utils/editMessage')
let options = require('./../options/items_options')

module.exports = {
   name: 'callback_query',
	async execute(client, callbackQuery) {
      client.answerCallbackQuery(callbackQuery.id).then(async () => {
         if (callbackQuery.data == 'button1') {
            editMessage(client, callbackQuery, options.button1);           
         } else if (callbackQuery.data == 'button2') {
            editMessage(client, callbackQuery, options.button2);
         } else if (callbackQuery.data == 'button3') {
            editMessage(client, callbackQuery, options.button3);
         } else if (callbackQuery.data == 'button4') {
            editMessage(client, callbackQuery, options.button4);
         } else if (callbackQuery.data == 'button5') {
            editMessage(client, callbackQuery, options.button5);
         } else if (callbackQuery.data == 'button6') {
            editMessage(client, callbackQuery, options.button6);
         }
      });
   }
};