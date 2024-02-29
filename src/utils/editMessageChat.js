module.exports = async function editMessage(client, chatId, messageId, options){
   client.editMessageMedia(
      {
         caption: options.caption,
         parse_mode: options.parse_mode,

         type: options.type,
         media: options.image, 
      },
      {
         chat_id: chatId,
         message_id: messageId,

         reply_markup: options.reply_markup
      }
   )     
}