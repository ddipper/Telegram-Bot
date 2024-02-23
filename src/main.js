require('dotenv').config()
const Client = require('node-telegram-bot-api')
const events_init = require('./utils/events_init')

const client  = new Client(process.env.TOKEN, {polling: true});

//client.setMyCommands([{command: '/restart', description: 'Restart bot.'}]);

events_init(client);

client.once('start', interaction => {
   console.log('1223');
})