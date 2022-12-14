module.exports.config = {
	name: "ping",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "tag all members and check online",
	commandCategory: "utilities",
	usages: "[Text]",
	cooldowns: 80
};

module.exports.run = async function({ api, event, args }) {
	try {
		const botID = api.getCurrentUserID();
		var listAFK, listUserID;
		global.moduleData["afk"] && global.moduleData["afk"].afkList ? listAFK = Object.keys(global.moduleData["afk"].afkList || []) : listAFK = []; 
		listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
		listUserID = listUserID.filter(item => !listAFK.includes(item));

    
		var body = (args.length != 0) ? args.join(" ") : "@everyone\nšš¢š§ is now Online!\nPing : 16ms", mentions = [], index = 0;
		for(const idUser of listUserID) {
			body = "ā" + body;
			mentions.push({ id: idUser, tag: "ā", fromIndex: index - 1 });
			index -= 1;
		}

		return api.sendMessage({ body, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
      }