module.exports = {
   name: 'message',
	async execute(client, msg) {
      if(msg.text === '/start') {
         client.sendMessage(msg.chat.id, 'Bot started!');
      }
   },
};
