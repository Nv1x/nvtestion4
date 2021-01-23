module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args) {
        const member = message.mentions.users.first();
        if (member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send('User has been kicked!');
        } else {
            message.channel.send('You couldnt kick that member!');
            if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBER'));
            message.channel.send('You couldnt ban that member!');
            
        }
   }
}