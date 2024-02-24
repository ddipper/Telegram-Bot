const fs = require('node:fs')

module.exports = {
   name: 'message',
	async execute(client, msg) {
      if(msg.text === '/panel') {
         // client.sendMessage(msg.chat.id, '');
         const set = {
            'caption': 'Здравствуйте, добро пожаловать в интрнет-магазин *dq development shop*, для просмотра списка товаров нажмите на кнопку ниже.',
            'parse_mode': 'Markdown'
         };
          
         const catalogBtn = {
            reply_markup: {
               inline_keyboard: [
                  [{text: 'Перейти в каталог', callback_data: 'catalog'}]
               ]
            }
         }

         const buttons = {
            reply_markup: {
               inline_keyboard: [
   
                   [{text: 'Продать', callback_data: 'sticker'}, {text: 'Купить меня', callback_data: 'circleVideo'}],
                   [{text: 'не придума', callback_data: 'buyFile'}],
                   [{text: 'и еще че то', callback_data: 'checkSubs'}],
                   [{text: 'ну и еще', callback_data: 'closeMenu'}]
   
               ]}};

         const photo = __dirname + '';

         const imageBuffer = fs.readFileSync(__dirname + './../img/google.webp');

         client.sendPhoto(msg.chat.id, imageBuffer, {caption: set.caption, parse_mode: 'Markdown', reply_markup: catalogBtn.reply_markup});
         //client.sendVideo(msg.chat.id, 'video.mp4', {caption: set.caption, reply_markup: catalogBtn.reply_markup});
      }
   },
};
