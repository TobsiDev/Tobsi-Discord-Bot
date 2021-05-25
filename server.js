const express = require("express");
const server = express();

server.all("/", (req, res) => {
	res.send("Bot is running.");
});

function keepUp() {
	server.listen(3000, () => {
		console.log("Server is ready,");
	});
}

module.exports = keepUp;