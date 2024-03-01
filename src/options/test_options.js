module.exports = {
   test1: {
      reply_markup: { inline_keyboard: [
         [{text: 'Школа', callback_data: 'testSchool'}, {text: 'Университет', callback_data: 'testUniver'}]
         ]
      },
      caption: 'В каком учреждении образования вы учитесь?',
      parse_mode: 'Markdown',
      type: 'photo',
      image: 'https://i.imgur.com/7HckFgS.png'
  },

  test2: {
      reply_markup: { inline_keyboard: [
         [{text: 'Да', callback_data: 'testYes'},{text: 'Нет', callback_data: 'testNo'}]
         ]
      },
      caption: 'Есть ли буллинг у вас в учреждении?',
      parse_mode: 'Markdown',
      type: 'photo',
      image: 'https://i.imgur.com/3nXpdmp.png'
   },

   test3: {
      reply_markup: { inline_keyboard: [
         [{text: 'Да', callback_data:'testBulYes'},{text: 'Нет', callback_data: 'testBulNo'}]
         ]
      },
      caption: 'Подвергались ли вы буллингу?',
      parse_mode: 'Markdown',
      type: 'photo',
      image: 'https://i.imgur.com/epiNmQQ.png'
   },

   test4: {
      reply_markup: { inline_keyboard: [
         [{text: 'Учителя', callback_data: 'testTeach'}, {text: 'Ученика', callback_data: 'testStud'}]
         ]
      },
      caption: 'С чьей стороны?',
      parse_mode: 'Markdown',
      type: 'photo',
      image: 'https://i.imgur.com/I1xFNzq.png'
   },

   test5: {
      reply_markup: { inline_keyboard: [
         ]
      },
      caption: 'Поделитесь вашей историей. Кратко *(одним сообщением)* опишите кто был агрессором и из-за чего.',
      parse_mode: 'Markdown',
      type: 'photo',
      image: 'https://i.imgur.com/DmqvUfi.png'
   },

   final: {
      reply_markup: { inline_keyboard: [
         [{text: 'Индивидуальная консультация', url: 'https://t.me/Konst_BC'}],
         [{text: '«  Перейти в меню', callback_data: 'back'}]
         ]
      },
      caption: 'Вы успешно прошли тест! Результаты отправлены нашим специалистам для составления статистики, *спасибо* что помогли нам!',
      parse_mode: 'Markdown',
      type: 'photo',
      image: 'https://i.imgur.com/ninojUA.png'
   },
}
