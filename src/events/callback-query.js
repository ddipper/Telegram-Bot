const fs = require('node:fs')

module.exports = {
   name: 'callback_query',
	async execute(client, callbackQuery) {
      if (callbackQuery.data == 'start') {
         client.answerCallbackQuery(callbackQuery.id).then(async () => {

            const options = {
               chat_id: callbackQuery.message.chat.id,
               message_id: callbackQuery.message.message_id,
               reply_markup: {inline_keyboard: [ 
                  [{text: 'кнопка 1', callback_data: 'button1'}],
                  [{text: 'кнопка 2', callback_data: 'button2'}],
                  [{text: 'кнопка 3', callback_data: 'button3'}],
                  [{text: 'кнопка 4', callback_data: 'button4'}],
                  [{text: 'кнопка 5', callback_data: 'button5'}],
                  [{text: 'кнопка 6', callback_data: 'button6'}]]
               },
               caption: 'Вы перешли в *каталог*, выберите нужный вам товар, нажам на кнопку ниже.'
           }

           await client.editMessageMedia({type: 'photo', media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_C3OjH3BbicdZ1UP0jAncMv-HpNvU_B1fg6C8H_vcg&s'}, options);

         });
      }


      // client.editMessageText(msg.message.chat.id, msg.message.id, {caption: caption.caption, parse_mode: 'Markdown', reply_markup: none});
      
   }
};