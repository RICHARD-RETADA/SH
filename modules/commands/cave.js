module.exports.config = {
	name: "cave",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Huy",
	description: "Bรกn vแปn tแปฑ cรณ",
	commandCategory: "Make money",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1000000
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐๐ก๐ขฬฃ๐๐ก ๐ญ๐ซ๐จ๐ง๐  ๐ก๐จฬ๐ฆ ๐ง๐๐ฒ ๐ซ๐จฬฬ๐ข, ๐ญ๐ซ๐ฬ๐ง๐ก ๐๐ขฬฃ ๐ค๐ข๐ฬฃฬ๐ญ ๐ฌ๐ฎฬฬ๐ ๐ก๐ฬ๐ฒ ๐ช๐ฎ๐๐ฒ ๐ฅ๐ฬฃ๐ข ๐ฌ๐๐ฎ: %1 ๐ฉ๐ก๐ฎฬ๐ญ %2 ๐ ๐ข๐ฬ๐ฒ ๐",
        "rewarded": "๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐๐ก๐ขฬฃ๐๐ก ๐จ๐ฏ๐๐ซ๐ง๐ข๐ ๐ก๐ญ ๐ฏ๐จฬฬ๐ข ๐๐ฎฬฃ ๐๐จ๐ค๐ฎ๐๐ ๐ฏ๐ฬ ๐ง๐ก๐ฬฃฬ๐ง ๐ฏ๐ฬฬ %2$ ๐ธ",
        "job1": "Bแบกn ฤรฃ bรกn vแปn tแปฑ cรณ!",
    },
    "en": {
        "cooldown": "You have worked today, to avoid exhaustion please come back after: %1 minute(s) %2 second(s).",
        "rewarded": "You did the job: Cave and received: %2$",
        "job1": "Cave",
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 20000),
            seconds = ((time % 20000) / 500).toFixed(0);
        
		return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {
        const job = [
            getText("job1"),
        ];
        const amount = Math.floor(Math.random() * 10000);
        return api.sendMessage(getText("rewarded", job[Math.floor(Math.random() * job.length)], amount), threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
      }