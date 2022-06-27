
var TelegramBot= require('node-telegram-bot-api')

token="5225146267:AAHPsRBYb_udPC9YAUFLmLuUAkNA0O7xwbo"  
var bot= new TelegramBot(token, {polling:true});
bot.on("polling_error", (err) => console.log(err));

bot.on('message', (msg) => {
var Hi = "hi";

if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {

bot.sendMessage(msg.chat.id,"Hello dear user");

} 

var bye = "bye bot";
    if(msg.text.toString().toLowerCase().includes(bye)) {
    b = 1;
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
    }  
    var ok = "okay";
    if(msg.text.toString().toLowerCase().includes(ok)) {
    d = 1;
    bot.sendMessage(msg.chat.id, "Is there any movie that you want know about");
    }  
   
    var start = "what can you do";
    if(msg.text.toString().toLowerCase().includes(start)) {
    c =1;
    bot.sendMessage(msg.chat.id, "I can help you to get information about movie that you want know, by the command /movie movie_name");
    }    
    
});

var reques=require('request')
bot.onText(/\/movie (.+)/,function(msg,match){
    var movie= match[1];
    var chatId=msg.chat.id
    reques('http://www.omdbapi.com/?t='+movie+'&apikey=3dc32c62',function(error,response,body){
		
		
        
		if(!error && response.statusCode==200)
        {
            bot.sendMessage(chatId,'Looking for '+movie+'...',{parse_mode: "Markdown"})
            .then(msg)
            {
                res=JSON.parse(body)
                bot.sendPhoto(chatId, res.Poster, {caption: 'Result:\nTitle: '+ res.Title +'\nGenre: '+ res.Genre +'\nRated: '+ res.Rated+ '\nReleased: '+ res.Released})
            }
        }
    })

})