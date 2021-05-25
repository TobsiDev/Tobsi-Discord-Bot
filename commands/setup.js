module.exports = {
    name: 'setup',
    description: "It's just a setup...",
    execute(message, args, Discord, client) {

        /*var role = message.guild.roles.cache.find(role => role.name === "Tobsi-devBot");
        role.edit({
            color: '#845EC2',
        });*/

        message.channel.send('Doot. Setup complete :grinning:');
    }
}


