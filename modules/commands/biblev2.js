module.exports.config = {
	name: "bible",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "random anime qoutes with character",
	commandCategory: "Random Text",
	usages: "",
	cooldowns: 5,
	dependencies: {
		"axios":""}
	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://quotes.rest/bible/verse.json`);
var verse = res.data.contents.verse
var book = res.data.contents.book 
var chapter = res.data.contents.chapter
var number = res.data.contents.number  
return api.sendMessage(` From the book of:${book} Chapter:${chapter}:${number} 
\n\n${verse}`, event.threadID, event.messageID)
}