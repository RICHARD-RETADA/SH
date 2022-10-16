module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Check admin information.",
  commandCategory: "Thông tin admin",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/VkGbdbCW/20220909-171813.jpg",
  ];
  var callback = () => api.sendMessage({body:`「ADMIN」
  👀 Name: Richard Retada
💮 Nickname: Chard
Age: 19
👤Gender: Male
💫 Height: 5'5
💘 Relationship: Single
🌎 Hometown: Rizal
👫 Skills: secret
🌸 Personality: Quiet
🌀 Hobbies: Playing games, listening to music
Contact💻
☎ Tel: 09462776671
🌐Facebook:https://www.facebook.com/richardretada,official
✉️ Email: richardretada@gmail.com
             
             » Complete`,attachment: fs.createReadStream(__dirname + "/cache/nah.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/nah.jpg")).on("close",() => callback());
   };