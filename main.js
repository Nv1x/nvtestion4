const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const memberCounter = require('./Counters/membercounter');



const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('Nv Bot is online!');
    memberCounter(client);  
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '1');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('800135503314681856').send(`Welcome <@${guildMember.user.id}> to 11 cord, hope you enjoy your stay`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command == 'bad') {
        message.channel.send('bacus');
    } else if (command == 'youtube') {
        client.commands.get('youtube').execute(message, args);
    } else if (command == 'goat') {
        message.channel.send('Matty');
    } else if (command == 'badboy') {
        message.channel.send('arc');
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'clear') {

        client.commands.get('clear').execute(message, args);
    } else if (command === 'best') {
        client.commands.get('best').execute(message, args);
    } else if (command === 'p') {
        client.commands.get('p').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'besteditor') {
        client.commands.get('besteditor').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'twitter') {
        client.commands.get('twitter').execute(message, args);
    }
});

client.login('Nzk3OTMxMDkwMzg3Nzk2MDIx.X_tpPA.LaxY6zVewcM0fWm6WXBH89KB-yg');
