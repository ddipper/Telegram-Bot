module.exports = async function editMessage(client, callbackQuery, options){
   client.editMessageMedia(
      {
         caption: options.caption,
         parse_mode: options.parse_mode,

         type: options.type,
         media: options.image, 
      },
      {
         chat_id: callbackQuery.message.chat.id,
         message_id: callbackQuery.message.message_id,

         reply_markup: options.reply_markup
      }
   )     
}