module.exports.config = {
	name: "newyear",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Countdown to NEW YEAR",
	commandCategory: "Tools",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("January 1, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`π₯³πππππ πππ ππππ inπ₯³\nΒ»${days} days ${hours} hours ${minutes} mins ${seconds} secsΒ«`, event.threadID, event.messageID);
}