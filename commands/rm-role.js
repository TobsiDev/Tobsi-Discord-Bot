
module.exports = {
    name: 'rm-role',
    description: "this is a command that tells you off, or something...",
    execute(message, args) {

        const argument = args;
 
        console.log("msg: " + message);
        console.log("args: " + args);

        let role = message.guild.roles.cache.find(r => r.name === "Super");
        let wantRole = message.guild.roles.cache.find(w => w.name === `${argument}`);

        if (message.member.roles.cache.some(r => r.name === "Super")) {
            if (typeof wantRole !== 'undefined') {
                message.channel.send('you have: ' + role + '\nRole removed from user!');
                message.member.roles.remove(wantRole).catch(console.error);
            }
            else {
                message.channel.send('The role (' + argument + ') Does not exist. Or, you dont have permission to do that.')
            }
        } else {
            message.channel.send('Sorry, you dont have permission to do that.');
            /*message.member.roles.add(role).catch(console.error);
            message.channel.send('msg: ' + message);
            message.channel.send('arg: ' + args);*/
        }

    }
}