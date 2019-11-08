'use strict';

const client = require('.')('642126871177199617');

client.on('join', (secret) => {
  console.log('we should join with', secret);
});

client.on('spectate', (secret) => {
  console.log('we should spectate with', secret);
});

client.on('joinRequest', (user) => {
  if (user.discriminator === '1337') {
    client.reply(user, 'YES');
  } else {
    client.reply(user, 'IGNORE');
  }
});

client.on('connected', () => {
  console.log('connected!');

  client.updatePresence({
    state: 'Making 3D Models',
    details: '‍💻',
    startTimestamp: new Date(),
    largeImageKey: 'icon',
    smallImageKey: 'icon',
  });
});

process.on('unhandledRejection', console.error);
