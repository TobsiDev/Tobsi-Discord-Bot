module.exports = {
    name: 'd',
    description: "this is a command that says doot...",
    execute(message, args) {
        message.channel.send('Doot.');
    }
}