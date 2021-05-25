
module.exports = {
    name: 'set-role',
    description: "this is a command that tells you off, or something...",
    execute(message, args) {

        const argument = args;

        /*console.log("msg: " + message);
        console.log("args: " + args);*/

        let ment = message.mentions.users.first();
        let role = message.guild.roles.cache.find(r => r.name === "Super");
        let wantRole = message.guild.roles.cache.find(w => w.name === `${argument}`);

        if (message.member.roles.cache.some(r => r.name === "Super")) {
            if (typeof wantRole !== 'undefined') {
                message.channel.send(`You have given the role ( ${argument} ) to USER`);
                message.member.roles.add(wantRole).catch(console.error);
            }
            else {
                message.channel.send('The role (' + argument + ') Does not exist. Or, you dont have permission to do that.')
            }
        } else {
            message.channel.send('Sorry, you dont have permission to do that.');
        }

    }
}