***ᴍɪᴜʀᴀᴋᴀɪᴋᴜɴ-ʙᴏᴛᴢ | 1.0*** | ***Create By: hiroshi || base: script Axel network***

![Logo](https://files.catbox.moe/movzsb.jpg)

***By creator:***
![logo](https://files.catbox.moe/nogonh.png)

```> Simple WhatsApp bot Using Library Baileys```

```javascript
{
  message: Message { conversation: '>_ Welcome to miurakai' },
  type: 'conversation',
  msg: '>_ Welcome to ᴍɪᴜʀᴀᴋᴀɪᴋᴜɴ-ʙᴏᴛᴢ',
  isMedia: false,
  key: {
    remoteJid: '6283136099660@s.whatsapp.net',
    participant: '6283136099660@s.whatsapp.net',
    fromMe: false,
    id: '5780C33F89C0BE600B6D71DF79C4FC02'
  },
  cht: '6283136099660@s.whatsapp.net',
  fromMe: false,
  id: '5780C33F89C0BE600B6D71DF79C4FC02',
  device: 'android',
  isBot: false,
  isGroup: false,
  participant: '6283136099660@s.whatsapp.net',
  sender: '6283136099660@s.whatsapp.net',
  mentions: [],
  body: '>_ Welcome to HanakoBotz',
  prefix: '',
  command: '>_',
  args: [ 'welcome', 'to', 'ᴍɪᴜʀᴀᴋᴀɪᴋᴜɴ-ʙᴏᴛᴢ' ],
  text: 'Welcome to ᴍɪᴜʀᴀᴋᴀɪᴋᴜɴ-ʙᴏᴛᴢ',
  isOwner: true,
  download: [AsyncFunction (anonymous)]
}
```
## ⚙️ Settings Bot ***( settings.js )***

```javascript
const config = {
    owner: ["6282244004772"],
    name: "ᴍɪᴜʀᴀᴋᴀɪᴋᴜɴ-ʙᴏᴛᴢ",
    ownername: 'Hiroshi', 
    ownername2: 'Hiroshi',
    prefix: [".", "?", "!", "/", "#"], //Tambahin sendiri prefix nya kalo kurang
    wwagc: 'https://chat.whatsapp.com/HIA40dn2HNI6ZcRxw5tEOc',
    saluran: '120363279195205552@newsletter', 
    jidgroupnotif: '120363266755712733@g.us', 
    saluran2: '120363335701540699@newsletter', 
    jidgroup: '120363267102694949@g.us', 
    wach: 'https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W', 
    sessions: "sessions",
    sticker: {
      packname: "",
      author: ""
    },
   messages: {
      wait: "*( Loading )* Tunggu Sebentar...",
      owner: "*( Denied )* Kamu bukan owner ku !",
      premium: "*( Denied )* Fitur ini khusus user premium",
      group: "*( Denied )* Fitur ini khusus group",
      botAdmin: "*( Denied )* Lu siapa bukan Admin group",
      grootbotbup: "*( Denied )* Jadiin Yuta-Botz admin dulu baru bisa akses",
   },
   database: "hanako-db",
   tz: "Asia/Jakarta"
}

module.exports = config
```


## 👨‍💻 How to install/run


```bash
$ git clone https://github.com/FrankXz12/HanakoBotz
$ cd HanakoBotz
$ npm install
$ npm start
```

## ☘️ Example Features
Berikut cara menambahkan fitur pada bot ini

## 1. Plugins

```javascript

module.exports = {
    command: "tes", //- Nama fitur nya
    alias: ["tesbot", "testing"], //- Short cut command
    category: ["main"], //- Kategori Fitur 
    settings: {
        owner: false, //-  Apakah Fitur ini khusus owner ?
        group: false, // - Apakah Fitur ini khusus group ?
     },
    description: "Tes bot saja", //- Penjelasan tentang fitur nya
    loading: true, //- Ingin menambahkan loading messages ?
 async run(m, { sock, client, conn, DekuGanz, Func, Scraper, text, config }) {
    m.reply("> Bot Online ✓")
  }
}
```
## 2. Case

```javascript
case "tes" : {
     m.reply("> Bot Online ✓")
   }
break
```
## 📢 Jgn Lupa Follow Channel dan Join Group ya

**Base Sc:**

**Group-1: https://chat.whatsapp.com/HIA40dn2HNI6ZcRxw5tEOc**

**Group-2: https://chat.whatsapp.com/ExLN5FFuIGC8i6Z7p6LDs8**
