module.exports = {
    name: 'at',
    description: "this is a command that tells you off, or something...",
    execute(message, args) {
        let ment = message.mentions.users.first();
        message.channel.send(`You attet ${ment.toString()}`);
    }
}
// message.mentions[0];