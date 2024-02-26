const fs = require('node:fs')

module.exports = {
   name: 'message',
	async execute(client, msg) {
      if(msg.text === '/start' ) {
         const options = {
            reply_markup: {
               inline_keyboard: [
                  [{text: 'Перейти в каталог', callback_data: 'catalog'}]
               ]
            },
            caption: 'Здравствуйте, добро пожаловать в интрнет-магазин *dq development shop*, для просмотра списка товаров нажмите на кнопку ниже.',
            parse_mode: 'Markdown'
         }

         client.sendPhoto(msg.chat.id, 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', options);

      }
   },
};
