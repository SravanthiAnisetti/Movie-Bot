var TelegramBot= require('node-telegram-bot-api')

token="5225146267:AAHPsRBYb_udPC9YAUFLmLuUAkNA0O7xwbo"  //token obtained from bot father
var bot= new TelegramBot(token, {polling:true});
bot.on("polling_error", (err) => console.log(err));

var reques=require('request')

bot.onText(/\/movie (.+)/,function(msg,match){
    var movie= match[1];
    var chatId=msg.chat.id
    reques('http://www.omdbapi.com/?t='+movie+'&apikey=3dc32c62',function(error,response,body){
		
		//key obtained from omdbapi
        
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