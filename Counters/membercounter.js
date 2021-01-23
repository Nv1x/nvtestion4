module.exports = async (client) => {
    const guild = client.guilds.cache.get('753337690459471934');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('800821667416506379');
        channel.setName(`Member Count: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}        