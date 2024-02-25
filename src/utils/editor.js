function editMarkup(client, text, data, msg){
   client.editMessageReplyMarkup({
      reply_markup: { 
         inline_keyboard: [ [], ] 
      } 
      }, 
      {
         chat_id: msg.message.chat.id,
         message_id: msg.message.message_id
      }
   );
}