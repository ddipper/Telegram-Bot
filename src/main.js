require('dotenv').config()
const Client = require('node-telegram-bot-api')
const events_init = require('./utils/events_init')

const client  = new Client(process.env.TOKEN, {polling: true});

// client.setMyCommands([]);
// client.setMyCommands([{command: '/panel', description: 'Restart bot.'}]);

events_init(client);