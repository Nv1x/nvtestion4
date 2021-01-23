const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This command mutes a member!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === '1');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`);

        } else {
            message.channel.send('Cant find that member!'); 
        }
    }
}