module.exports = {
    config: {
        name: "bot",
        version: "1.0",
        author: "MR.AYAN",//**original anthor fb I'd : https://m.me/MR.AYAN.2X **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "bot") return message.reply("আ্ঁমি্ঁ mira ব্ঁলে্ঁন্ঁ আ্ঁপ্ঁনা্ঁর্ঁ জ্ঁন্য্ঁ কি্ঁ ক্ঁর্ঁতে্ঁ পা্ঁরি্ঁ!!😑");
}
}; 
