const fs = require('node:fs')
const editMessage = require('./../utils/editMessage')
let catalog = require('./../options/options')

module.exports = {
   name: 'callback_query',
	async execute(client, callbackQuery) {
      if (callbackQuery.data == 'catalog' || callbackQuery.data == 'back') {
         client.answerCallbackQuery(callbackQuery.id).then(async () => {
          const chat_id = callbackQuery.message.chat.id;
          const message_id = callbackQuery.message.message_id;

          const options = {
            chat_id: chat_id,
            message_id: message_id ,
            reply_markup: { inline_keyboard: [ 
              [{text: 'Депрессия', callback_data: 'btn_depression'}, {text: 'кнопка 2', callback_data: 'button2'}],
              [{text: 'кнопка 3', callback_data: 'button3'}, {text: 'кнопка 4', callback_data: 'button4'}],
              [{text: 'кнопка 5', callback_data: 'button5'}, {text: 'кнопка 6', callback_data: 'button6'}],
              [{text: 'Индивидуальная консультация', url: 'https://t.me/ddipperq'}]]
              },
            caption: 'Вы перешли в *каталог*, выберите нужный вам товар, нажам на кнопку ниже.',
            parse_mode: 'Markdown',
              type: 'photo',
              image: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
           }

           editMessage(client, callbackQuery, options);
           
         });
      }

   }
};