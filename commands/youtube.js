const fetch = require('node-fetch');

module.exports = {
    name: 'youtube',
    description: "this is a command that makes a YouTube watching party...",
    execute(message, args, Discord, client) {

        let usrChannel = message.member.voice.channel;
        if (!usrChannel) return message.channel.send("You have to be in Voice Chat to use this command.")

        fetch(`https://discord.com/api/v8/channels/${usrChannel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 3600,                                  // Link is working for 1 hour (60 sec * 60 min)
                max_uses: 0,                                    // infinit
                target_application_id: "755600276941176913",    // youtube together
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
                if (!invite.code) return message.channel.send("I can't start a YouTube Watch Session :/")

                // Embedded link
                const EmbedLink = new Discord.MessageEmbed()
                    .setColor('#ff9671') // Orange color
                    .setTitle(`${client.user.tag} Watch Party.`)
                    .setDescription(`[***Click*** to watch some YouDootz with The Boyz. :desktop:](https://discord.com/invite/${invite.code})`)
                    .setURL(`https://discord.com/invite/${invite.code}`)
                    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png')
                    .setTimestamp()
                    .setFooter('The link was send ', 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png');

                message.channel.send('YouDoot.');
                message.channel.send(EmbedLink)
            })


        /*console.log('msg: ' + message);
        console.log('arg: ' + args);*/
    }
}