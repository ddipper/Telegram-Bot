const fs = require('node:fs')
const editMessage = require('./../utils/editMessage')

module.exports = {
   name: 'callback_query',
	async execute(client, callbackQuery) {
      if (callbackQuery.data == 'btn_depression') {
         client.answerCallbackQuery(callbackQuery.id).then(async () => {
            const chat_id = callbackQuery.message.chat.id;
            const message_id = callbackQuery.message.message_id;
            
            const options = {
               chat_id: chat_id,
               message_id: chat_id,
               reply_markup: { inline_keyboard: [
                  [{text: 'Индивидуальная консультация', url: 'https://t.me/ddipperq'}],
                  [{text: '«  Назад к каталогу', callback_data: 'back'}]
                  ]
               },
               caption: 'Депрессивное расстройство (также называемое депрессией) является распространенным нарушением психического здоровья. Оно характеризуется длительными периодами подавленного настроения либо утраты интереса к привычной деятельности или способности получать от нее удовольствие.Депрессия отличается от регулярных изменений настроения и эмоций по отношению к реалиям повседневной жизни. Она может негативно влиять на все стороны жизни человека, в том числе на отношения с семьей, друзьями и окружающими людьми. Она может быть результатом или причиной проблем в учебе и на работе.',
               parse_mode: 'Markdown',
               type: 'video',
               image: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
           }


           editMessage(client, callbackQuery, options);           

         });
      }
   }
};