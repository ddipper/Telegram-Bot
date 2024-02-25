module.exports = {
   catalog: {
      chat_id: 0,
      message_id: 0,
      reply_markup: { inline_keyboard: [ 
         [{text: 'Депрессия', callback_data: 'btn_depression'}, {text: 'Стресс', callback_data: 'btn_stress'}],
         [{text: 'ПРЛ', callback_data: 'btn_prl'}, {text: 'Выгорание', callback_data: 'btn_fire'}],
         [{text: '123', callback_data: 'button5'}, {text: 'кнопка 6', callback_data: 'button6'}],
         [{text: 'Индивидуальная консультация', url: 'https://t.me/ddipperq'}]]
      },
      caption: 'Вы перешли в *каталог*, выберите нужный вам товар, нажам на кнопку ниже.',
      parse_mode: 'Markdown',
      type: 'photo',
      image: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
  }
}