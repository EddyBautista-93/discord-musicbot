# Discord Music Bot

Created a discord bot for general use in discord.

Below is how to use as well as how it works.

## For use

Once project is cloned down, install dependencies needed for application.

```tsx
npm install
```

List of dependencies used

```json
"dependencies": {
    "discord-player": "^5.3.1",
    "discord.js": "^14.5.0",
    "dotenv": "^16.0.2"
  }
```

- discord-player - Complete framework to facilitate music commands using discord.js [https://www.npmjs.com/package/discord-player](https://www.npmjs.com/package/discord-player)
- discord.js - node.js module that allows you to interact with the Discord API [https://discord.js.org/#/](https://discord.js.org/#/)
- dotenv - to hide keys [https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

Remove the .txt from .env.txt and fill in the variables with your credentials from the discord developer portal.

```tsx
TOKEN= 
CLIENTID= 
GUILDID=
```

cd into Commands and run deploy-commands to push the slash commands to your server.

```tsx
node deploy-command.js
```

once completed navigate back to the home directory and run the app

```tsx
node index.js
```

and just like that you have a music bot in your server!