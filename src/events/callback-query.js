const fs = require('node:fs')

module.exports = {
   name: 'callback_query',
	async execute(client, msg) {
      console.log(msg)
      if (msg.data == 'start') {
         client.answerCallbackQuery(msg.id).then(async () => {
            const imageBuffer = fs.readFileSync(__dirname + './../img/hi.jpg');

            // await client.editMessageMedia({ chat_id: msg.message.chat.id, message_id: msg.message.message_id }, imageBuffer);

            const set = { 
               'caption': 'Вы перешли в *каталог*, выберите нужный вам товар, нажам на кнопку ниже.',
               'parse_mode': 'Markdown'
            };

            console.log(msg.message.message_id)

            client.editMessageCaption({chat_id: msg.message.chat.id, message_id: msg.message_id, caption: set.caption, parse_mode: 'Markdown'})

            client.editMessageMedia({
               chat_id: msg.message.chat.id,
               message_id: msg.message.message_id-1   ,
               media: {
                   type: 'photo',
                   media: imageBuffer,
                   caption: set.caption,
                   parse_mode: 'Markdown'
               },
               reply_markup: {inline_keyboard: [ 
                  [{text: 'кнопка 1', callback_data: 'button1'}],
                  [{text: 'кнопка 2', callback_data: 'button2'}],
                  [{text: 'кнопка 3', callback_data: 'button3'}],
                  [{text: 'кнопка 4', callback_data: 'button4'}],
                  [{text: 'кнопка 5', callback_data: 'button5'}],
                  [{text: 'кнопка 6', callback_data: 'button6'}]]}
           })

            // await client.editMessageReplyMarkup({ 
            //    inline_keyboard: [ 
            //       [{text: 'кнопка 1', callback_data: 'button1'}],
            //       [{text: 'кнопка 2', callback_data: 'button2'}],
            //       [{text: 'кнопка 3', callback_data: 'button3'}],
            //       [{text: 'кнопка 4', callback_data: 'button4'}],
            //       [{text: 'кнопка 5', callback_data: 'button5'}],
            //       [{text: 'кнопка 6', callback_data: 'button6'}]]
            //    }, { chat_id: msg.message.chat.id, message_id: msg.message.message_id });
         

         });
      }


      // client.editMessageText(msg.message.chat.id, msg.message.id, {caption: caption.caption, parse_mode: 'Markdown', reply_markup: none});
      
   }
};