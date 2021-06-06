module.exports = {
    name: 'help',
    description: "this is a command that says doot...",
    execute(message, args) {
        message.channel.send("``` ====== ADMIN ====== \n something \n  ====== ADMIN ====== ```");
        console.log('msg: ' + message);
        console.log('arg: ' + args);
    }
}