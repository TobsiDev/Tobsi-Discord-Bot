const Discord = require('discord.js');
const client = new Discord.Client();
const keepUp = require("./server");


var prefix = [".", ">"];
const fs = require('fs');

// Find & checks for commands
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log(`Bot ( ${client.user.tag} ) is Online.`);

});

client.on('message', message => {
    if (!message.content.startsWith(prefix[0]) || message.author.bot) {
        if (!message.content.startsWith(prefix[1]) || message.author.bot) {

            return;
        }
    }
    const args = message.content.slice(prefix[0].length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'd') {
        client.commands.get('d').execute(message, args);
    }
    else if (command === 'set-role') {
        client.commands.get('set-role').execute(message, args);
    }
    else if (command === 'rm-role') {
        client.commands.get('rm-role').execute(message, args);
    }
    else if (command === 'at') {
        client.commands.get('at').execute(message, args);
    }
    else if (command === 'test') {
        client.commands.get('test').execute(message, args, Discord, client);
    }
    else if (command === 'clear' || command === 'purge' || command === 'pur' || command === 'cls') {
        client.commands.get('clear').execute(message, args, Discord, client);
    }
    else if (command === 'kick' || command === 'k') {
        client.commands.get('kick').execute(message, args, Discord, client);
    }
    else if (command === 'ban' || command === 'b') {
        client.commands.get('ban').execute(message, args, Discord, client);
    }
    else if (command === 'setup' || command === 's' || command === 'S') {
        client.commands.get('setup').execute(message, args, Discord, client);
    }
    else if (command === 'youtube' || command === 'yt' || command === 'vid') {
        client.commands.get('youtube').execute(message, args, Discord, client);
    }
    else if (command === 'help' || command === 'h' || command === 'HELP') {
        client.commands.get('help').execute(message, args, Discord, client);
    }
    else if (command === 'quote' || command === 'q' || command === 'QUOTE') {
        client.commands.get('quote').execute(message, args, Discord, client, Quoter);
    }
    else if (command === 'southpark' || command === 'sp' || command === 'SOUTHPARK') {
        client.commands.get('spq').execute(message, args, Discord, client);
    }
    /*else if (command === 'southparkepisode' || command === 'sp' || command === 'SOUTHPARK') {
        client.commands.get('spEPTrivia').execute(message, args, Discord, client);
    }*/
});

keepUp();

const myDiscordToken = process.env['DISCORD-TOKEN'];
client.login(myDiscordToken);

/*
TODO:
[ ] Lav en South Park Facts function. (Random trivia funktionen kan laves ved at bruge Math.Random og så se om det er over eller under 50%)
    [ ] Char Trivia
    [ ] Episode Trivia
[ ] Lav en South Park Quotes function.
[ ]
 */

//client.login("");

