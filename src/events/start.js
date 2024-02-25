const fs = require('node:fs')

module.exports = {
   name: 'message',
	async execute(client, msg) {
      if(msg.text === '/panel') {
          
         const options = {
            reply_markup: {
               inline_keyboard: [
                  [{text: 'Перейти в каталог', callback_data: 'start'}]
               ]
            },
            caption: 'Здравствуйте, добро пожаловать в интрнет-магазин *dq development shop*, для просмотра списка товаров нажмите на кнопку ниже.',
            parse_mode: 'Markdown'
         }

         client.sendPhoto(msg.chat.id, 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', options);

         //client.sendVideo(msg.chat.id, 'video.mp4', {caption: set.caption, reply_markup: catalogBtn.reply_markup});
      }
   },
};


/*         const buttons = {
            reply_markup: {
               inline_keyboard: [
   
                   [{text: 'Продать', callback_data: 'sticker'}, {text: 'Купить меня', callback_data: 'circleVideo'}],
                   [{text: 'не придума', callback_data: 'buyFile'}],
                   [{text: 'и еще че то', callback_data: 'checkSubs'}],
                   [{text: 'ну и еще', callback_data: 'closeMenu'}]
   
               ]}};*/