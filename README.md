# Movie-Telegram-Bot
It's a bot related to movies.
If user enters any movie name then ,they will get the information about the movie like movie rating,release date etc.

This project mainly uses the tools and technologies like Telegram,JavaScript,API,npm packages.
Telegram provides a bunch of API’s methods to perform different functions.
The telegram bot can be used to know the complete details of the movie without going to other websites like the IMDb site, etc.

Prior to source code , necessary installation should be done as follows :
Go to chrome-> enter nodejs.org -> download the latest version of nodejs (finish the installation process by clicking next and finish)

npm is installed with nodejs.

Command to check if Node and npm are present in your system:
npm --v

node --version

If versions are displyed , properly installed and then enter npm install node-telegram-bot-api --save (run)

Create a folder called telegram on desktop / documents -> Go to the location where nodejs got installed -> copy node_modules folder and paste it in telegram folder.

Inside the node_modules folder -> npm ->node_modules -> npm -> normalize-package-bin -> there copy package.json and package-lock.json files and paste it in telegram folder.

Import telegram folder through explorer option via Visual Studio Code and add a new file called bot.js to it.

Write the code logic in (.js file)

NOTE:

Creating Bot and Getting API Token:
Open the telegram app and search for @BotFather.
Click on the start button or send “/start”.
Then send “/newbot” message to set up a name and a username.
The BotFather will then give you an API token.

Getting Movie API Key:
Go to the OMDB (open movie database ) website.
Create an account as per the limit.
You will receive your own API key.

Running the code:

Open terminal in vscode and type node bot.js (or) copy bot.js file in telegram folder . Run with the path where folder got located and in the cmd type node bot.js 

After executing the source code, open the Telegram app in mobile/desktop.

Click on your own bot link and after opening the created bot account , click start button.(This step is done , when you use it for the first time)

Later times , directly go the account you have created and type /start and then you can chat by messages or type /movie movie_name there you will be getting the information about the required movie.


