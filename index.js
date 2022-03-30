const {Telegraf} =require('telegraf');
require("dotenv").config()
const bot = new Telegraf(process.env.BOT_TOKEN)
const fs = require("fs");

bot.start((ctx) => {   
    ctx.reply(`Assalomu aleykum ${ctx.from.first_name} hush kelibsiz !,
bo'limlarni tanlash uchun /bolim ni bosing`);
})

bot.command("bolim", (ctx)=>{
    bot.telegram.sendMessage(ctx.chat.id, "Bo'limni Tanlang: ",  {
        reply_markup: {
            one_time_keyboard: true,
            inline_keyboard:[
                [
                    {text: "Konsultatsiya olish", url: "https://t.me/hindstonda_davolanish"},
                    {text: "Viza Hizmatlari", url: "https://t.me/kamalova_umida"},
                ],
                [
                    {text: "Dori-Darmonlar", url: "https://t.me/hindstonda_davolanish"},
                ],
            ]},
    })
})



bot.launch();