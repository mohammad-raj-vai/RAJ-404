const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "2.0",
    author: "RAJ",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = "😘__________𝙳𝙴𝚅𝙸𝙳";
    const botPrefix = "!";
    const authorName = "𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙹";
    const authorFB = "https://www.facebook.com/profile.php?id=100085082042087";
    const whatsapp = "01830736888";
    const status = "𝚂𝙸𝙽𝙶𝙻𝙴";

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/info.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Dhaka');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}h ${minutes}m ${seconds}sec`;

    message.reply({
      body: `
≡≡║𝗕𝗼𝘁 & 𝗢𝘄𝗻𝗲𝗿 𝗜𝗻𝗳𝗼║≡≡
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

❏ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲↠ ${botName}

❏𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅↠ ${botPrefix}

❏𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲↠ ${authorName}

❏𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸↠ ${authorFB}

❏𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺↠ ${whatsapp}

❏𝗦𝘁𝗮𝘁𝘂𝘀↠ ${status}

❏𝗗𝗮𝘁𝗲↠ ${date}

❏𝗧𝗶𝗺𝗲↠ ${time}

❏𝗨𝗽𝘁𝗶𝗺𝗲↠ ${uptimeString}

﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋
𝗧𝗵𝗮𝗻𝗸𝘀 𝗙𝗼𝗿 𝗨𝘀𝗶𝗻𝗴 ↠ ${botName}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
}; 
