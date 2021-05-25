module.exports = {
    name: 'setup',
    description: "It's just a setup...",
    execute(message, args) {

        var role = message.guild.roles.cache.find(role => role.name === "Tobsi");
        role.edit({
            color: '#845EC2',
        });

        message.channel.send('Doot. Setup complete :grinning:');
    }
}


