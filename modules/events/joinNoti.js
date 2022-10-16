module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "7.3.1",
	credits: "Plue",
	description: "Notification of bots or people entering groups with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": "",
    "@supercharge/strings": ""
	}
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	
 
	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event, Threads}) {
	const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const { join } = global.nodemodule["path"];
	const { threadID } = event;
const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
 
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`=== Connected successfully! ===\nThank you for using this bot, have fun using it\n\nUsage: ${global.config.PREFIX}help\nUse ${global.config.PREFIX}calladmin if there is an error to the Bot.. the developer will try to fix this as soon as possible.`} , threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      
 
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
 
 
			var mentions = [], nameArray = [], memLength = [], i = 0;
 
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
 
 
  let pathImg = __dirname + "/cache/joinnoti.png";
  let pathAvata = __dirname + `/cache/avt.png`;
  let pathIcon = __dirname + `/cache/avtuserthread.png`;
 
  let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
 
const res = await api.getUserInfoV2(userID); 
var threadInfos = await api.getThreadInfo(threadID);
  let threadNames = threadInfos.threadName;
const fs = global.nodemodule["fs-extra"];
const request = require('request');
const Canvas = global.nodemodule["canvas"];
const { loadImage, createCanvas } = require("canvas");
const knights = require("knights-canvas");
const Str = require('@supercharge/strings')
let num = memLength.join(', ')
let user = nameArray.join(', ')
let gc = threadName;
const limit = Str(`${user}`).limit(20, '...').get();
const gcname = Str(`${gc}`).limit(25, '...').get();
const number = Str(`${num}`).limit(2, '').get();
// ok na yan wag mo i edit itong variable na nasa taas

          
    let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${userID}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(Avatar, "utf-8"));
  avataruser = await this.circle(pathAvata);

    var bgimg = ["https://i.postimg.cc/pdptCchG/124604e3dbfba8da3fa63e223a16e281.jpg",
"https://i.postimg.cc/h49R2dvB/3557d20622f64a353546caec39ee02cf.jpg",
"https://i.postimg.cc/CLGMn2kb/3d22fd01c867668a5ab41efd99ebc93c.jpg",
"https://i.postimg.cc/7Ykw4Ndh/58148822f746ab16f4d8c2d235b00abc.jpg",
"https://i.postimg.cc/sxRdVVnq/5a54b72ecdb6dd2adef71cac1ee5ae7b.jpg",
"https://i.postimg.cc/FFcNw6Pw/748968adc0251d3ff1f108491ed8030f.jpg",
"https://i.postimg.cc/XY2bw6JB/9b0c7374a6406e17b6b301aea48c9f2e.jpg",
"https://i.postimg.cc/vZmR82zY/9b84a4087abc8c7bd95d3c38670a3658.jpg",
"https://i.postimg.cc/DzM7K333/a1ea37ff55116bcdf478404177bb249a.jpg",
"https://i.postimg.cc/B6P4S7JL/b71ce8f58aada5d09c49c34638979379.jpg",
"https://i.postimg.cc/3NM7djwL/bdd77da424c0bcb1c14e423c361af253.jpg",
"https://i.postimg.cc/VvjwMSrz/c90396a0ce033a33f750f54ae98677ec.jpg",
"https://i.postimg.cc/KYwhH7tZ/ce7e9c87126fcc7855cbc1948fe0c75c.jpg",
"https://i.postimg.cc/7Y98krSt/d88a3f0d09f8bb0db4ed71fabb069eb7.jpg",
"https://i.postimg.cc/RFtx53Tw/e0fb210a7f3bd39d36b961bc0c548786.jpg",
"https://i.postimg.cc/fTfZR9QK/e2858ccd7e72721221c888333ac93417.jpg",
"https://i.postimg.cc/GpZ6QL1t/e8acd0a4136ad6482a5d90ce8ed82323.jpg",
"https://i.postimg.cc/mgpvP3XQ/f7d6a889e6688ea80495852b639da30c.jpg"
];
    var rdmbg = bgimg[Math.floor(Math.random() * bgimg.length)]
          
    let getWanted = (
    await axios.get(`https://api.popcat.xyz/welcomecard?background=${rdmbg}&text1=${limit}&text2=WELCOME+TO+THIS+GROUP&text3=Enjoy !!!&avatar=https://cdn.discordapp.com/embed/avatars/0.png`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
    
    let Icon = (
    await axios.get(encodeURI(
      `${threadInfos.imageSrc}`),
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathIcon, Buffer.from(Icon, "utf-8"));
          
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, 389, 44, 245, 245);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);

    /*.setAvatar(`${pathAvata}`)
    .setUsername(`${limit}`) 
    .setBg("https://i.imgur.com/m27Ek6Y.jpeg") 
    .setGroupname(`${gcname}`) 
    .setMember(`${number}`) 
    .toAttachment();*/
  
 
			(typeof threadData.customJoin == "undefined") ? 
 
 
 
        msg = "====== WECOME ======\n► Hi {name}!\nWelcome to {threadName}!.\n\nWe are happy to see you and join here. Enjoy!♥" : msg = threadData.customJoin;
 
      msg = msg
			.replace(/\{name}/g, nameArray.join(' , '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
			.replace(/\{mems}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);
 
 
 
		return api.sendMessage({body: msg, attachment: fs.createReadStream(pathImg) }, event.threadID, () => fs.unlinkSync(pathImg)); 
}
		} catch (e) { return console.log(e) };
	}
      }