module.exports = {
   catalog: {
      reply_markup: { inline_keyboard: [ 
        [{text: 'Депрессия', callback_data: 'button1'}, {text: 'Стресс', callback_data: 'button2'}],
        [{text: 'ПРЛ', callback_data: 'button3'}, {text: 'Выгорание', callback_data: 'button4'}],
        [{text: 'video buttonиииииииии', callback_data: 'button5'}, {text: 'кнопка 6', callback_data: 'button6'}],
        [{text: 'Индивидуальная консультация', url: 'https://t.me/ddipperq'}],
        [{text: 'Сообщить о неисправности', url: 'https://t.me/ddipperq'}, {text: 'Телеграм канал', url: 'https://t.me/+YogRN4ycbX05YWJi'}]]
     },
     caption: 'Вы перешли в *каталог*, выберите нужный вам товар, нажам на кнопку ниже.',
     parse_mode: 'Markdown',
     type: 'photo',
     image: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk='
   }
}