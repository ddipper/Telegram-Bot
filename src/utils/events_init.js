const fs = require('node:fs')
const path = require('node:path')
const events_path = __dirname + './../events/';

module.exports = (client) => {
   const eventFiles = fs.readdirSync(events_path).filter(file => file.endsWith('.js'));
   for (const file of eventFiles) {
      const filePath = path.join(events_path, file);
      const event = require(filePath);
      if (event.once) {
         client.once(event.name, (...args) => event.execute(client, ...args));
      } else {
         client.on(event.name, (...args) => event.execute(client, ...args));
      }
  }
}