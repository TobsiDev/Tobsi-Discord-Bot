module.exports = {
    name: 'kick',
    description: "this is a command that kicks a user...",
    execute(message, args) {

        const target = message.mentions.users.first();
        let role = message.guild.roles.cache.find(r => r.name === "Super");
        if (message.member.roles.cache.some(r => r.name === "Super")) {

            if (target) {
                const targetID = message.guild.members.cache.get(target.id);
                targetID.kick();
                message.channel.send("User has been kicked.");
            } else {
                message.channel.send("You could't kick that user.")
            }
        } else {
            message.channel.send('Sorry, you dont have permission to do that.');
        }
    }
}