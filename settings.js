const fs = require('node:fs');

const config = {
    owner: ["6282244004772"],
    name: "ᴍɪᴜʀᴀᴋᴀɪᴋᴜɴ-ʙᴏᴛᴢ",
    ownername: 'Hiroshi', 
    ownername2: 'Hiroshi',
    prefix: [".", "?", "!", "/", "#"], //Tambahin sendiri prefix nya kalo kurang
    wwagc: 'https://chat.whatsapp.com/HIA40dn2HNI6ZcRxw5tEOc',
    saluran: '12036@newsletter', 
    jidgroupnotif: '12036@g.us', 
    saluran2: '1203633357@newsletter', 
    jidgroup: '1203632671@g.us', 
    wach: 'https://whatsapp.com/channel/00W', 
    sessions: "sessions",
    sticker: {
      packname: "〆 ʜᴀɴᴀᴋᴏ-ᴋᴜɴ-ʙᴏᴛᴢ",
      author: "ʙʏ: ᴅᴇᴋᴜ/ʟᴇᴏᴏxᴢʏ 〆"
    },
   messages: {
      wait: "tunggu sebentar ya bre",
      owner: "lu bukan owner bot",
      premium: "fitur ini khusus user premium",
      group: "fitur ini khusus group",
      botAdmin: "lu siapa jir? lu bukan admin group bro",
      grootbotbup: "jadikan bot admin dulu baru bisa akses",
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
