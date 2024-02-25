require('dotenv').config()
const Client = require('node-telegram-bot-api')
const events_init = require('./utils/events_init')

const client  = new Client(process.env.TOKEN, {polling: true});

// client.setMyCommands([]);
// client.setMyCommands([{command: '/panel', description: 'Restart bot.'}]);

events_init(client);
// bot.onText(/\/pre/, (msg) => {
//    const chatId = msg.chat.id;
//    const opts = {
//        reply_markup: JSON.stringify({
//            inline_keyboard: [
//                [{ text: 'Нажми меня', callback_data: '1' }]
//            ]
//        }),
//        caption: 'Ваш текст здесь'
//    };
//    bot.sendPhoto(chatId, 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', opts);
// });

// bot.on('callback_query', (callbackQuery) => {
//    const message = callbackQuery.message;
//    const opts = {
//        chat_id: message.chat.id,
//        message_id: message.message_id,
//        reply_markup: JSON.stringify({
//            inline_keyboard: [
//                [{ text: 'Новая кнопка', callback_data: '2' }]
//            ]
//        }),
//        caption: 'Новый текст'
//    };
//    bot.editMessageMedia({type: 'photo', media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_C3OjH3BbicdZ1UP0jAncMv-HpNvU_B1fg6C8H_vcg&s'}, opts);
// });