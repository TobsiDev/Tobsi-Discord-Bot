module.exports = {
    name: 'spEPTrivia',
    description: "this is a command that says doot...",
    execute(message, args) {


        if (args != " ") {
            message.channel.send('Doot.');
        }
        else {
            message.channel.send('Dootz.');
        }

        console.log('msg: ' + message);
        console.log('arg: ' + args);
    }
}