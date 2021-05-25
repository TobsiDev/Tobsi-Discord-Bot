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
                { name: 'CummieRule 1', value: 'Dont CUM in me plz.' },
                { name: 'CummieRule 2', value: 'Dont CUM on my GitHub plz.' },
                { name: 'CummieRule 3', value: 'Dont CUM in my mouth plz.' }
            )
            .setImage('https://images.emojiterra.com/google/android-11/512px/1f525.png')
            .setFooter('Plz, dont CUM in me. I dont like CUMMIES in my tummy.');

        message.channel.send(`Hello. Im ${client.user.tag}`);
        message.channel.send(newEmbed);

    }
}