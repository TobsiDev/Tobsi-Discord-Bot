module.exports = {
    name: 'clear',
    description: "this is a command that says doot...",
    async execute(message, args) {

        /*
        console.log('msg: ' + message);
        console.log('arg: ' + args);
        */


        let role = message.guild.roles.cache.find(r => r.name === "Super");
        if (message.member.roles.cache.some(r => r.name === "Super")) {

            if (!args[0]) { return message.reply("Enter the amount of messages to purge."); }
            if (isNaN(args[0])) { return message.reply("Please enter a number."); }

            if (args[0] > 100) { return message.reply("you can not delete more than 100 messages.") }
            if (args[0] < 1) { return message.reply("you must delete at least 1 message.") }

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });

            message.channel.send('Done Purging.');

        } else {
            message.channel.send('Sorry, you dont have permission to do that.');
        }

    }
}