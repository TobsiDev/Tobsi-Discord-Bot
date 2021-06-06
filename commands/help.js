const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "this is a command that says doot...",
    execute(message, args, Discord, client) {
			
			const newEmbed = new Discord.MessageEmbed()
			.setColor('#1f618d')
			.addFields(
				{ name: '**Admin Commands**', value: 'All the admin commands:'},
				{ name: '** - Set your role(s)**', value: 'Add a role to you: Use !set-role'},
				{ name: '** - Remove your role(s)**', value: 'Remove a role: Use !rm-role'},
				{ name: '** - Kick someone**', value: 'Kick: Use !kick @User'},
				{ name: '**Normal Commands**', value: 'All the normal commands everyone can use:'},
				{ name: '** - YouTube**', value: 'Watch YouTube with your friends: Use !youtube / !yt / !vid'},
				{ name: '** - South Park Quote**', value: 'Get a random Quote from the tv show, South Park: Use !southpark / !sp / !SOUTHPARK'},
				{ name: '**TODO Commands**', value: 'NOT IMPLEMENTET YET:'}
			)
			.setFooter('I cant do a lot.');

			message.channel.send(newEmbed);

        /*console.log('msg: ' + message);
        console.log('arg: ' + args);*/
    }
}
