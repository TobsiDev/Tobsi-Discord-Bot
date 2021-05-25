module.exports = {
    name: 'fuck-you',
    description: "this is a command that tells you off, or something...",
    execute(message, args) {
        message.channel.send('No, Fuck you!');
    }
}