module.exports.config = {
    name: "sim",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "ProcodeMew", //change api sim Hoang Giap
    description: "\x43\x68\x61\x74\x20\x77\x69\x74\x68\x20\x73\x69\x6d\x73\x69\x6d\x69\x20\x41\x49\x2e\x20\x46\x69\x78\x65\x64\x20\x62\x79\x20\x4a\x6f\x68\x6e\x20\x4c\x65\x73\x74\x65\x72",
    commandCategory: "Chat same sim",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function simsimi(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://api.simsimi.net/v2/?text=${g(a)}&lc=en`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.simsimi && (global.simsimi = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.success)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);

    var hichthi = ["Yes?","Oh bakit?","Ano na naman?","Tatanong ka na naman? Kiss muna -,-","Tanong mo sa pagong.","Oh ano? lagi naman akong mali eh.","Kakausapin mo ko tapos ano? mafafall ako sayo?, tapos ano?, madedevelop tayo sa isat isa?, tapos ano? uutuin moko?, tapos ano? ighoghost mo nalang ako sa huli?, jusme salamat nalang sa lahat"];
  var simps = hichthi[Math.floor(Math.random() * hichthi.length)];
  
    if (0 == c.length) return f(`${simps}`);
    switch (c[0]) {
        case "on":
            return global.simsimi.has(d) ? f("You have not turned off the sim.") : (global.simsimi.set(d, e), f("Successfully enabled sim."));
        case "off":
            return global.simsimi.has(d) ? (global.simsimi.delete(d), f("Successfully disabled sim.")) : f("You have not enabled the sim.");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    }
};
