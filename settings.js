const fs = require('node:fs');

const config = {
    owner: ["6282244004772"],
    name: "ᴍɪᴜʀᴀᴋᴀɪᴋᴜɴ-ʙᴏᴛᴢ",
    ownername: 'Hiroshi', 
    ownername2: 'Hiroshi',
    prefix: [".", "?", "!", "/", "#"], //Tambahin sendiri prefix nya kalo kurang
    wwagc: 'https://chat.whatsapp.com/HIA40dn2HNI6ZcRxw5tEOc',
    saluran: '12036327919@newsletter', 
    jidgroupnotif: '12036326675@g.us', 
    saluran2: '12036333701540@newsletter', 
    jidgroup: '12036326710269@g.us', 
    wach: '', 
    sessions: "sessions",
    sticker: {
      packname: "",
      author: ""
    },
   messages: {
      wait: "tunggu sebentar ya bre",
      owner: "lu bukan owner bot",
      premium: "fitur ini khusus user premium",
      group: "fitur ini khusus group",
      botAdmin: "lu siapa jir? sadar lu bukan admin group",
      grootbotbup: " jadikan bor admin dulu baru bisa akses",
   },
   database: "hanako-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
