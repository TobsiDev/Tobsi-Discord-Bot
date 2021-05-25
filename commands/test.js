module.exports = {
    name: 'test',
    description: "this is a command that tells you off, or something...",
    execute(message, args) {
        message.channel.send('Hello.');
    }
}