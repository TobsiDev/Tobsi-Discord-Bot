module.exports = {
    name: 'ban',
    description: "this is a command that bans a user...",
    execute(message, args) {

        const target = message.mentions.users.first();
        let role = message.guild.roles.cache.find(r => r.name === "Super");
        if (message.member.roles.cache.some(r => r.name === "Super")) {

            if (target) {
                const targetID = message.guild.members.cache.get(target.id);
                targetID.ban();
                message.channel.send("User has been banned.");
            } else {
                message.channel.send("You could't ban that user.")
            }
        } else {
            message.channel.send('Sorry, you dont have permission to do that.');
        }
    }
}