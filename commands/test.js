module.exports = {
    name: 'test',
    description: "this is a command that tells you off, or something...",
    execute(message, args, Discord, client) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#1f618d')
            .setTitle('Tobsi Bot')
            .setURL('https://www.github.com/TobsiDev/')
            .setAuthor('TobsiDev')
            .setDescription('Test embed.')
            .addFields(
                { name: 'Field 1', value: 'Check out my repo.' },
                { name: 'Field 2', value: 'Another one.' }
            )
            .setImage('https://images.emojiterra.com/google/android-11/512px/1f525.png')
            .setFooter('I cant do a lot.');



        message.channel.send(`Hello. Im ${client.user.tag}`);
        message.channel.send(newEmbed);

    }
}