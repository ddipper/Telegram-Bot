const fs = require('node:fs')

module.exports = {
   name: 'message',
	async execute(client, msg) {
      if(msg.text === '/start' ) {
         const options = {
            reply_markup: {
               inline_keyboard: [
                  [{text: 'Перейти в меню', callback_data: 'catalog'}]
               ]
            },
            caption: 'Добро пожаловать в бота проекта *«СТОП буллинг»*, который создан для объяснения и разъяснения психологических аспектов.',
            parse_mode: 'Markdown'
         }

         client.sendPhoto(msg.chat.id, 'https://i.imgur.com/xUkyxnu.png', options);

      }
   },
};
