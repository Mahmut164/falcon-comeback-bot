require("dotenv").config();

console.log("TOKEN var mı:", !!process.env.TOKEN);
console.log("TOKEN ilk 5 karakter:", process.env.TOKEN?.slice(0, 5));

setInterval(() => {
  console.log("Bot test çalışıyor...");
}, 10000);
