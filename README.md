# Movie-Telegram-Bot
It's a bot related to movies.
If user enters any movie name then ,they will get the information about the movie like movie rating,release date etc.

This project mainly uses the tools and technologies like Telegram,JavaScript,API,npm packages.
Telegram provides a bunch of API’s methods to perform different functions.
The telegram bot can be used to know the complete details of the movie without going to other websites like the IMDb site, etc.

Prior to source code , Modules Installation should be done as follows :
To install  required module type the below command in the terminal :   npm install --save requests
Node-telegram-bot-api : Node.js module to interact with the official Telegram Bot API  :  npm install node-telegram-bot-api

Command to check if Node and npm are present in your system:
npm --v

node --version

Next Step :

Creating Bot and Getting API Token:
Open the telegram app and search for @BotFather.
Click on the start button or send “/start”.
Then send “/newbot” message to set up a name and a username.
The BotFather will then give you an API token.

Getting Movie API Key:
Go to the OMDB (open movie database ) website.
Create an account as per the limit.
You will receive your own API key.

Type the source code in notepad and save it as (.js file). Create a folder with imported "node modules" ,"package.json" file , "package-lock.json" file.
Copy the (.js source code file ) in the folder.
Run the code in the command prompt , where the  folder is created with the command  "node file_name.js".

After executing the source code, open the Telegram app in mobile/desktop.
Click on your own bot link and after opening the created bot account , click start button.
Type /movie movie_name
There you will be getting the information about the required movie.


