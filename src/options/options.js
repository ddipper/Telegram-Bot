module.exports = {
   catalog: {
      reply_markup: { inline_keyboard: [ [{text: 'Пройти тест', callback_data: 'test'}],
        [{text: 'Стресс', callback_data: 'button1'}, {text: 'Выгорание', callback_data: 'button2'}],
        [{text: 'Депрессия', callback_data: 'button3'}, {text: 'Буллинг', callback_data: 'button4'}],
        [{text: 'Тревожность', callback_data: 'button5'}, {text: 'Одиночество', callback_data: 'button6'}],
        [{text: 'Анонимная консультация', url: 'https://t.me/QuestionStopBullyingBot'}],
        [{text: 'Индивидуальная консультация', url: 'https://t.me/Konst_BC'}, {text: 'Телеграм канал', url: 'https://t.me/StopBullyingBy'}]]
     },
     caption: 'Вы перешли в *меню*, выберите нужный вам , нажам на кнопку ниже.',
     parse_mode: 'Markdown',
     type: 'photo',
     image: 'https://i.imgur.com/PApicZl.png'
   }
}