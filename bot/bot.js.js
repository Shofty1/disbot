var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message)
{
	var input = message.content.toUpperCase();
	
    if(input === "!RAIDS")
	{
	    bot.reply(message, "Wednesday, Sunday 9:30-12:30 Server. No raid monday till legion");
	}
	if(input === "!JIMP")
	{
	    bot.reply(message, "http://i.imgur.com/4ARhGGB.png");
	}
	 if(input === "!ADDONS")
	{
	    bot.reply(message, "RC Loot Council: as we will be using this addon to manage loot distribution, Exorsus Raid Tools: as this will allow us to communicate better during encounters.");
	}
});

bot.loginWithToken("MjAyMzEyOTY3NDg2ODMyNjQw.CmYiIg.VnTK-qpeV5Lc-xzSSrlulCsQZFk");
