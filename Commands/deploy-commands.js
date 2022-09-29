const { REST, SlashCommandBuilder, Routes } = require('discord.js');
require('dotenv').config();

var CLIENTID = process.env.CLIENTID;
var GUILDID = process.env.CLIENTID;
var TOKEN = process.env.TOKEN
const commands = [
	new SlashCommandBuilder().setName('play').setDescription('Plays a song from youtube')
	.addStringOption(option => option.setName('song').setDescription('📺Enter a URL...')),
	new SlashCommandBuilder().setName('skip').setDescription('Skip the current song'),
	new SlashCommandBuilder().setName('stop').setDescription('Stop track')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(TOKEN);

rest.put(Routes.applicationGuildCommands(CLIENTID, GUILDID), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);