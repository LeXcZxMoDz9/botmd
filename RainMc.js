
process.on('uncaughtException', console.error)
require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageContent, generateWAMessage, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const fs = require('fs')
const cron = require('node-cron')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const fsx = require('fs-extra')
const dns = require('dns');
const FormData = require('form-data')
const gtts = require('node-gtts')
const ytdl = require("ytdl-core")
const cheerio = require('cheerio');
const ms = require("ms");
const crypto = require('crypto')
const https = require('https')
const tkApi = require('@tobyg74/tiktok-api-dl')
const { URL_REGEX } = require('@whiskeysockets/baileys')
const { fileTypeFromBuffer } = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const { Pixiv } = require('@ibaraki-douji/pixivts')
const pixiv = new Pixiv()
const bingi = require('bing-scraper')
const phd = require('@justalk/pornhub-api')
const xfar = require('xfarr-api')
const dylux = require('api-dylux')
const nou = require("node-os-utils");
const dhn = require('dhn-api')
const g4f = require("g4f")
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require("util")
const jimp = require('jimp')
const kotz = require("kotz-api");
const zsExtract = require('zs-extract')
const acrcloud = require('acrcloud')
const { ocrSpace } = require('ocr-space-api-wrapper')
const mann = require('d-scrape')
const content = JSON.stringify(m.message)
const isQuotedViewonce = m.quoted ? content.includes('viewOnceMessage') ? true : false : true
const { youtubedl, youtubedl2 } = require('@bochilteam/scraper-sosmed')
const { Configuration, OpenAIApi } = require('openai')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const maker = require('mumaker')
const yts = require("yt-search")
const jsobfus = require('javascript-obfuscator')
const { exec, spawn, execSync } = require("child_process")
const { addExif } = require('./lib/exif')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, formatp, parseMention, getRandom, getGroupAdmins,generateProfilePicture, toRupiah, shorturl, enumGetKey, sort,pickRandom, toNumber, randomNumber } = require('./lib/myfunc')
const { TelegraPH } = require("./lib/TelegraPH")
const { search, ytmp3, ytmp4 } = require('./lib/searchyt')
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const ntilink = JSON.parse(fs.readFileSync("./lib/ntilink.json"))
const { ssweb, tiktok, remini,findSongs } = require("./lib/scraper")
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')
//=================================================//
module.exports = RainMe = async (RainMe, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''

//WM By Rulzz, Titenono lek ko hapus le😹
 async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: RainMe.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, RainMe.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'}
RainMe.ev.emit('messages.upsert', msg)}
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
//=================================================//
const Styles = (text, style = 1) => {
var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
};
var replacer = [];
xStr.map((v, i) =>
replacer.push({
original: v,
convert: yStr[style].split('')[i]
})
);
var str = text.toLowerCase().split('');
var output = [];
str.map((v) => {
const find = replacer.find((x) => x.original == v);
find ? output.push(find.convert) : output.push(v);
});
return output.join('');
};
const pushname = m.pushName || "No Name"
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const botNumber = await RainMe.decodeJid(RainMe.user.id)
const isRegistered = checkRegisteredUser(m.sender)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await RainMe.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const jangan = m.isGroup ? ntilink.includes(m.chat) : false	
const welcm = m.isGroup ? wlcm.includes(from) : false
const chat = m.isGroup?[m.chat] : false
const qmsg = (quoted.msg || quoted)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
//const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const qtod = m.quoted? "true":"false"
//================== [ TIME ] ==================//
const hariini = moment.tz('Asia/Makassar').format('dddd, DD MMMM YYYY')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const tanggal2 = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')


const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//=================================================//
// function
msToDate = (ms) => {
  let years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  let months = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  let weeks = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7)
  );
  let days = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
  );
  return `${years} tahun ${months} bulan ${weeks} minggu ${days} hari`;
};
//day
msToDay = (ms) => {
  let temp = ms;
  let years = Math.floor(temp / (365 * 24 * 60 * 60 * 1000));
  temp = temp % (365 * 24 * 60 * 60 * 1000);
  let months = Math.floor(temp / (30 * 24 * 60 * 60 * 1000));
  temp = temp % (30 * 24 * 60 * 60 * 1000);
  let weeks = Math.floor(temp / (7 * 24 * 60 * 60 * 1000));
  temp = temp % (7 * 24 * 60 * 60 * 1000);
  let days = Math.floor(temp / (24 * 60 * 60 * 1000));
  temp = temp % (24 * 60 * 60 * 1000);
  let hours = Math.floor(temp / (60 * 60 * 1000));
  temp = temp % (60 * 60 * 1000);
  let minutes = Math.floor(temp / (60 * 1000));
  temp = temp % (60 * 1000);

  let result = "";
  if (years > 0) {
    result += years + (years > 1 ? " tahun " : " tahun ");
  }
  if (months > 0) {
    result += months + (months > 1 ? " bulan " : " bulan ");
  }
  if (weeks > 0) {
    result += weeks + (weeks > 1 ? " minggu " : " minggu ");
  }
  if (days > 0) {
    result += days + (days > 1 ? " hari " : " hari ");
  }
  if (hours > 0) {
    result += hours + (hours > 1 ? " jam " : " jam ");
  }
  if (minutes > 0) {
    result += minutes + (minutes > 1 ? " menit " : " menit ");
  }
  return result.trim();
};
//SKREP
const { bard } = require('./lib/bard')

//================== [ RESPON ALL GAME ] ==================//

const kalgans = {
key: {
participant: '0@s.whatsapp.net',
...(m.chat ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
locationMessage: {
name: `${botname}`,
jpegThumbnail: "",
}
}}

const reply2 = (teks) => {
RainMe.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: 'LeXcZ In Here',
mimetype: 'application/msword',
jpegThumbnail:fs.readFileSync("./media/asep.jpg"),
caption: `\n${teks}`,
}, { quoted: kalgans,ephemeralExpiration: 86400});
}

async function reply(teks) {
const nedd = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: global.botname,
newsletterJid: global.idcennel,
},
externalAdReply: {  
showAdAttribution: true,
title: `${botname}`,
body: foter1,
previewType: "VIDEO",
thumbnailUrl: thumbnail, 
sourceUrl: hariini, 
},
},
text: teks,
};
return RainMe.sendMessage(m.chat, nedd, {
quoted: kalgans,
});
}

try {
let id = m.chat;
let timeout = 180000;
let hadiah = randomNumber(10000, 20000);
let users = global.db.data.users[m.sender];
let budy = typeof m.body == 'string' ? m.body : false;
RainMe.bomb = RainMe.bomb ? RainMe.bomb : {};
            
if (RainMe.bomb[id] && !isNaN(body) && !isCmd) {
let json = RainMe.bomb[id][1].find(v => v.position == body);
if (!json) return
if (json.emot == '💥') {
json.state = true;
let bomb = RainMe.bomb[id][1];
let teks = `*DUARRRRRR 💥*\n\n`;
teks += bomb.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += bomb.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `@${m.sender.split("@")[0]} membuka kotak yang berisi *Bom* Game di hentikan!`
RainMe.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/da5e5612ccead39af2e93.jpg", title: " 🎮  𝗚 𝗔 𝗠 𝗘 - 𝗧 𝗘 𝗕 𝗔 𝗞 - 𝗕 𝗢 𝗢 𝗠  🎮", body: null, renderLargerThumbnail: true, sourceUrl: null, mediaType: 1}}}, {quoted: kalgans}).then(() => {
clearTimeout(RainMe.bomb[id][2]);
delete RainMe.bomb[id];
});
} else if (json.state) {
return RainMe.sendText(m.chat, `Kotak ${json.number} sudah di buka silahkan pilih kotak yang lain!`, m);
} else {
json.state = true;
let changes = RainMe.bomb[id][1];
let open = changes.filter(v => v.state && v.emot != '💥').length;

if (open >= 8) {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `*Permainan selesai!* kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

RainMe.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
clearTimeout(RainMe.bomb[id][2]);
delete RainMe.bomb[id];
});
} else {
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
teks += changes.slice(0, 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(3, 6).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += changes.slice(6).map(v => v.state ? v.emot : v.number).join('') + '\n\n';
teks += `Waktu : *${((timeout / 1000) / 60)} menit*\n`;
teks += `Kotak berisi bom tidak terbuka\n*+ $${toRupiah(hadiah)} balance* ke @${m.sender.split("@")[0]}`;

RainMe.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender]}}, {quoted: kalgans}).then(() => {
db.data.users[m.sender].balance += hadiah;
});
}
}
}
} catch (e) {
return RainMe.sendText(m.chat, e.toString(), m);
}

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
await reply(`*GAME FAMILY 100*\n\nJawaban kamu benar!\nJawaban: ${i}\nHadiah: $${hadiah}\n\n${jawaban.length < 1 ? 'Selamat semua jawaban sudah tertebak!\ningin bermain lagi? kirim '+prefix+'family100' : 'Jawaban yang belum tertebak: '+jawaban.length}`)
db.data.users[m.sender].balance += hadiah
}
}
if (jawaban.length < 1){
clearTimeout(waktu);
delete family100[from];
}
}

try {
let roof = Object.values(suit).find(v => v.status && [v.penantang, v.ditantang].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.ditantang && m.isGroup && roof.status == 'WAIT') {
if (body.toLowerCase() === 'y') {
roof.status = 'PLAY'
roof.asal = m.chat
clearTimeout(roof.waktu)
uselimit()
await RainMe.sendMessage(m.chat, {text: 'Suit telah dikirimkan ke chat\nSilahkan pilih suit di chat masing²', contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: m})
if (!roof.pilih1) await RainMe.sendText(roof.penantang, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
if (!roof.pilih2) await RainMe.sendText(roof.ditantang, `*Silahkan pilih dibawah ini :*\n✂ Gunting\n📄 Kertas\n🗿 Batu\n\nContoh jika kamu ingin memilih gunting ketik *Gunting*`, m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await RainMe.sendMessage(m.chat, {text: `Kedua pemain tidak niat main!\nGame suit dibatalkan`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.ditantang : roof.penantang
await RainMe.sendMessage(m.chat, {text: `@${(roof.pilih ? roof.ditantang : roof.penantang).split('@')[0]} tidak memilih suit\nGame suit dibatalkan`, contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: kalgans})
}
delete suit[roof.id]
return !0
}, roof.timeout)
} else if (body.toLowerCase() === 'n') {
await RainMe.sendMessage(m.chat, {text: `@${roof.ditantang.split('@')[0]} menolak suit, suit dibatalkan`, contextInfo: {mentionedJid: [roof.ditantang]}}, {quoted: m})
delete suit[roof.id]
return !0
}
}
let jwb = m.sender == roof.penantang
let jwb2 = m.sender == roof.ditantang
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(budy) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(budy.toLowerCase())[0]
roof.text = budy
await RainMe.sendMessage(m.chat, {text: `Kamu telah memilih *${budy}* ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted: m})
if (!roof.pilih2) await RainMe.sendMessage(roof.ditantang, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(budy) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(budy.toLowerCase())[0]
roof.text2 = budy
await RainMe.sendMessage(m.chat, {text: `Kamu telah memilih *${budy}* ${!roof.pilih ? '\n\nMenunggu lawan memilih' : ''}`}, {quoted: m})
if (!roof.pilih) await RainMe.sendMessage(roof.penantang, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.penantang
else if (b.test(stage) && k.test(stage2)) win = roof.ditantang
else if (g.test(stage) && k.test(stage2)) win = roof.penantang
else if (g.test(stage) && b.test(stage2)) win = roof.ditantang
else if (k.test(stage) && b.test(stage2)) win = roof.penantang
else if (k.test(stage) && g.test(stage2)) win = roof.ditantang
else if (stage == stage2) tie = true
let teks = `*🎮 GAME SUIT 🎮*\n\n${tie ? '*HASIL SERI*\n\n' : ''}@${roof.penantang.split('@')[0]} (${roof.text}) ${tie ? '' : roof.penantang == win ? ' Menang' : ' Kalah'}\n@${roof.ditantang.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.ditantang == win ? ' Menang' : ' Kalah'}${tie ? '' : '\n\nHadiah : *$' + roof.hadiah + '* balance'}`
await RainMe.sendMessage(roof.asal, {text: teks, contextInfo: {mentionedJid: [roof.ditantang, roof.penantang]}}, {quoted: roof.chat})
if (roof.penantang == win) {
global.db.data.users[roof.penantang].balance += roof.hadiah
} else if (roof.ditantang == win) {
global.db.data.users[roof.ditantang].balance += roof.hadiah
}
delete suit[roof.id]
}
}
} catch (e) {
return reply(e)
}

const isTicTacToe = (from, _dir) => {
let status = false
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
status = true
}
})
return status
}
const getPosTic = (from, _dir) => {
let position = null
Object.keys(_dir).forEach((i) => {
if (_dir[i].id === from) {
position = i
}
})
if (position !== null) {
return position
}
}
const KeisiSemua = (tic) => {
let status = true
for (let i of tic){
if (i !== '❌' && i !== '⭕'){
status = false
}
}
return status
}
const cekIsi = (nomor, tic) => {
let status = false
if (tic[nomor] === '❌' || tic[nomor] === '⭕'){
status = true
}
return status
}
const cekTicTac = (tic) => {
let status = false
if (tic[0] === '❌' && tic[1] === '❌' && tic[2] === '❌' || tic[0] === '⭕' && tic[1]=== '⭕' && tic[2] === '⭕'){
status = true
} else if (tic[3] === '❌' && tic[4] === '❌' && tic[5] === '❌' || tic[3] === '⭕' && tic[4] === '⭕' && tic[5] === '⭕'){
status = true
} else if (tic[6] === '❌' && tic[7] === '❌' && tic[8] === '❌' || tic[6] === '⭕' && tic[7] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[3] === '❌' && tic[6] === '❌' || tic[0] === '⭕' && tic[3] === '⭕' && tic[6] === '⭕'){
status = true
} else if (tic[1] === '❌' && tic[4] === '❌' && tic[7] === '❌' || tic[1] === '⭕' && tic[4] === '⭕' && tic[7] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[5] === '❌' && tic[8] === '❌' || tic[2] === '⭕' && tic[5] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[0] === '❌' && tic[4] === '❌' && tic[8] === '❌' || tic[0] === '⭕' && tic[4] === '⭕' && tic[8] === '⭕'){
status = true
} else if (tic[2] === '❌' && tic[4] === '❌' && tic[6] === '❌' || tic[2] === '⭕' && tic[4] === '⭕' && tic[6] === '⭕'){
status = true
}
return status 
}
if (isTicTacToe(from, tictactoe)) {
try {
// TicTacToe
if (isTicTacToe(from, tictactoe)){
let nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let posi = tictactoe[from]
let anu = posi.TicTacToe
if (posi.status === null){
if (sender === posi.ditantang){
if (body.toLowerCase() === 'y'){
the = `@${posi.ditantang.split('@')[0]} menerima tantangan

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
RainMe.sendText(from, the, m)

tictactoe[from].status = true
} else if (body.toLowerCase() === 'n'){
db.data.users[m.sender].balance -= 100
the1 = `@${posi.ditantang.split('@')[0]} menolak, game dibatalkan\nDan Player dikenakan sanksi -100 balance karna menolak ajakan pemain`
RainMe.sendText(from, the1, m)
delete tictactoe[from];
}
}
} else if (posi.status === true){
if (sender === posi.penantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '❌'
if (cekTicTac(tictactoe[from].TicTacToe)){
the2 = `@${posi.penantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
RainMe.sendText(from, the2, m)
global.db.data.users[posi.penantang].balance += posi.hadiah
global.db.data.users[posi.ditantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the3 = `*HASIL SERI*

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
RainMe.sendText(from, the3, m)

delete tictactoe[from];
} else {
the4 = `@${posi.penantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.ditantang.split('@')[0]}`
RainMe.sendText(from, the4, m)

tictactoe[from].status = false
}
}
}
}
} else if (posi.status === false){
if (sender === posi.ditantang){
for (let i of nomor){
if (Number(body) === i){
if (cekIsi(Number(body) - 1, anu)) return m.reply(`Nomor tersebut sudah terisi`)
tictactoe[from].TicTacToe[Number(body) - 1] = '⭕' 
if (cekTicTac(anu)){
the5 = `@${posi.ditantang.split('@')[0]} Menang

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Hadiah : ${posi.hadiah} balance
Ingin bermain lagi? ${prefix}tictactoe`
RainMe.sendText(from, the5, m)
global.db.data.users[posi.ditantang].balance += posi.hadiah
global.db.data.users[posi.penantang].balance -= posi.hadiah
delete tictactoe[from];
} else if (KeisiSemua(anu)) {
the6 = `Hasil Seri

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Ingin bermain lagi? ${prefix}tictactoe`
RainMe.sendText(from, the6, m)

delete tictactoe[from];
} else {
the7 = `@${posi.ditantang.split('@')[0]} telah mengisi

@${posi.penantang.split('@')[0]} = ❌
@${posi.ditantang.split('@')[0]} = ⭕

${anu[0]}${anu[1]}${anu[2]}
${anu[3]}${anu[4]}${anu[5]}
${anu[6]}${anu[7]}${anu[8]}

Giliran @${posi.penantang.split('@')[0]}`
RainMe.sendText(from, the7, m)

tictactoe[from].status = true
}
}
}
}
}
}
} catch (err){
console.log(chalk.redBright('[ ERROR TICTACTOE ]'), err)
}
}
//BATAS RESPON GAME

RainMe.autoshalat = RainMe.autoshalat ? RainMe.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? RainMe.user.id : m.sender
	let id = m.chat 
    if(id in RainMe.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '14:49',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Yogyakarta dan sekitarnya._`
    RainMe.autoshalat[id] = [
    reply(caption),
    setTimeout(async () => {
    delete RainMe.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await RainMe.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: kalgans })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}    

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await RainMe.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: kalgans })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

jarakkota = (dari, ke) => {
   return new Promise(async (resolve, reject) => {
	var html = (await axios(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
	var $ = cheerio.load(html), obj = {}
	var img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
	obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,` [1], 'base64') : ''
	obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
	resolve(obj)
   })
}


if (ntilink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await RainMe.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return RainMe.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return RainMe.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return RainMe.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await RainMe.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
RainMe.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
RainMe.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}


//BATAS
if (global.onlypc) {
        	if (command&!m.isGroup){
	         return reply(`IZANAMI - MD dalam mode private, gunakan di private chat!`)
	     }
	}
//=================================================//
if (!RainMe.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
RainMe.sendPresenceUpdate('available', m.chat)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LeXcZ \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            }
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: RainMe.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, RainMe.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
RainMe.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('!')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await RainMe.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

try {
ppuser = await RainMe.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isCreator ? 1000 : limitawal
let balanceUser = isCreator ? 10000 : balanceawal
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.balance)) user.balance = balanceUser
if (!isNumber(user.limit)) user.limit = limitUser
if (!('premium' in user)) user.premium = false
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!('claim' in user)) user.premium = 1
} else global.db.data.users[m.sender] = {
name: pushname,
limit: limitUser,
balance: balanceUser,
premium: false,
afkTime: -1,
afkReason: '',
limit: limitUser,
claim: 1,
}
} catch (err) {
console.log(err)
}

let isNumber = x => typeof x === 'number' && !isNaN(x)
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (autobio) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await RainMe.updateProfileStatus(`I am ${botname} | Aktif Selama ${uptime} ⏳ | Mode : ${RainMe.public ? 'Public-Mode' : 'Self-Mode'}`).catch(_ => _)
}
if (autoread) {
RainMe.readMessages([m.key])
}
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
autoread: false
}
            
if(!('hadiah' in db.data.settings)) db.data.settings.hadiah = []
if(!('hadiahkadaluwarsa' in db.data.settings)) db.data.settings.hadiahkadaluwarsa = []
if(!('claimprem' in db.data.settings)) db.data.settings.claimprem = []
if(!('claimpremkadaluwarsa' in db.data.settings)) db.data.settings.claimpremkadaluwarsa = []            

if (m?.isGroup && chat) {
if (!('welcome' in chat)) chat.welcome = true
if (!('sWelcome' in chat)) chat.sWelcome = ''
if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (m?.isGroup) global.db.data.chats[m.chat] = {
sWelcome: '',
welcome: true,
clearTime: 0
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('RainMe' in chats)) chats.RainMe = false
} else global.db.data.chats[m.chat] = {
mute: false,
RainMe: false
}

if (db.data.chats[m.chat].RainMe) {
let name = await RainMe.getName(m.sender)
  let prompt = `Mulai sekarang nama kamu adalah Rain:v, kamu mempunyai sifat yang ramah, lucu, dan suka membantu orang lain, kamu selalu menjawab semua pertanyaan yang di berikan menggunakan bahasa indonesia dan selalu menggunakan kata panggilan aku dan kamu!, kamu adalah ai buatan dari ${ownername} yang di buat hanya untuk menjawab semua pertanyaan dengan ramah, dan lawan bicaramu sekarang adalah ${name}, dan kamu merespon pertanyaan di awali dengan kata sapaan sepeti halo di tambahkan dengan ${name}. dan ingat jangan bicara menggunakan kata formal anggap ${name} adalah teman mu.`
let RainMexdzz = await fetchJson(`https://itzpire.site/ai/gpt-logic?q=${budy.toLowerCase()}&logic=${prompt}&realtime=true`)
RainMe.sendMessage(m.chat, {
text: `*[ F U R I N A - A I ]*\n\n${RainMe.data.response}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botname,
body: '',
thumbnailUrl: `${thumbnail}`,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}

//================== [ ALL FUNCTION ] ==================//
let limitnya = db.data.users[m?.sender].limit
let balancenya = db.data.users[m?.sender].balance
const isPremium = db.data.users[m?.sender].premium == true ? true : m?.sender == owner ? true : false

async function uselimit() {
if (isCreator) return
db.data.users[m?.sender].limit -= 1
}

async function igdl2(url) {
let res = await axios("https://indown.io/");
let _$ = cheerio.load(res.data);
let referer = _$("input[name=referer]").val();
let locale = _$("input[name=locale]").val();
let _token = _$("input[name=_token]").val();
let { data } = await axios.post(
"https://indown.io/download",
new URLSearchParams({
link: url,
referer,
locale,
_token,
}),
{
headers: {
cookie: res.headers["set-cookie"].join("; "),
},
}
);
let $ = cheerio.load(data);
let result = [];
let __$ = cheerio.load($("#result").html());
__$("video").each(function () {
let $$ = $(this);
result.push({
type: "video",
thumbnail: $$.attr("poster"),
url: $$.find("source").attr("src"),
});
});
__$("img").each(function () {
let $$ = $(this);
result.push({
type: "image",
url: $$.attr("src"),
});
});

return result;
}

Array.prototype.rendem = function rendem() {
return this[Math.floor(Math.random() * this.length)];
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatter(value) {
return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calculatePPN(value) {
return value * 0.1;
}

function removeItem(array, item) {
return array.filter(elem => !(elem.jid === item.jid && elem.state === item.state));
}

cron.schedule('00 00 * * *', () => {
let user = Object.keys(global.db.data.users)
for (let jid of user) {
global.db.data.users[jid].claim = 1
if (global.db.data.users[jid].balance < 10000 && global.db.data.users[jid].limit < 1) {
global.db.data.users[jid].limit = limitawal
global.db.data.users[jid].balance = balanceawal
}}}, {
scheduled: true,
timezone: "Asia/Makassar"
})

const totalFitur = () =>{
            var mytext = fs.readFileSync("./RainMc.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}


const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
//=================================================//
switch(command) {
case 'menu': {
	await RainMe.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
wek = ` >/< 𝖣𝖠𝖲𝖧𝖡𝖮𝖠𝖱𝖣 >\\\<

> *𝖡𝖮𝖳 𝖭𝖠𝖬𝖤* : ${global.botname}
> *𝖮𝖶𝖭𝖤𝖱𝖭𝖠𝖬𝖤* : ${global.ownername}
> *𝖱𝖴𝖭𝖳𝖨𝖬𝖤* : ${runtime(process.uptime())}
> *𝖫𝖨𝖡𝖱𝖠𝖱𝖸* : @whiskeysockets/baileys
> *𝖡𝖮𝖳 𝖵𝖤𝖱𝖲𝖨𝖮𝖭* : ${versionbot}
> *𝖳𝖮𝖳𝖠𝖫 𝖴𝖲𝖤𝖱* : ${Object.keys(db.data.users).length} Users`

let sections = [{
title: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
highlight_label: `𝖠𝖫𝖫 𝖬𝖤𝖭𝖴 𝖫𝖨𝖲𝖳 𝖡𝖸 ${ownername}`,
rows: [{
title: '>!< 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖲𝖾𝗆𝗎𝖺 𝖬𝖾𝗇𝗎`, 
id: '.allmenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖮𝗐𝗇𝖾𝗋`, 
id: '.ownermenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗠𝗔𝗜𝗡',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖬𝖺𝗂𝗇`, 
id: '.mainmenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽`, 
id: '.downloadmenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗦𝗘𝗔𝗥𝗖𝗛',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽`, 
id: '.searchmenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗚𝗥𝗢𝗨𝗣',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖦𝗋𝗈𝗎𝗉`, 
id: '.groupmenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗔𝗜',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖠𝗂`, 
id: '.aimenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗣𝗔𝗡𝗘𝗟', 
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝖺𝗇𝖾𝗅`, 
id: '.panelmenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗦𝗧𝗢𝗥𝗘', 
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖲𝗍𝗈𝗋𝖾`, 
id: '.storemenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗗𝗢𝗠𝗔𝗜𝗡', 
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖣𝗈𝗆𝖺𝗂𝗇`,
id: '.domainmenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗚𝗔𝗠𝗘', 
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖦𝖺𝗆𝖾`, 
id: '.gamemenu'
},
{
	title: '>!< 𝗠𝗘𝗡𝗨 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝗍`, 
id: '.pinmenu'
},
{
title: '>!< 𝗠𝗘𝗡𝗨 𝗣𝗨𝗦𝗛𝗞𝗢𝗡𝗧𝗔𝗞', 
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝗎𝗌𝗁𝗄𝗈𝗇𝗍𝖺𝗄`, 
id: '.pushmenu'
},
]
}]

let listMessage = {
    title: '𝖫𝖨𝖲𝖳 𝖬𝖤𝖭𝖴',
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: idchannel,
 newsletterName: author, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RainMe.decodeJid(RainMe.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}\n`,
 subtitle: author,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${thumbnail}` } }, { upload: RainMe.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
  "buttonParamsJson": `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
 },
 ],
 })
 })
 }
 }
}, {})

await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break
case "allmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴘᴀʏᴍᴇɴᴛ
  › ${prefix}sᴇᴛʙᴏᴛɴᴀᴍᴇ
  › ${prefix}ᴀᴅᴅᴘʀᴇᴍ
  › ${prefix}ᴅᴇʟᴘʀᴇᴍ
  › ${prefix}ʟɪsᴛᴘʀᴇᴍ
  › ${prefix}ʙᴜᴀᴛᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ᴀᴅᴅʙᴀʟᴀɴᴄᴇ
  › ${prefix}ᴀᴅᴅʟɪᴍɪᴛ
  › ${prefix}ʙᴜᴀᴛʜᴀᴅɪᴀʜ
  › ${prefix}ʟɪsᴛᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ʟɪsᴛʜᴀᴅɪᴀʜ
  › ${prefix}ᴘᴜʙʟɪᴄ
  › ${prefix}sᴇʟғ
  › ${prefix}ɢᴇᴛᴄᴀsᴇ
  › ${prefix}ᴀᴅᴅᴄᴀsᴇ
  › ${prefix}ᴅᴇʟᴄᴀsᴇ
  › ${prefix}ʟɪsᴛʀᴇɢɪs
  › ${prefix}ɢᴇᴛʙɪᴏ
  › ${prefix}sᴇᴛᴘᴘʙᴏᴛ
  › ${prefix}sᴇᴛᴘᴘᴘᴀɴᴊᴀɴɢ
  › ${prefix}ᴅᴇʟᴘᴘʙᴏᴛ
  › ${prefix}ɢᴇᴛɴᴀᴍᴇ
  › ${prefix}sᴅᴏᴍᴀɪɴ
  › ${prefix}sᴘᴀɴᴇʟ
  › ${prefix}ʙɪᴏᴄʜᴀɴɢᴇ
  › ${prefix}ᴍʏɪᴘ
  › ${prefix}ʀᴇsᴛᴀʀᴛ
  › ${prefix}ᴅᴇʟ

乂 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ʙᴜʏᴘʀᴇᴍ
  › ${prefix}ᴀғᴋ
  › ${prefix}ᴛᴏᴘɢʟᴏʙᴀʟ
  › ${prefix}ʙᴜʏʟɪᴍɪᴛ
  › ${prefix}ᴄʟᴀɪᴍ
  › ${prefix}ʀᴇᴅᴇᴇᴍᴄᴏᴅᴇ
  › ${prefix}ǫᴄ
  › ${prefix}ǫᴄ2
  › ${prefix}ʀᴇᴍɪɴɪ
  › ${prefix}ᴍᴇ
  › ${prefix}ᴛᴏᴛᴀʟғɪᴛᴜʀ
  › ${prefix}ᴛᴏᴜʀʟ
  › ${prefix}sᴛɪᴄᴋᴇʀ
  › ${prefix}ᴘɪɴ
  › ${prefix}ᴄᴇᴋɪᴘ
  › ${prefix}ᴄᴇᴋᴋʜᴏᴅᴀᴍ
  › ${prefix}ssᴡᴇʙ
  › ${prefix}ᴛᴏɪᴍɢ
  › ${prefix}ᴊᴀʀᴀᴋ 
  › ${prefix}ᴄᴇʀᴘᴇɴ
  
乂 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴛɪᴋᴛᴏᴋ
  › ${prefix}ʏᴛᴍᴘ4
  › ${prefix}ʏᴛᴍᴘ3
  › ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
  › ${prefix}ɪɴsᴛᴀɢʀᴀᴍ 
  › ${prefix}ɢɪᴛᴄʟᴏɴᴇ

乂 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ɢᴏᴏɢʟᴇ
  › ${prefix}ʏᴛs
  › ${prefix}ᴘʟᴀʏ
  › ${prefix}ᴘʟᴀʏ2
  › ${prefix}ʏᴛᴘʟᴀʏ
  › ${prefix}ʏᴛᴍᴘ3ᴠ2
  › ${prefix}ʏᴛᴍᴘ4ᴠ2
  › ${prefix}sɴᴀᴄᴋᴠɪᴅᴇᴏ
  › ${prefix}ᴄᴏᴄᴏғᴜɴ
  › ${prefix}ᴛᴛsᴇᴀʀᴄʜ

乂 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅ 
  › ${prefix}ᴡᴇʟᴄᴏᴍᴇ
  › ${prefix}sᴇᴛɴᴀᴍᴇ
  › ${prefix}ʟɪɴᴋɢᴄ
  › ${prefix}ᴛᴀɢᴀʟʟ
  › ${prefix}ʜɪᴅᴇᴛᴀɢ
  › ${prefix}ᴘʀᴏᴍᴏᴛᴇ
  › ${prefix}ᴅᴇᴍᴏᴛᴇ
  › ${prefix}ᴋɪᴄᴋ 
  › ${prefix}ᴄʟᴏsᴇᴛɪᴍᴇ
  › ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
  › ${prefix}ᴀɴᴛɪʟɪɴᴋɢʀᴏᴜᴘ
  › ${prefix}ᴇᴅɪᴛᴅᴇsᴋ
  › ${prefix}sᴇɴᴅʟɪɴᴋɢᴄ
  › ${prefix}ʀᴇsᴇᴛʟɪɴᴋɢᴄ
  › ${prefix}ᴛᴏᴛᴀɢ

乂 𝗔𝗜 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴏᴘᴇɴᴀɪ
  › ${prefix}ʙɪɴɢ
  › ${prefix}ʙɪɴɢɪᴍɢ
  
乂 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅᴜsʀ
  › ${prefix}ᴀᴅᴅsʀᴠ
  › ${prefix}ʀᴀᴍʟɪsᴛ
  › ${prefix}ᴅᴇʟsʀᴠ
  › ${prefix}ᴅᴇʟᴜsʀ
  › ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
  › ${prefix}ᴀᴅᴅᴘᴀɴᴇʟ
  › ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
  › ${prefix}ᴀᴅᴅᴀᴅᴍɪɴ
  › ${prefix}ʟɪsᴛsʀᴠ
  › ${prefix}ʟɪsᴛᴜsʀ
  › ${prefix}ᴅᴇʟᴘᴀɴᴇʟ

乂 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴅᴏɴᴇ
  › ${prefix}ʙᴀᴛᴀʟ
  › ${prefix}ᴛᴜɴᴅᴀ
  › ${prefix}ʀᴇǫᴘᴀɴᴇʟ
  › ${prefix}ᴘᴀʏᴍᴇɴᴛ
  › ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
  › ${prefix}ʟɪsᴛᴠᴘs

乂 𝗣𝗨𝗦𝗛 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ʙᴄɢᴄ
  › ${prefix}ᴊᴘᴍ
  › ${prefix}ᴊᴘᴍᴛᴇsᴛɪ
  › ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ
  › ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ1
  › ${prefix}ʟɪsᴛɢᴄ
  › ${prefix}sᴛᴀʀᴛᴊᴘᴍ
  › ${prefix}sᴇᴛᴛᴇᴋsᴊᴘᴍ

乂 𝗗𝗢𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅɢᴄ
  › ${prefix}ᴅᴇʟɢᴄ
  › ${prefix}sᴜʙᴅᴏᴍᴀɪɴ

乂 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴛᴇʙᴀᴋʙᴏᴍʙ
  › ${prefix}ᴄᴀsɪɴᴏ
  › ${prefix}sʟᴏᴛ
  › ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
  › ${prefix}ᴅᴇʟᴛᴛᴛ
  › ${prefix}sᴜɪᴛ

𝖥𝖨𝖳𝖴𝖱 𝖤𝖱𝖱𝖮𝖱?
ʟᴀᴘᴏʀ ᴋᴇ ᴏᴡɴᴇʀ
 › ${prefix}ᴏᴡɴᴇʀ
`
RainMe.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted: kalgans })
}
break
case "ownermenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴘᴀʏᴍᴇɴᴛ
  › ${prefix}sᴇᴛʙᴏᴛɴᴀᴍᴇ
  › ${prefix}ᴀᴅᴅᴘʀᴇᴍ
  › ${prefix}ᴅᴇʟᴘʀᴇᴍ
  › ${prefix}ʟɪsᴛᴘʀᴇᴍ
  › ${prefix}ʙᴜᴀᴛᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ᴀᴅᴅʙᴀʟᴀɴᴄᴇ
  › ${prefix}ᴀᴅᴅʟɪᴍɪᴛ
  › ${prefix}ʙᴜᴀᴛʜᴀᴅɪᴀʜ
  › ${prefix}ʟɪsᴛᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ʟɪsᴛʜᴀᴅɪᴀʜ
  › ${prefix}ᴘᴜʙʟɪᴄ
  › ${prefix}sᴇʟғ
  › ${prefix}ɢᴇᴛᴄᴀsᴇ
  › ${prefix}ᴀᴅᴅᴄᴀsᴇ
  › ${prefix}ᴅᴇʟᴄᴀsᴇ
  › ${prefix}ʟɪsᴛʀᴇɢɪs
  › ${prefix}ɢᴇᴛʙɪᴏ
  › ${prefix}sᴇᴛᴘᴘʙᴏᴛ
  › ${prefix}sᴇᴛᴘᴘᴘᴀɴᴊᴀɴɢ
  › ${prefix}ᴅᴇʟᴘᴘʙᴏᴛ
  › ${prefix}ɢᴇᴛɴᴀᴍᴇ
  › ${prefix}sᴅᴏᴍᴀɪɴ
  › ${prefix}sᴘᴀɴᴇʟ
  › ${prefix}ʙɪᴏᴄʜᴀɴɢᴇ
  › ${prefix}ᴍʏɪᴘ
  › ${prefix}ʀᴇsᴛᴀʀᴛ
  › ${prefix}ᴅᴇʟ
  
  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}

`
RainMe.sendMessage(m.chat, {
text: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "mainmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}

*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴄʟᴀɪᴍᴘʀᴇᴍ
  › ${prefix}ʙᴜʏᴘʀᴇᴍ
  › ${prefix}ᴀғᴋ
  › ${prefix}ᴛᴏᴘɢʟᴏʙᴀʟ
  › ${prefix}ʙᴜʏʟɪᴍɪᴛ
  › ${prefix}ᴄʟᴀɪᴍ
  › ${prefix}ʀᴇᴅᴇᴇᴍᴄᴏᴅᴇ
  › ${prefix}ǫᴄ
  › ${prefix}ǫᴄ2
  › ${prefix}ʀᴇᴍɪɴɪ
  › ${prefix}ᴍᴇ
  › ${prefix}ᴛᴏᴛᴀʟғɪᴛᴜʀ
  › ${prefix}ᴛᴏᴜʀʟ
  › ${prefix}sᴛɪᴄᴋᴇʀ
  › ${prefix}ᴘɪɴ
  › ${prefix}ᴄᴇᴋɪᴘ
  › ${prefix}ssᴡᴇʙ
  › ${prefix}ᴄᴇᴋᴋʜᴏᴅᴀᴍ
  › ${prefix}ᴛᴏɪᴍɢ
  › ${prefix}ᴊᴀʀᴀᴋ 
  › ${prefix}ᴄᴇʀᴘᴇɴ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "downloadmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴛɪᴋᴛᴏᴋ
  › ${prefix}ʏᴛᴍᴘ4
  › ${prefix}ʏᴛᴍᴘ3
  › ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
  › ${prefix}ɪɴsᴛᴀɢʀᴀᴍ 
  › ${prefix}ɢɪᴛᴄʟᴏɴᴇ
  
  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "searchmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekgh = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ɢᴏᴏɢʟᴇ
  › ${prefix}ʏᴛs
  › ${prefix}ᴘʟᴀʏ
  › ${prefix}ᴘʟᴀʏ2
  › ${prefix}ʏᴛᴘʟᴀʏ
  › ${prefix}ʏᴛᴍᴘ3ᴠ2
  › ${prefix}ʏᴛᴍᴘ4ᴠ2
  › ${prefix}sɴᴀᴄᴋᴠɪᴅᴇᴏ
  › ${prefix}ᴄᴏᴄᴏғᴜɴ
  › ${prefix}ᴛᴛsᴇᴀʀᴄʜ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: tekgh,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "groupmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅ 
  › ${prefix}ᴡᴇʟᴄᴏᴍᴇ
  › ${prefix}sᴇᴛɴᴀᴍᴇ
  › ${prefix}ʟɪɴᴋɢᴄ
  › ${prefix}ᴛᴀɢᴀʟʟ
  › ${prefix}ʜɪᴅᴇᴛᴀɢ
  › ${prefix}ᴘʀᴏᴍᴏᴛᴇ
  › ${prefix}ᴅᴇᴍᴏᴛᴇ
  › ${prefix}ᴋɪᴄᴋ 
  › ${prefix}ᴄʟᴏsᴇᴛɪᴍᴇ
  › ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
  › ${prefix}ᴀɴᴛɪʟɪɴᴋɢʀᴏᴜᴘ
  › ${prefix}ᴇᴅɪᴛᴅᴇsᴋ
  › ${prefix}sᴇɴᴅʟɪɴᴋɢᴄ
  › ${prefix}ʀᴇsᴇᴛʟɪɴᴋɢᴄ
  › ${prefix}ᴛᴏᴛᴀɢ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "aimenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗔𝗜 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴏᴘᴇɴᴀɪ
  › ${prefix}ʙɪɴɢ
  › ${prefix}ʙɪɴɢɪᴍɢ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "panelmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekg = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅᴜsʀ
  › ${prefix}ᴀᴅᴅsʀᴠ
  › ${prefix}ʀᴀᴍʟɪsᴛ
  › ${prefix}ᴅᴇʟsʀᴠ
  › ${prefix}ᴅᴇʟᴜsʀ
  › ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
  › ${prefix}ᴀᴅᴅᴘᴀɴᴇʟ
  › ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
  › ${prefix}ᴀᴅᴅᴀᴅᴍɪɴ
  › ${prefix}ʟɪsᴛsʀᴠ
  › ${prefix}ʟɪsᴛᴜsʀ
  › ${prefix}ᴅᴇʟᴘᴀɴᴇʟ
  
    ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: tekg,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

case 'bingimg': {
	await RainMe.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
if (!isCreator) return reply2(`Fitur Khusus owner kalau mau coba minta aja jaddin owner kalau mau dianya *.owner*`)
if (!text) return reply('Masukan Gambarannya\nContoh:\nAnime cowok memakai baju hitam sedang coading bertuliskan LeXcZ')
m.reply('*Proses ini membutuhkan waktu beberapa saat silahkan tunggu*')
try {
let img = await fetchJson(`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=DdUFIJY3sIGZW0g`)
let imgs = img.image
let c = 0
for (let ims of img.image) {
if (c == 0) await RainMe.sendMessage(m.chat, { image: { url: ims }, caption: `*[ V1 ]* Bing Photo ☑\n\n${m.isGroup ? '_Sisa Foto Dikirim Di Private Chat_' : ""}` }, { quoted: m })
else await RainMe.sendMessage(m.sender, { image: { url: ims }}, { quoted: m })
c += 4
await sleep(2000)
}
} catch {
m.reply('Terjadi kesalahan!')
}
}
break
case 'bing': {
if (!text) return reply('Apa yang kamu ingin ketahui?')
let d = await fetchJson(`https://nekohime.xyz/api/ai/bingchat?text=${text}&model=balanced&apikey=${ApiNeko}`)
reply2(d.result.text)
}
break
case 'leolm-ai': {
if (!text) return reply(`${command} Apa itu Coding`)
reply(mess.search)
let yanz = await fetchJson(`https://api.miftahganzz.my.id/api/ai/leolm?stream=true&q=${text}&apikey=${miftah}`)
reply(yanz.data.result)
}
break
case 'c.ai': {
if (!text) return reply(`Cara penggunaan:\n${prefix + command} [char]|[quest]\n\nContoh:\n${prefix + command} Raiden Shogun|Halo, apa kabar?`)
let [char, quest] = text.split("|")
if (!char) return reply(`Masukkan nama karakter`)
if (!quest) return reply(`Masukkan quest`)
let anu = await fetchJson(`https://api.caliph.biz.id/api/ai/c-ai?q=${quest}&char=${char}&apikey=${caliph}`)
reply(mess.search)
reply(`${anu.result.character}\n${anu.result.response}`)
}
break
case 'b.ai': {
if (!isRegistered) return reply2(mess.regis)
if (!q) return reply(`Cara penggunaan:\n${command} query`)
let anu = await fetchJson(`https://api.caliph.biz.id/api/ai/blackbox?q=${q}&apikey=${caliph}`)
reply(mess.search)
await reply(`${anu.result}`)
}
break
case "aimage":
try {
if (global.keyopenai === '') return reply("Apikey limit exceeded");
if (!q) return reply(`Generate image from AI.\n\nExample:\n${prefix + command} man riding horse`)
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createImage({
prompt: text,
n: 1,
size: "512x512",
});
//console.log(response.data.data[0].url)
RainMe.sendImage(from, response.data.data[0].url, text, kalgans);
} catch (err) {
console.log(err);
reply("Sorry, there seems to be an error :"+ err);
}
break
case "storemenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴅᴏɴᴇ
  › ${prefix}ʙᴀᴛᴀʟ
  › ${prefix}ᴛᴜɴᴅᴀ
  › ${prefix}ʀᴇǫᴘᴀɴᴇʟ
  › ${prefix}ᴘᴀʏᴍᴇɴᴛ
  > ${prefix}ʟɪsᴛᴘᴀɴᴇʟ
  > ${prefix}ʟɪsᴛᴠᴘs
`
RainMe.sendMessage(m.chat, {
text: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "domainmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗗𝗢𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴀᴅᴅɢᴄ
  › ${prefix}ᴅᴇʟɢᴄ
  › ${prefix}sᴜʙᴅᴏᴍᴀɪɴ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername} 
`
RainMe.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "gamemenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴛᴇʙᴀᴋʙᴏᴍʙ
  › ${prefix}ᴄᴀsɪɴᴏ
  › ${prefix}sʟᴏᴛ
  › ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
  › ${prefix}ᴅᴇʟᴛᴛᴛ
  › ${prefix}sᴜɪᴛ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
case "pushmenu": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let teks = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗣𝗨𝗦𝗛 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ʙᴄɢᴄ
  › ${prefix}ᴊᴘᴍ
  › ${prefix}ᴊᴘᴍᴛᴇsᴛɪ
  › ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ
  › ${prefix}ᴘᴜsʜᴋᴏɴᴛᴀᴋ1
  › ${prefix}ʟɪsᴛɢᴄ
  › ${prefix}sᴛᴀʀᴛᴊᴘᴍ
  › ${prefix}sᴇᴛᴛᴇᴋsᴊᴘᴍ

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: teks,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break

case "pinmenu": {
	await RainMe.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
wek = `| *𝖡𝖮𝖳 𝖭𝖠𝖬𝖤* : ${global.botname}
| *Owner Name* : ${global.ownername}
| *Run Time* : ${runtime(process.uptime())}
| *Libary* : @whiskeysockets/baileys
| *Bot Version* : V2.0.0
| *Database Users* : ${Object.keys(db.data.users).length} Users`

let sections = [{
title: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗘𝗧',
highlight_label: `𝖠𝖫𝖫 𝖬𝖤𝖭𝖴 𝖫𝖨𝖲𝖳 𝖡𝖸 ${ownername}`,
rows: [{
title: '>!< 𝟭𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟣𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin anime'
},
{
title: '>!< 𝟮𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟤𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin20 anime'
},
{
title: '>!< 𝟯𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟥𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin30 anime'
},
{
title: '>!< 𝟰𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟦𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin40 anime'
},
{
	title: '>!< 𝟱𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟧𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin50 anime'
},
{
	title: '>!< 𝟲𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟨𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin60 anime'
},
{
	title: '>!< 𝟳𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟩𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin70 anime'
},
{
	title: '>!< 𝟴𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟪𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin80 anime'
},
{
	title: '>!< 𝟵𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟫𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin90 anime'
},
{
	title: '>!< 𝟭𝟬𝟬 𝗣𝗜𝗡 𝗔𝗡𝗜𝗠𝗘',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝟣𝟢𝟢 𝖦𝖺𝗆𝖻𝖺𝗋 𝖯𝗂𝗇`, 
id: '.pin100 anime'
},
{
title: '>!< 𝗥𝗘𝗤 𝗡𝗔𝗠𝗘 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 𝗠𝗘𝗡𝗨',
description: `𝖬𝖾𝗇𝖺𝗆𝗉𝗂𝗅𝗄𝖺𝗇 𝖬𝖾𝗇𝗎 𝖯𝗂𝗇𝗍𝖾𝗋𝖾𝗌𝖾𝗍 `, 
id: '.pinreqname'
},
]
}]

let listMessage = {
    title: '𝖯𝖨𝖭𝖳𝖤𝖱𝖤𝖲𝖤𝖳 𝖬𝖤𝖭𝖴',
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: idchannel,
 newsletterName: author, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RainMe.decodeJid(RainMe.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: wek
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `👋 ʜɪ ᴋᴀᴋ${m.sender.split('@')[0]}\n`,
 subtitle: author,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: `${thumbnail}` } }, { upload: RainMe.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
  "buttonParamsJson": `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
 },
 ],
 })
 })
 }
 }
}, {})

await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case "pinreqname": {
if (!isRegistered) return reply(mess.regis)
var old = performance.now(); 
var neww = performance.now(); 
var speed = neww - old; 
let tekf = `乂 Bot Information 乂 

${ucapanWaktu}\n${botname}
*𝖡𝖮𝖳 𝖭𝖠𝖬𝖤 :* ${botname}
*𝖭𝖠𝖬𝖤 𝖮𝖶𝖭𝖤𝖱 :* ${ownername}
*𝖫𝖨𝖡𝖱𝖠𝖱𝖸 :* @whiskeysockets/baileys
*𝖳𝖠𝖭𝖦𝖦𝖠𝖫:* ${tanggal2}
*𝖳𝖮𝖳𝖠𝖫 𝖥𝖨𝖳𝖴𝖱:* ${totalFitur()}
*𝖱𝖴𝖭𝖳𝖨𝖬𝖤 :* ${runtime(process.uptime())}

*乂 Informasi User 乂*
◦ *Number* : @${m.sender.split('@')[0]}
◦ *Status* : ${isCreator ? "Owner" : "User"}
◦ *User* : ${isPremium ? 'Premium' : 'Free'}
◦ *Limit :* ${limitnya}
◦ *Balance :* $${toRupiah(balancenya)}

乂 𝗣𝗜𝗡𝗧𝗘𝗥𝗘𝗦𝗧 𝗠𝗘𝗡𝗨 乂
  › ${prefix}ᴘɪɴ (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ20 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ30 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ40 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ50 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ60(ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ70 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ80 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ𝟫0 (ɴᴀᴍᴇ) 
  › ${prefix}ᴘɪɴ𝟣𝟢0 (ɴᴀᴍᴇ) 

  ©𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 ${ownername}
`
RainMe.sendMessage(m.chat, {
text: tekf,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender],
forwardedNewsletterMessageInfo: {
newsletterName: foter2,
newsletterJid: idchannel,
},
externalAdReply: {
title: foter2,
body: foter1,
thumbnailUrl: thumbnail,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: false
}}}, {quoted:m})
}
break
// batas menu


//OWNER MENU
case "backupsc":{
if (!isCreator) return reply(mess.owner)
reply(mess.wait)
  const { execSync } = require("child_process");
  const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
  (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != ".npm" &&
pe != ""
);
  const exec = await execSync(`zip -r New.zip ${ls.join(" ")}`);
  await RainMe.sendMessage(m?.chat,
{
  document: await fs.readFileSync("./New.zip"),
  mimetype: "application/zip",
  fileName: `${botname}.zip`,
},
{ quoted: kalgans }
  );
  await execSync("rm -rf New.zip");
}
break
case 'addprem': {
        if (!isCreator) return m.reply(mess.owner)
        function no(number) {
          return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        let hl = [];
        hl[0] = text.split(" ")[0];
        hl[0] = no(hl[0]) + "@s.whatsapp.net";
        hl[1] = text.split(" ")[1];
        if (!text) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: .addprem @${m.sender.split("@")[0]} 30`);
        let user = global.db.data.users
        if (typeof user[hl[0]] == "undefined")
          throw `Pengguna Tersebut Tidak Mendaftarkan Diri Ke ${namebot}`;
        let jumlahHari = 86400000 * hl[1];
        let now = new Date() * 1;
        user[hl[0]].premium = true;
        if (now < user[hl[0]].expired)
          user[hl[0]].expired += jumlahHari;
        else user[hl[0]].expired = now + jumlahHari;
        m.reply(`[✓] Selamat Kak *@${hl[0].split("@")[0]}* Telah Menjadi premium User Selama *${hl[1]}* Hari\n\nDetail premium: *${msToDate(user[hl[0]].expired - now)}*`);
        }
        break
      case 'delprem': {
        if (!isCreator) return m.reply(mess.owner);

        function no(number) {
          return number.replace(/\s/g, "").replace(/([@+-])/g, "");
        }
        if (!text) return m.reply(`[ ! ] Cara Pemakaian Salah\nContoh: @${m.sender.split("@")[0]}`);
        let cleanText = no(text) + "@s.whatsapp.net";
        if (global.db.data.users[cleanText]) {
          global.db.data.users[cleanText].premium = false;
          global.db.data.users[cleanText].expired = 0;
          m.reply(`[✓] Permintaan Menghapus Premium User @${cleanText.split("@")[0]}.`);
        } else {
          m.reply(`[ ! ] User tidak ditemukan.`);
        }
        }
        break;
        
        case 'listpremium':
      case 'listprem': {
        let user = global.db.data.users;
        var key = "";
        var i = 1;
        for (let jid in user) {
          if (user[jid].premium) {
            key += `\n\n${i}. @${jid.replace(/@.+/, "")}\n        *Expired* : ${msToDay(user[jid].expired - new Date() * 1)}`;
            i += 1;
          }
        }
        return reply(`Pengguna Premium : ${i - 1}\n${key}`);
      }
      break
case 'addgc':
if (!m.isGroup) return reply(`Khusus Grup`)
if (!isCreator) return reply(`khusus Creator`)
ntilink.push(m.chat)
fs.writeFileSync('./database/idgroup.json', JSON.stringify(ntilink))
reply(`${command} sukses`)
break

case 'delgc':
if (!isCreator) return reply(`khusus Creator`)
if (!m.isGroup) return reply(`Khusus Grup`)
var ini = ntilink.indexOf(m.chat)
ntilink.splice(ini, 1)
fs.writeFileSync('./database/idgruop.json', JSON.stringify(ntilink))
reply(`${command} sukses`)
break

case 'hidetag': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
RainMe.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:kalgans})
}
break

case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return m?.reply(`${err}`)
if (stdout) return m?.reply(stdout)
})
}
break

case "addlimit": {
if (!isCreator) return reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return reply(example('nomor 100'))
if (!Object.keys(db.data.users).includes(user)) return reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return reply(example('nomornya 100'))
db.data.users[`${user}`].limit += Number(args[1])
RainMe.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* limit ke ${user.split("@")[0]}`})
} else return reply(example('nomornya 100'))}
break

case "backupdb": case "backupdatabase": {
if (!isCreator) return reply(mess.owner)
 RainMe.sendMessage(m.chat, {document: await fs.readFileSync('./database/database.json'), fileName: 'database.json', mimetype: 'application/json'}, {quoted: kalgans})
}
break

case 'listpanel':{
	await RainMe.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
let list =`Hai Kak ${pushname}

*HARGA PANEL BY ${ownername}* :

╭━━━━━━━━━━━━━━━━━━┅•ิ.•ஐ
│ *LIST HARGA PANEL*
└┬───────────────┾•ิ.•┽
┌┤ 📮 1 GB CPU 30%
││ 💶 Rp. 1.000 / 30 DAY
││
││ 📮 2 GB CPU 60%
││ 💶 Rp. 2.000 / 30 DAY
││
││ 📮 3 GB CPU 90% 
││ 💶 Rp. 3.000 / 30 DAY
││
││ 📮 4 GB CPU 120%
││ 💶 Rp. 4.000 / 30 DAY
││ 
││ 📮 5 GB CPU 150%
││ 💶 Rp. 5.000 / 30 DAY
││
││ 📮 6 GB CPU 180%
││ 💶 Rp. 6.000 / 30 DAY
││
││ 📮 7 GB CPU 210%
││ 💶 Rp. 7.000 / 30 DAY
││
││ 📮 8 GB CPU 240%
││ 💶 Rp. 8.000 / 30 DAY
││
││ 📮 9 GB CPU 270%
││ 💶 Rp. 9.000 / 30 DAY
││
││ 📮 10 GB CPU 300%
││ 💶 Rp. 10.000 / 30 DAY
││
││ 📮 UNLI CPU UNLI
││ 💶 Rp. 15.000 / 30 DAY
││
│└───────────────┾•ิ.•┽
╰━━━━━━━━━━━━━━━━━━━┅•ิ.•ஐ 
UNTUK MELIHAT PAYMENT KETIK .payment
`
await RainMe.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 5000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: list,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break
case 'listvps': case 'rlistvps':{
	await RainMe.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
let menu_nya =`Hai Kak ${pushname}

*LIST HARGA VPS BY LeXcZ*

- RAM 1GB CORE 1 : ${onegbvpsone}
- RAM 2GB CORE 1 : ${twogbvpsone}
- RAM 2GB CORE 2 : ${twogbvpstwo}
- RAM 4GB CORE 2 : ${fourgbvpsfour}
- RAM 8GB CORE 4 : ${eightgbvpsfour}
- RAM 8GB CORE 6 : ${sixteengbvpssix}

${notevps}

*MINAT? CHAT*
Wa.me/${owner}

*© ${ownername}*`
await RainMe.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 80000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: menu_nya,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case 'sdomain': case 'sendomain': {
if (!isCreator) return reply(`Ngapain ? Khusus RainMeXdzz Aja !!`)
if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,harga,domain`)
reply('Pesanan Telah Sukses Dikirim') 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
let mq1 = m1 + '@s.whatsapp.net'
let ownernya = owner + '@s.whatsapp.net'
let me = m.sender
let ments = [mq1, ownernya, me]
RainMe.sendMessage(mq1, {text:`*───❖》${ownername}《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal}*\n*Jam : ${jam}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Domain : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Tutup ( Sensor ) Domain Anda
 Dan Jangan Sampai Orang Lain Melihat 
 Atau Tidak Nanti Domain Anda Bakal Kena Ddos Attack_*\n\n\n\n*© RainMe*`}, m) 
}
break

case 'spanel': case 'sendpanel': {
if (!isCreator) return reply(`NGAPAIN ANJG`)
if (!text) return reply(`Example : ${prefix + command} 6285xxxxx,harga,linklog`)
reply('Pesanan Telah Sukses Dikirim') 
var mon = args.join(' ')
var m1 = mon.split(",")[0]
var m2 = mon.split(",")[1]
var m3 = mon.split(",")[2]
let mq1 = m1 + '@s.whatsapp.net'
let ownernya = owner + '@s.whatsapp.net'
let me = m.sender
let ments = [mq1, ownernya, me]
RainMe.sendMessage(mq1, {text:`*───❖》${ownername}《❖───*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*📦 Pesananmu Datang 📦*\n*Harga : ${m2}*\n*Hari : ${hariini}*\n*Tanggal : ${tanggal2}*\n*Jam : ${time}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*[+] Username : admin*\n*[+] Password : admin*\n*[+] Login : ${m3}*\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n*_Note : Jangan Lupa Ganti Password Agar Terhindar Dari Pencurian Akun Panel_*\n`}, m) 
}
break             

case "addpremium": case "addprem": {
if (!isCreator) return reply(mess.owner)
let b = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (args[0] == 'a') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 10000
db.data.users[b].balance += 10000000000
db.data.users[b].premium = true
reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return reply(`User ${args[1]} tidak terdaftar di database bot`)
} else if (args[0] == 'b') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 20000
db.data.users[b].balance += 30000000000
db.data.users[b].premium = true
reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return reply(`User ${args[1]} tidak terdaftar di database bot`)
} else if (args[0] == 'c') {
if (b in db.data.users) {
if (db.data.users[b].premium == true) return reply(`User ${args[0]} sudah menjadi *User Premium!*`)
db.data.users[b].limit += 30000
db.data.users[b].balance += 50000000000
db.data.users[b].premium = true
reply(`Berhasil update user ${args[1]} ke *User Premium*`) 
} else return reply(`User ${args[1]} tidak terdaftar di database bot`)
} else return reply("nomornya")
}
break

case "delpremium": case "delprem": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("nomornya")
let user = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (db.data.users[user].premium == false) return reply(`User ${args[0]} bukan *User Premium!*`)
if (user in db.data.users) {
db.data.users[user].premium = false
reply("Berhasil menghapus *User Premium*")
} else return reply(`User ${args[0]} tidak terdaftar di database bot`)
}
break

case "welcome":
{
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await RainMe.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
RainMe.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break


//=================================================//
case 'listprem':
if (isBan) return m.reply('*Lu Di Ban Owner*')
 teksooo = '*List Premium*\n\n'
for (let i of owner) {
teksooo += `- ${i}\n`
}
teksooo += `\n*Total : ${owner.length}*`
RainMe.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted:m, contextInfo: { "mentionedJid": owner } })
break

case 'listregis':{
if (!isCreator) return reply(mess.owner)  
let anu =  require('./database/registered')
let teks = `乂 *L I S T - R E G I S T E R E D*\n`
teks += `*Total Register* : ${anu.lenght}\n\n`
anu.map((v, i) => {
teks += `• ${i+1} •\n`
teks += `*Id* : ${v.id}\n`
teks += `*Name* : ${v.name}\n`
teks += `*Age* : ${v.age}\n`
teks += `*Ns* : ${v.time}\n\n───────────────\n\n`
}).join('\n\n')
teks += `${foter2}`
reply(teks) 
}
break

case "addbalance": {
if (!isCreator) return reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return reply('𝖢𝖮𝖭𝖳𝖮𝖧 : 6285263390832 100')
if (!Object.keys(db.data.users).includes(user)) return reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return reply('𝖢𝖮𝖭𝖳𝖮𝖧 : 6285263390832 100')
db.data.users[`${user}`].balance += Number(args[1])
RainMe.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* balance ke ${user.split("@")[0]}`})
} else return reply('𝖢𝖮𝖭𝖳𝖮𝖧 : 6285263390832 100')
}
break

case "addlimit": {
if (!isCreator) return reply(mess.owner)
let user = args[0]+'@s.whatsapp.net'
if (args[0] && args[1]) {
if (isNaN(args[0])) return reply('𝖢𝖮𝖭𝖳𝖮𝖧 : ${owner} 100')
if (!Object.keys(db.data.users).includes(user)) return reply("Nomor target tidak terdaftar di database bot!")
if (isNaN(args[1])) return reply('nomornya 100')
db.data.users[`${user}`].limit += Number(args[1])
RainMe.sendMessage(m.chat, {text: `Berhasil menambah *${args[1]}* balance ke ${user.split("@")[0]}`})
} else return reply('𝖢𝖮𝖭𝖳𝖮𝖧 : ${owner} 100')
}
break

case "sendpayment": case "kirimpay": case "sendpay": case "kirimpayment": {
if (!isCreator) return reply(mess.owner)
if (!q) return reply('Masukan Nomor')
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`
let teksnya = `
${tesksendpay}`
let msgii = generateWAMessageFromContent(targetNumber, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [targetNumber] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"𝖣𝖠𝖭𝖠 𝖯𝖠𝖸𝖬𝖤𝖭𝖳\",\"title\":\"Dana\",\"id\":\".danapay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"𝖮𝖵𝖮 𝖯𝖠𝖸𝖬𝖤𝖭𝖳\",\"title\":\"Ovo\",\"id\":\".ovopay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"𝖦𝖮𝖯𝖠𝖸 𝖯𝖠𝖸𝖬𝖤𝖭𝖳\",\"title\":\"Gopay\",\"id\":\".gopaypay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"𝖰𝖱𝖨𝖲𝖲\",\"title\":\"QRIS\",\"id\":\".qrispay\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: kalgans}) 
await RainMe.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "danapay": {
if (global.dana == false) return reply('Payment Dana Tidak Tersedia')
let teks = `
*Nomor Dana :*
${global.dana}

${tesksesudahsendpay}
`
RainMe.sendText(m.chat, teks, kalgans)
}
break
case "ovopay": {
if (!isCreator) return reply(mess.owner)
if (global.ovo == false) return reply('Payment Ovo Tidak Tersedia')
let teks = `
*Nomor Ovo :*
${global.ovo}

${tesksesudahsendpay}
`
RainMe.sendText(m.chat, teks, kalgans)
}
break
case "gopaypay": {
if (global.gopay == false) return reply('Payment Gopay Tidak Tersedia')
let teks = `
*Nomor Gopay :*
${global.gopay}

${tesksesudahsendpay}
`
RainMe.sendText(m.chat, teks, kalgans)
}
break
case "qrispay": {
if (global.qris == false) return reply('Payment Qris Tidak Tersedia')
let teks = `
${sendpayteskqris}

${tesksesudahsendpay}
`
RainMe.sendMessage(m.chat, {image: {url: global.qris}, caption: teks}, {quoted: kalgans})
}
break

case "listclaimprem": {
if (!isCreator) return reply(mess.owner)
if (db.data.settings.claimprem.length < 1) return reply("Tidak ada code claim prem")
var teks = `*乂 LIST CODE CLAIM PREM*\n\nTotal : *${db.data.settings.claimprem.length}*\n\n`
db.data.settings.claimprem.forEach((e) => {
teks += ` ◦ ${e}\n`
})
reply(teks)
}
break

case 'openai':
if (!isCreator) return m.reply('*khusus Premium*') 
 try {
if (global.keyopenai === '') return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!text) return reply(`Chat dengan AI.\n\nContoh:\n$.openai Apa itu coding`)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0, // Nilai yang lebih tinggi berarti model akan mengambil lebih banyak risiko.
max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
presence_penalty: 0 // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
});
reply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
break
        
case "setnamagc": case "namegc": {
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botadmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (!text) return reply(example('teksnya'))
RainMe.groupUpdateSubject(m.chat, text)
reply(mess.done)}
break

case 'del': {
if (!isCreator) return reply('Maaf, command ini hanya untuk pemilik.')
if (!m.quoted) return false
let { chat, fromMe, id, isBaileys } = m.quoted
RainMe.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case "listhadiah": {
if (!isCreator) return reply(mess.owner)
if (db.data.settings.hadiah.length < 1) return reply("Tidak ada code hadiah")
var teks = `*乂 LIST CODE HADIAH*\n\nTotal : *${db.data.settings.hadiah.length}*\n\n`
db.data.settings.hadiah.forEach((e) => {
teks += ` ◦ ${e}\n`
})
reply(teks)
}
break

case "listprem": case "listpremium": {
if (!isCreator) return reply(mess.owner)
let user = Object.keys(db.data.users)
let ar = []
let urut = 1
var teks = '\n*乂 LIST USER PREMIUM*\n\n'
user.forEach((e) => {
if (db.data.users[e].premium == true) {
let no = urut++
teks += `${no}. @${e.split("@")[0]}\n`
ar.push(e)
}
})
if (ar.length < 1) {
reply("Tidak Ada User Premium")
} else {
RainMe.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [...ar]}}, {quoted: kalgans})
}}
break

case "public": {
if (!isCreator) return reply(mess.owner)
RainMe.public = true
reply(mess.done)
}
break

case "self": {
if (!isCreator) return reply(mess.owner)
RainMe.public = false
reply(mess.done)
}
break

case "buatclaimprem": {
if (!isCreator) return reply(mess.owner)
if (isNaN(args[0])) return reply('Jumlah Kode claim prem')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.claimprem.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.claimprem.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break

case "buathadiah": {
if (!isCreator) return reply(mess.owner)
if (isNaN(args[0])) return reply('Jumlah Kode Hadiah')
for (let i = 0; i < Number(args[0]); i++) {
db.data.settings.hadiah.push(crypto.randomBytes(4).toString("hex"))
}
let teks = '\n'
db.data.settings.hadiah.forEach((e) => {
teks += `◦ ${e}\n`
})
reply(teks)
}
break

case 'play': case 'song': {
if (!text) return reply(`Example : ${prefix + command} Mendua`)
let yts = require ('yt-search')
let search = await yts(`${text}`)
let linknya = search.all[0].url
let bodytextnya = `ᴛɪᴛʟᴇ : *${search.all[0].title}*\nᴠɪᴇᴡs : *${search.all[0].views}*\nᴅᴜʀᴀᴛɪᴏɴ : *${search.all[0].timestamp}*\nᴜᴘʟᴏᴀᴅᴇᴅ : *${search.all[0].ago}*\nᴜʀʟ : *${linknya}*`
            let bokepp = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bodytextnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : { url : search.all[0].thumbnail }}, { upload: RainMe.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Video 🎬","id":"${prefix}ytmp4 ${linknya}"}`
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"Audio 🎧","id":"${prefix}ytmp3 ${linknya}"}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: `${ownername}`,
                    newsletterJid: `${idchannel}`,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await RainMe.relayMessage(bokepp.key.remoteJid, bokepp.message, {
  messageId: bokepp.key.id
})
            }
            break
case 'play2': {
if (!text) return reply(`Example : ${prefix + command} Lagu sad`)
let wait = await RainMe.sendMessage(m.chat, {text: `_Searching.. [ ${text} ] 🔍_`}, {quoted: fverif, ephemeralExpiration: 86400})
let search = await yts(`${text}`)

let data = await search.all.filter((v) => v.type == 'video')
try {
var res12 = data[0]
} catch {
var res12 = data[1]
}
let ply = search.videos[0].url
const ytdl = require('ytdl-core')
let mp3file = `./.npm/${search.all[0].views}.mp3`
  let nana = ytdl(ply, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(mp3file))
  .on('finish', async () => {
await RainMe.sendMessage(m.chat, {text: `_Mengirim.. [ ${text} ] 🔍_`, edit: wait.key }, {quoted: m, ephemeralExpiration: 86400});
RainMe.sendMessage(m.chat, {audio: fs.readFileSync(mp3file), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {title: `${search.all[0].title}`, body: `Views : ${search.all[0].views}`, thumbnailUrl: res12?.thumbnail, mediaType: 2, mediaUrl: `${search.videos[0].url}`, sourceUrl: `${search.videos[0].url}`, renderLargerThumbnail: true }}},)
   })
const alicevidoh = require('./lib/scrape/ytdl2')
const vid=await alicevidoh.mp4(`${search.videos[0].url}`)
const ytc=`
*Tittle:* ${vid.title}
*Date:* ${vid.date}
*Duration:* ${vid.duration}
*Quality:* ${vid.quality}`
await RainMe.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},)
}
RainMe.sendMessage(m.chat, {react: {text: '🎧', key: m.key}})
break
case "ytplay": {
      if (!text) return m.reply("Masukkan judul lagu yang ingin dicari!")
                let se = require('./src/scrapyt')
                let res = await se.search(text)
                if (res.length === 0) return m.reply("Tidak ada hasil.")
                   let sections = [{
                        title: "Hasil Pencarian",
                        highlight_label: "Best Result",
                        rows: res.map(a => ({
                            title: a.title,
                            description: a.description,
                            id: `.youtube ${a.url}`
                        }))
                    }]
                let listMessage = {
    title: 'Click Me', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idsal,
 newsletterName: 'Powered By RainMe', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RainMe.decodeJid(RainMe.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot made by RainMe')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Result*\n`,
 subtitle: "dcdXdino",
 hasMediaAttachment: false,
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 ],
 })
 })
 }
 }
}, {})

await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
                break
case 'ytmp3v2': {
if (!text) return reply2(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let data = await dylux.yta(text)
RainMe.sendMessage(m.chat, { audio: { url: data.dl_url }, mimetype: 'audio/mp4', fileName: `${data.title}.mp3` })
}
break
case 'ytmp4v2': {
if (!text) return reply2(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
let data = await dylux.ytv(text)
RainMe.sendMessage(m.chat, { video: { url: data.dl_url }, mimetype: 'video/mp4', fileName: `${data.title}.mp4` })
}
break
case 'spotifysearch': {
if (!text) return reply(`Example : ${prefix + command} Rewrite The Stars`)
reply(mess.search)
let spotify = await fetchJson(`https://api.caliph.biz.id/api/search/spotify?query=${text}&apikey=${caliph}`)
let teks = '乂 Spotify Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of spotify.result) {
teks += `◦  No : ${no++}\n◦  Title : ${i.title}\n◦  Artist : ${i.artist}\n◦  Duration : ${i.duration}\n◦‎  Album : ${i.album}\n◦  Url : ${i.url}\n\n─────────────────\n\n`
}
RainMe.sendMessage(m.chat, {
text: teks,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | ${botname}`,
body: '',
thumbnailUrl: spotify.result[0].thumbnail,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break
case 'spotifysearch2': {
if (!text) return reply(`Example : ${prefix + command} Rewrite The Stars`)
let spotifyt = await chApi.Spotifysearch(text)
let teks = '乂 Spotify Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of spotifyt) {
teks += `◦  No : ${no++}\n◦  Title : ${i.title}\n◦  Artist : ${i.artist}\n◦  Album : ${i.album}\n◦‎  Release : ${i.release_date}\n◦‎  Duration : ${i.duration}\n◦  Url : ${i.url}\n\n─────────────────\n\n`
}
RainMe.sendMessage(m.chat, { image: { url: spotify[0].thumbnail },caption: teks }, { quoted: kalgans })
}
break
case 'soundcloudsearch': case 'scsearch': {
if(!isCreator) return reply2(mess.owner)
if(!text) return reply2(`${command} Secukupnya`)
let sound = await fetchJson(`https://api.yanzbotz.my.id/api/cari/soundcloud?query=${text}`)
let txt = `*🎵 LIST SOUND CLOUDE  🎵*\n\n`
for (let bntgg of sound.result.data) {
txt += `   ◦  *Title :* ${bntgg.title}\n`
txt += `   ◦  *Artist :* ${bntgg.artist}\n`
txt += `   ◦  *Genre :* ${bntgg.genre}\n`
txt += `   ◦  *Durasi :* ${bntgg.duration}\n`
txt += `   ◦  *Plays :* ${bntgg.plays}\n`
txt += `   ◦  *Like:* ${bntgg.likes}\n`
txt += `   ◦  *Coment :* ${bntgg.comments}\n`
txt += `   ◦  *Url :* ${bntgg.url}\n\n`
}
reply2(txt)
}
break
case 'cocofun2': {
if (!text) return reply(`Example: ${prefix + command} https://www.icocofun.com/share/post/565326210234?lang=id&pkg=id&share_to=copy_link&m=06fa9a57a737be2bee99bea6bcdb20ee&d=7a1c5048f54ef09b7c0fa0f3c463692949f35fa30d93fc1130f6e8153f537b51&nt=1`)
reply(mess.getdata)
let old = new Date()
let asy = await chApi.cocofun(text)
let caption = `乂  *C O C O F U N*\n\n`
caption += `	◦  *Topic* : ${asy.topic}\n`
caption += `	◦  *Caption* : ${asy.caption}\n`
caption += `	◦  *Play* : ${asy.play}\n`
caption += `	◦  *Like* : ${asy.like}\n`
caption += `	◦  *Share* : ${asy.share}\n`
caption += `	◦  *Duration* : ${asy.duration}\n\n`
caption += `	◦  *Fetching* : ${((new Date - old) * 1)} ms\n\n` 
RainMe.sendMessage(m.chat, { video: { url: asy.no_watermark }, caption: caption }, { quoted: kalgans })
}
break
case 'cocofun':
if (!isRegistered) return reply2(mess.regis)
if (!q) return reply('where is the link')
reply(mess.search)
let j = await fetchJson(`https://api.lolhuman.xyz/api/cocofun?apikey=${apikey}&url=${q}`)
RainMe.sendMessage(m.chat, {
video: {
url: j.result.nowm
},
caption: j.result.tag
}, {
quoted: kalgans
})
break
case 'snackvideo':
if (!isRegistered) return reply2(mess.regis)
if (!q) return reply('where is the link')
reply(mess.search)
let ma = await fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=${apikey}&url=${q}`)
RainMe.sendMessage(m.chat, {
video: {
url: ma.result.url
},
caption: ma.result.caption
}, {
quoted: kalgans
})
break
case 'ringtone':{
if (!text) return reply(`Example : ${command} black rover`)
reply(mess.search)
let { ringtone } = require('./lib/scrape/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
RainMe.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: kalgans })
}
break
case 'getcase': {
const getCase = (cases) => {
return "case "+`'${cases}'`+fs.readFileSync("./RainMc.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
try{
if (!isCreator) return reply('ngapain')
if (!q) return reply(`contoh : ${prefix + command} ntilink`)
let nana = await getCase(q)
reply(nana)
} catch(err){
console.log(err)
reply(`Case ${q} tidak di temukan`)
}
}
break 

case 'addcase': {
 if (!isCreator) return reply('lu sapa asu')
 if (!text) return reply('Mana case nya');
const fs = require('fs');
const namaFile = 'RainMc.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return;
}
const posisiAwalGimage = data.indexOf("case 'addcase':");

if (posisiAwalGimage !== -1) {
const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
if (err) {
reply('Terjadi kesalahan saat menulis file:', err);
} else {
reply('Case baru berhasil ditambahkan.');
}
});
} else {
reply('Tidak dapat menambahkan case dalam file.');
}
});
}
break

case "setppbotpanjang": case "setpppanjang": {
if (!isCreator) return m.reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await RainMe.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await RainMe.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return m.reply('dengan mengirim foto')
}
break

case 'setbotname':{
if (!isCreator) return reply(`Khusus Owner`)
if (!text) return reply(`Dimana Namanya Tuan?\nExample: ${prefix + command} IZANAMI - MD`)
await furina.updateProfileName(text)
reply(`Berhasil Mengubah Nama Bot Tuan✅`)
}
break

case "setppbot": {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var medis = await RainMe.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await RainMe.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(mess.done)
} else {
var memeg = await RainMe.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(mess.done)
}
}
break

case 'getbio':{
if (!isCreator) return reply(mess.owner)
try {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.quoted.sender ? m.quoted.sender : m.sender
let bio = await RainMe.fetchStatus(who)
lreply(bio.status)
} catch {
if (text) return reply(`bio is private or you haven't replied to the person's message!`)
else try {
let whoto = m.quoted ? m.quoted.sender : m.sender
let bio = await RainMe.fetchStatus(who)
reply(bio.status)
} catch {
return reply(`bio is private or you haven't replied to the person's message!`)
}
}
}
break

case 'delppbot': {
if (!isCreator) return reply(mess.owner)
await RainMe.removeProfilePicture(RainMe.user.id)
reply(mess.done)
}
break

case 'getname': {
if (!isCreator) return reply(mess.owner)
if (qtod === "true") {
namenye = await RainMe.getName(m.quoted.sender)
reply(namenye)
} else if (qtod === "false") {
RainMe.sendMessage(from, {text:"Reply orangnya"}, {quoted:kalgans})
}
}
break

case 'restart':
if (!isCreator) return reply('wuuu')
reply(`_Restarting . . ._`)
await sleep(3000)
process.exit()
break

case "welcome": {
if (!isRegistered) return reply(`Kamu belum daftar!\nSilahkan daftar dengan cara *${prefix}daftar nama|umur!*`)
if (!isCreator) return m.reply('Ngapain ? Fitur Ini Khusus Tuan Saya😜')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await RainMe.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
RainMe.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break

case 'jpm': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} ${botname}`)
let getGroups = await author.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: `${idchannel}`,
 newsletterName: `${foter1}`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RainMe.decodeJid(RainMe.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: text
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ''
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: `${ownername}`,
 hasMediaAttachment: false,
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
name: "cta_url",
  buttonParamsJson: `{"display_text":"👤 𝗖𝗛𝗔𝗧 𝗢𝗪𝗡𝗘𝗥","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
 },
 {
name: "cta_url",
  buttonParamsJson: `{"display_text":"💸 𝗧𝗘𝗦𝗧𝗜𝗠𝗢𝗡𝗜","url":"${grouptesti}","merchant_url":"https://www.google.com"}`,
 },
 {
name: "cta_url",
  buttonParamsJson: `{"display_text":"👥️️ 𝗖𝗥𝗘𝗔𝗧𝗢𝗥","url":"https://wa.me/${creator}","merchant_url":"https://www.google.com"}`,
 },
 {
 name: "cta_url",
  buttonParamsJson: `{"display_text":" 𝗖𝗛𝗔𝗧 𝗕𝗢𝗧","url":"https://wa.me/${nobot}","merchant_url":"https://www.google.com"}`,
 },
 ]
 })
 })
 }
 }
}, {})

await RainMe.relayMessage(i, msg.message, {
 messageId: msg.key.id
})
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case "jpmtesti": case "bcgroup": case "bcgc": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply(mess.wait)
let getGroups = await RainMe.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await RainMe.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await RainMe.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await RainMe.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0] })
await sleep(text.split('|')[1])
} else {
await RainMe.sendMessage(xnxx, { text: text.split('|')[0] })
await sleep(text.split('|')[1])
}}
reply(mess.done)
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} fatih-san`)
let getGroups = await RainMe.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
RainMe.sendMessage(i, {text: `${text}`}, {quoted:kalgans})
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//BATAS OWNER MENU

//MAIN MENU
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = +new Date
user.afkReason = text
reply(`💤 *${m.pushName}* Telah Afk${text ? ': ' + text : ''}`)
}
break

case "premium": case "buyprem": {
reply(`\n*💸 LIST HARGA USER PREMIUM*

*乂 PAKET A*
*Harga Rp5.000*
◦ Gratis Balance $10.000.000.000
◦ Gratis Limit 10.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET B*
*Harga Rp10.000*
◦ Gratis Balance $30.000.000.000
◦ Gratis Limit 20.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian

*乂 PAKET C*
*Harga Rp15.000*
◦ Gratis Balance $50.000.000.000
◦ Gratis Limit 30.000
◦ Akses fitur premium
◦ Akses fitur claim limit & balance harian


Hubungi owner bot untuk membeli paket *User Premium* dengan cara ketik .owner\n`)}
break

case "redeemcode": {
if (!args[0]) return reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return reply("*Code Redeem* wajib huruf kecil semua!")
if (db.data.settings.hadiahkadaluwarsa.includes(args[0])) return reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.hadiah.includes(args[0])) return reply("*Code* tidak valid!")
db.data.settings.hadiahkadaluwarsa.push(args[0])
var code = db.data.settings.hadiah.indexOf(args[0])
db.data.settings.hadiah.splice(code, 1)
let h1 = randomNumber(20000, 30000)
let h2 = randomNumber(10, 20)
db.data.users[m.sender].balance += h1
db.data.users[m.sender].limit += h2
var teks = `Selamat kepada @${m.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dari *Code Redeem "${args[0]}"*`
await reply(`Berhasil mengambil hadiah *$${toRupiah(h1)} Balance* dan *${h2} Limit* dari *Code Redeem ${args[0]}*`).then(() => {
RainMe.sendMessage(m.chat, {text: teks, contextInfo: {mentionedJid: [m.sender], externalAdReply: { thumbnailUrl: thumbnail, title: "© Message System Notifikasi", body: null, sourceUrl: linkgc, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: kalgans})
})}
break

case "topglobal": {
reply(mess.wait)
let ubalance = Object.entries(global.db.data.users).map(([key, value]) => {return {...value, jid: key}})
let sortedbalance = ubalance.map(toNumber('balance')).sort(sort('balance'))
let usersbalance = sortedbalance.map(enumGetKey)
reply(`\n*🏆 LIST TOP GLOBAL BALANCE*\n\nKamu Top *${usersbalance.indexOf(m?.sender) + 1}* Balance dari *${usersbalance.length}* Users

${sortedbalance.slice(0, 10).map(({ jid, balance }, i) => `${i + 1}. *Nama :* @${db.data.users[jid].name}\n*Nomor :* ${jid.split("@")[0]}\n*Balance :* $${toRupiah(balance)}\n`).join('\n')}\n`)}
break

case 'readvo': case 'readviewonce': {
if (!m.quoted) return reply('reply gambar/video yang ingin Anda lihat')
if (m.quoted.mtype !== 'viewOnceMessageV2') return reply('Ini bukan pesan view-once.')
let msg = m.quoted.message
let type = Object.keys(msg)[0]
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return RainMe.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return RainMe.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
}
}
break

case "buylimit": case "belilimit": {
if (!args[0]) return reply('100\n\nHarga 1 *limit* = $1000 *balance*')
if (isNaN(args[0])) return reply('20')
if ((args[0]).includes('.')) return reply('20')
let harga = 1000
let total = Number(parseInt(args[0]) * harga)
if (balancenya < total) return reply(`*Balance* kamu tidak cukup untuk membeli ${args[0]} *Limit!*\n\nDapatkan *Balance* dengan cara memainkan game`)
db.data.users[m?.sender].limit += Number(args[0])
db.data.users[m?.sender].balance -= total
reply(`Berhasil membeli *${args[0]}* limit, dengan *$${toRupiah(total)}* balance`)
}
break

case "pushkontak": {
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply("pesannya")
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await RainMe.sendMessage(mem, {text: teks}, {quoted: kalgans})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await RainMe.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

case "pushkontak1": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await RainMe.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await RainMe.sendMessage(mem, {text: teks}, {quoted: kalgans})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await RainMe.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

case "listgc": case "cekid": case"listgrup": {
let gcall = Object.values(await RainMe.groupFetchAllParticipating().catch(_=> null))
let listgc = `*｢ LIST ALL CHAT GRUP ｣*\n\n`
await gcall.forEach((u, i) => {
listgc += `*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break

case "startjpm": {
if (!isCreator) return m.reply(mess.owner)
var teksnya = await fs.readFileSync("./database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Teks Jpm Tidak Ditemukan, Silahlan Isi/Edit Teks Jpm Didalam Folder database")
var teks = `${teksnya}`
let total = 0
let getGroups = await RainMe.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`)
for (let jid of usergc) {
try {
await RainMe.sendMessage(jid, {text: teks}, {quoted: kalgans})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`)
}
break

case "setteksjpm": {
if (!isCreator) return m.reply(mess.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
m.reply("Berhasil Mengganti Teks JPM ✅")
} else {
return m.reply("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*")
}}
break

case "teksjpm": {
if (!isCreator) return m.reply(mess.owner)
m.reply(fs.readFileSync("./database/teksjpm.js").toString())
}
break

case "claim": {
if (!isPremium) return reply(mess.premium)
if (db.data.users[m.sender].claim == 0) return reply("Kamu sudah *Claim* hadiah hari ini, hadiah *Claim* akan direset saat jam 12 malam!")
const hadiah = randomNumber(50000, 70000)
const hadiah2 = randomNumber(100, 200)
db.data.users[m.sender].balance += hadiah
db.data.users[m.sender].limit += hadiah2
db.data.users[m.sender].claim = 0
reply(`Berhasil *Claim* hadiah harian\n\n+ $${toRupiah(hadiah)} *Balance*\n+ ${hadiah2} *Limit*`)
}
break

case "claimprem": {
if (!args[0]) return reply("Codenya")
if (args[0] !== args[0].toLowerCase()) return reply("*Code Claim Prem* wajib huruf kecil semua!")
if (db.data.settings.claimpremkadaluwarsa.includes(args[0])) return reply("*Code* tersebut sudah digunakan!")
if (!db.data.settings.claimprem.includes(args[0])) return reply("*Code* tidak valid!")
db.data.settings.claimpremkadaluwarsa.push(args[0])
var code = db.data.settings.claimprem.indexOf(args[0])
db.data.settings.claimprem.splice(code, 1)
let h1 = randomNumber(20000, 30000)
let h2 = randomNumber(10, 20)
let h3 = randomNumber(10, 20)
db.data.users[m?.sender].balance += h1
db.data.users[m?.sender].limit += h2
db.data.users[m?.sender].glimit += h3
db.data.users[m?.sender].premium = true
var teks = `Selamat kepada @${m?.sender.split("@")[0]} 🎉

kamu mendapatkan *Balance  $${toRupiah(h1)}* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem "${args[0]}"*`
await reply(`Berhasil mengambil claim prem *$${toRupiah(h1)} Balance* dan *${h2} Limit* dan *${h3} Limit Game* dari *Code Redeem ${args[0]}*`).then(() => {
RainMe.sendMessage(m?.chat, {text: teks, contextInfo: {mentionedJid: [m?.sender], externalAdReply: { thumbnailUrl: ppuser, title: "© Message System Notifikasi", body: null, sourceUrl: linkchannel, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: kalgans})
})}
break

case 'tqto': {
let cu = `Hallo Sis, here are the names who have been registered in creating/helping in the development of this script

*BIG TAHNKS TO*

> LeXcZ (Developer)

d above is developer ${botname}
`
let cp = (cu)
RainMe.sendMessage(m?.chat, {
text: cp,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | ${botname}`,
body: '',
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
break

case 'listcase': {
let { listCase } = require('./lib/scrapelistCase.js')
reply(listCase())
}
break

case "ceklimit": case "limit": case "me":
case "balance": case "cekbalance": case "my": {
if (m.quoted) {
try {
ppuser = await RainMe.profilePictureUrl(pengirim, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}    
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
RainMe.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
} else {
let teksnya = `
  ◦ Name : *${pushname}*
  ◦ Number : *@${m.sender.split('@')[0]}*
  ◦ Limit : *${limitnya}*
  ◦ Balance : *$${toRupiah(balancenya)}*`
RainMe.sendMessage(m.chat, {text: teksnya, 
contextInfo: {
externalAdReply: {
thumbnailUrl: thumbnail, 
title: '©User Info Message', 
renderLargerThumbnail: true, 
sourceUrl: `https://wa.me/${m.sender.split('@')[0]}`, 
mediaType: 1}}}, {quoted: kalgans})
}}
break

case 'qc': {
if (limitnya < 1) return reply(mess.limit)
if (!q) return reply(`📌Example: ${prefix + command} hallo`)
let obj = {
type: 'quote',
format: 'png',
backgroundColor: '#ffffff',
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await RainMe.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: `${q}`,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
RainMe.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
uselimit()}
break

case 'qc2': {
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await RainMe.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
RainMe.sendImageAsSticker(m.chat, buffer, kalgans, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (limitnya < 1) return reply(mess.limit)
 if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await RainMe.sendImageAsStickerAV(from, media, kalgans, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await RainMe.sendVideoAsSticker(from, media, fcall, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
uselimit()}
break

case 'tiktoksearch': case 'ttsearch':{
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Gunakan dengan cara ${prefix+command} *query*\n\n_Contoh_\n\n${prefix+command} jj epep`)
let anu = await mann.search.tiktoks(text)
const capt = anu.title
const author = anu.author

let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender], 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: `${idchannel}`,
newsletterName: `${botname}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: RainMe.decodeJid(RainMe.user.id) },
}, 
body: proto.Message.InteractiveMessage.Body.create({
 text: (`*Author* : ${author}\n*Caption* : ${capt}`)
}),
footer: proto.Message.InteractiveMessage.Footer.create({
 text: `Simpel WhatsApp Bot`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`Tik Tok - Search`),
subtitle: `${ownername}`,
hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: { url: anu.no_watermark } }, { upload: RainMe.waUploadToServer }))
}),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [ 
{
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Next\",\"id\":\".tiktoksearch ${text}\"}`
},
]
})
})
}
}
}, {})

await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
uselimit()}
break

case 'toimage': case 'toimg': {
if (limitnya < 1) return reply(mess.limit)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await RainMe.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
RainMe.sendMessage(from, { image: buffer }, {quoted:kalgans})
fs.unlinkSync(ran)
})
uselimit()}
break

case 'remini': {
if (!quoted) return reply(`Where is the picture?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
RainMe.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: kalgans})
}
break

case 'jarak': {
if (limitnya < 1) return reply(mess.limit)
var [me, to] = text.split`|`
if (!(from && to)) return reply(`example ${prefix + command} Yogyakarta|Jakarta`)
reply(mess.search)
var data = await jarakkota(me, to)
if (data.img) return RainMe.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: kalgans })
uselimit()}
break

case 'pin': case 'pinterest': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 10);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin20': case 'pinterest20': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 20);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin30': case 'pinterest30': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 30);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin40': case 'pinterest40': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 40);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin50': case 'pinterest50': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0,50);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin60': case 'pinterest60': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 60);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin70': case 'pinterest70': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 70);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin80': case 'pinterest80': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 80);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin90': case 'pinterest90': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 90);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'pin100': case 'pinterest100': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`*Example*: ${prefix + command} ${botname}`)
await RainMe.sendMessage(m.chat, { react: { text: "🔎",key: m.key,}
})
  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: RainMe.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 100);
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `• VPS\n• PANEL PETRODACTYL\n• SECRIP BOT WHATSAPP\n• DAN MASIH BANYAK LAGI`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: ownername
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: `RAINSTOREID MENYEDIAKAN :`,
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"MY OWNER","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"GROUP OWNER","url":"${linkgc}","merchant_url":"https://www.google.com"}`
          }, {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"SOURCE","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'HASIL PENCARIAN'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await RainMe.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case 'ttsearch': case 'ttscroll': case 'tiktoksearch': {
if (!text) return reply("Masukan Query!")
    let old = new Date();
    let json;
    try {
        json = await fetchJson(`https://skizo.tech/api/tiktok-search?apikey=${skizo}&keywords=${text}`);
    } catch (err) {
        return m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`);
    }

    function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
    
    var hiasan = "=> ";

    // Ensure json has enough elements
    if (!json || json.length < 8) return m.reply('Data tidak lengkap untuk membuat scroll.');

    let json1 = pickRandom([json[0], json[1], json[3]]);
    let json2 = pickRandom([json[5], json[6], json[7]]);
    let json3 = pickRandom([json[8], json[2]]);
    let json4 = pickRandom([json[7], json[3], json[6]]);
    let json5 = pickRandom([json[4], json[0], json[1]]);

    async function video(url) {
        if (!url) throw new Error('URL video tidak tersedia.');
        const { videoMessage } = await generateWAMessageContent({
            video: {
                url
            }
        }, {
            upload: RainMe.waUploadToServer
        });
        return videoMessage;
    }

    try {
        let msg = generateWAMessageFromContent(
            m.chat,
            {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            body: {
                                text: `result from ${text}`
                            },
                            carouselMessage: {
                                cards: [
                                    {
                                        header: {
                                            videoMessage: await video(json1.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json1.duration || 'N/A'}\n${hiasan}*Play* : ${json1.play_count || 0}\n${hiasan}*Download* : ${json1.download_count || 0}\n${hiasan}*Share* : ${json1.share_count || 0}\n${hiasan}*Comment* : ${json1.comment_count || 0}\n${hiasan}*Like* : ${json1.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json2.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json2.duration || 'N/A'}\n${hiasan}*Play* : ${json2.play_count || 0}\n${hiasan}*Download* : ${json2.download_count || 0}\n${hiasan}*Share* : ${json2.share_count || 0}\n${hiasan}*Comment* : ${json2.comment_count || 0}\n${hiasan}*Like* : ${json2.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json3.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json3.duration || 'N/A'}\n${hiasan}*Play* : ${json3.play_count || 0}\n${hiasan}*Download* : ${json3.download_count || 0}\n${hiasan}*Share* : ${json3.share_count || 0}\n${hiasan}*Comment* : ${json3.comment_count || 0}\n${hiasan}*Like* : ${json3.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json4.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json4.duration || 'N/A'}\n${hiasan}*Play* : ${json4.play_count || 0}\n${hiasan}*Download* : ${json4.download_count || 0}\n${hiasan}*Share* : ${json4.share_count || 0}\n${hiasan}*Comment* : ${json4.comment_count || 0}\n${hiasan}*Like* : ${json4.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },
                                    {
                                        header: {
                                            videoMessage: await video(json5.play),
                                            hasMediaAttachment: true,
                                        },
                                        body: {
                                            text: `[ T I K T O K - S C R O L L ]\n\n${hiasan}*Duration* : ${json5.duration || 'N/A'}\n${hiasan}*Play* : ${json5.play_count || 0}\n${hiasan}*Download* : ${json5.download_count || 0}\n${hiasan}*Share* : ${json5.share_count || 0}\n${hiasan}*Comment* : ${json5.comment_count || 0}\n${hiasan}*Like* : ${json5.digg_count || 0}\n\n`
                                        },
                                        nativeFlowMessage: {
                                            buttons: [
                                                {
                                                    "name": "quick_reply",
                                                    "buttonParamsJson": `{\"display_text\":\"NEXT VIDEO\",\"id\":\".tiktokscroll ${text}\"}`
                                                },
                                            ],
                                        },
                                    },

                                ],
                                messageVersion: 1,
                            },
                        },
                    },
                },
            },
            {}
        );

        await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
        });
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mengirim pesan.');
    }
}
break;

case 'cekip': case 'ip': {
if (limitnya < 1) return reply(mess.limit)
if (args.length !== 1) {
return reply('Format salah! Penggunaan: cekip link');
}
const link = args[0];
dns.resolve4(link, (err, addresses) => {
if (err) {
return reply('Gagal melakukan DNS reverse lookup.');
}
if (addresses.length === 0) {
return reply('Tidak ada alamat IP yang ditemukan.');
}
const ip = addresses[0];
reply(`Alamat IP dari ${link} adalah: ${ip}`);
});
uselimit()}
break

case 'cerpen': {
const mann = require('d-scrape')
const mannr = await mann.random.randomCerpen()
var yaya = `*[ R A N D O M  C E R P E N ]*\n\n*Judul:* ${mannr.judul}\n*Penulis:* ${mannr.penulis}\n\n${mannr.cerita}\n\n_${mannr.sumber}_`
reply(yaya)
}
break

case 'readvo': case 'readviewonce': {
if (!m.quoted) return reply(`Reply view once message to use this command`)
reply(mess.wait)
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
var media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (let chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await RainMe.sendMessage(m.chat, { video: buffer, caption: quotedType.caption }, {quoted: kalgans })
} else if (/image/.test(type)) {
await RainMe.sendMessage(m.chat, { image: buffer, caption: quotedType.caption }, {quoted: kalgans })
}
}
break

case 'tourl': {
if (limitnya < 1) return reply(mess.limit)
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await RainMe.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
uselimit()}
break

case  'cekkhodam':{
    const defaultLang = 'id';
    const gtts = require( 'node-gtts')
    // Penanganan input nama
    let lana;
    if (args.length === 0 || !args[0]) {
        return m.reply('Harap masukkan nama kamu.');
    } else {
        lana = args[0];
    }

    let lang = args[1];
    if (!lang || lang.length !== 2) {
        lang = defaultLang;
    }
    
    const khodam = [
  "Singa",
  "kosoong atau tidak ada",
  "Harimau",
  "Elang",
  "Serigala",
  "Naga",
  "Gajah",
  "Kuda",
  "Macan Tutul",
  "Kerbau",
  "Burung Hantu",
  "Burung Rajawali",
  "Ikan Hiu",
  "Lumba-Lumba",
  "Ular",
  "Kura-Kura",
  "Tupai",
  "Paus",
  "Kelelawar",
  "Kijang",
  "Banteng",
  "Rusa",
  "Anjing",
  "Kucing",
  "Buaya",
  "Kambing",
  "Kuda Nil",
  "Bebek",
  "Angsa",
  "Ayam",
  "Merpati",
  "Burung Beo",
  "Burung Kenari",
  "Burung Kakatua",
  "Bunglon",
  "Cicak",
  "Kodok",
  "Katak",
  "Tikus",
  "Landak",
  "Kanguru",
  "Koala",
  "Panda",
  "Beruang",
  "Rubah",
  "Lynx",
  "Leopard",
  "Jaguar",
  "Cheetah",
  "Badak",
  "Zebra",
  "Antelop",
  "Unta",
  "Alpaka",
  "Llama",
  "Serigala Abu-abu",
  "Serigala Merah",
  "Serigala Putih",
  "Lynx",
  "Harimau Putih",
  "Harimau Siberia",
  "Harimau Sumatra",
  "Gorila",
  "Orangutan",
  "Simpanse",
  "Monyet",
  "Babun",
  "Lemur",
  "Iguana",
  "Komodo",
  "Salamander",
  "Belut",
  "Sotong",
  "Gurita",
  "Kepiting",
  "Lobster",
  "Udang",
  "Kupu-kupu",
  "Lebah",
  "Tawon",
  "Kumbang",
  "Belalang",
  "Jangkrik",
  "Semut",
  "Kecoak",
  "Laba-laba",
  "Kalajengking",
  "Serangga Tongkat",
  "Naga Laut",
  "Kuda Laut",
  "Duyung",
  "Putri Duyung",
  "Burung Kolibri",
  "Burung Hantu Salju",
  "Burung Puyuh",
  "Burung Gagak",
  "Burung Pelikan",
  "Burung Albatros",
  "Burung Flamingo",
  "Burung Hering",
  "Burung Camar",
  "Burung Pinguin",
    "Cincin",
    "Batu Akik",
    "Keris",
    "Tongkat",
    "Pusaka",
    "Patung",
    "Mustika",
    "Tasbih",
    "Kalung",
    "Gelang",
    "Permata",
    "Pedang",
    "Mata Uang",
    "Wesi Kuning",
    "Serat Tali",
    "Belati",
    "Cundrik",
    "Selendang",
    "Jarum",
    "Tombak",
    "Kerikil",
    "Kendi",
    "Kain Kafan",
    "Topi",
    "Payung",
    "Sandal",
    "Kacamata",
    "Sabuk",
    "Sarung",
    "Tali Ikat Pinggang",
    "Surat",
    "Kunci",
    "Lilin",
    "Peniti",
    "Sisir",
    "Cermin",
    "Kendi Air",
    "Piring",
    "Gelas",
    "Mangkuk",
    "Sendok",
    "Sapu",
    "Gayung",
    "Tikar",
    "Bantal",
    "Guci",
    "Lentera",
    "Lampu",
    "Buku",
    "Pena",
    "Dupa",
    "Asbak",
    "Cangkir",
    "Gantungan Kunci",
    "Kalender",
    "Sepeda",
    "Lukisan",
    "Batu Kerikil",
    "Batu Kali",
    "Kipas",
    "Peci",
    "Sorban",
    "Rokok",
    "Topeng",
    "Gamelan",
    "Angklung",
    "Suling",
    "Wayang",
    "Kuda-Kudaan",
    "Sepatu",
    "Jam Tangan",
    "Kosong atau tidak adaa"
];


    const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)];
    let text = `Khodam ${lana} adalah ${randomKhodam}`;
function tts(text, lang = 'id') {
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}    
    


    let res;
    try {
        res = await tts(text, lang);
    } catch (e) {
        m.reply(e + '');
        res = await tts(text, defaultLang);
    } finally {
        reply(text)
        if (res) {
await conn.sendMessage(m.chat, { audio: res, ptt: true, mimetype: "audio/mpeg", fileName: "vn.mp3", waveform: [100, 0, 100, 0, 100, 0, 100] }, { quoted: m });
        }
    }
};
break

case 'daftar': case 'regis': case 'register': {
if (isRegistered) return reply('Kamu sudah terdaftar')
const serialUser = createSerial(20)
mzd = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ Nomor : @${m?.sender.split('@')[0]}
○ Nama : ${pushname}
○ Status : Sukses✅ 
○ Ns : ${serialUser}

Jangan Lupa Baca Rules Ya ${pushname}...
Data User Yang Tersimpan Di Database Bot, Di Jamin Aman Tanpa Tershare (. ❛ ᴗ ❛.)`
veri = m?.sender
if (!m.isGroup) {
addRegisteredUser(m?.sender, pushname, serialUser)
RainMe.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
} else {
addRegisteredUser(m?.sender, pushname, serialUser)
RainMe.sendMessage(m?.chat, {
text: mzd,
contextInfo: {
mentionedJid: [m?.chat],
externalAdReply: {
showAdAttribution: true,
title: `© 2024 | R E G I S T E R`,
body: '',
thumbnailUrl: ppuser,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
}
}
break

case 'ss': case 'ssweb': {
if (limitnya < 1) return reply(mess.limit)
const scp1 = require('./lib/myfunc') 
if (!q) return reply(`Example ${prefix+command} link`)
reply(mess.search)
let krt = await scp1.ssweb(q)
RainMe.sendMessage(from,{image:krt.result,caption: mess.success}, {quoted:kalgans})
uselimit()}
break
//BATAS MAIN MENU


// DOWNLOAD MENU
case 'tiktok':
case 'tt': {
if (limitnya < 1) return reply(mess.limit)
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
let res = await tiktok(`${args[0]}`)
RainMe.sendMessage(m.chat, { video: { url: res.nowm }, caption: res.title, fileName: `tiktok.mp4`, mimetype: 'video/mp4' }).then(() => {
RainMe.sendMessage(m.chat, { audio: { url: res.audio }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4' })
})
uselimit()
}
break

case "ytreels": case "ytmp4":{
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply('Masukan Link Nya!!!')
reply(mess.wait)
downloadMp4(text)
uselimit()
}
break

case 'ytmp3': case 'youtubemp3': {
if (limitnya < 1) return reply(mess.limit)
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
reply(mess.wait)
downloadMp3(text)
uselimit()
}
break

case 'instagram': {
if (limitnya < 1) return reply(mess.limit)
if (!text) throw `Example : ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`
reply(mess.wait)
let iganu = await igdl2(text)
RainMe.sendMessage(m.chat, { video: { url: iganu[0].url }, caption: mess.success })
uselimit()}
break

case 'mediafire': {
if (!args[0]) return reply(`Enter the mediafire link next to the command`)
if (!args[0].match(/mediafire/gi)) return reply(`Link incorrect`)
const { mediafiredl } = require('@bochilteam/scraper')
let full = /f$/i.test(command)
let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
≡ *MEDIAFIRE*

▢ *Number:* ${filename}
▢ *Size:* ${filesizeH}
▢ *Extension:* ${ext}
▢ *Uploaded:* ${aploud}
`.trim()
RainMe.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
}
break

case 'git': case 'gitclone': {
if (!args[0]) return reply2(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply2(`Link invalid!!`)
reply(mess.search)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
RainMe.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: kalgans }).catch((err) => reply('emror'))
}
break 

//BATAS DOWN MENU

//GROUP MENU
case "promote":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di promote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RainMe.groupParticipantsUpdate(m.chat, [users], 'promote').catch(console.log)
}
break

case 'antilinkgroup': {
	await RainMe.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}})  
	await RainMe.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}})  
	await RainMe.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}})  
	await RainMe.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}})  
	await RainMe.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}})  
 let tekss = `
${pushname} 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 ${namebot}
𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗗𝗜𝗣𝗜𝗟𝗜𝗛
`
let sections = [{
title: 'ANTILINK MENU',
highlight_label: 'ENABLE / DISABLE',
rows: [{
title: 'ENABLE',
description: `<!> Enable AntiLink`, 
id: '.antilink enable'
},
{
title: 'DISABLE', 
description: "<!> Disable AntiLink", 
id: '.antilink disable'
}]
}]


let listMessage = {
    title: 'ANTILINK MENU', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: global.idsal,
 newsletterName: 'ALOOO', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RainMe.decodeJid(RainMe.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: tekss
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: Styles('simple whatsapp bot')
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hello, @${m.sender.replace(/@.+/g, '')}!*`,
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ video: fs.readFileSync('./media/antilink.mp4'), gifPlayback: false }, { upload: RainMe.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 name: "cta_url",
 buttonParamsJson: `{"display_text":" 𝖢𝖧𝖠𝖳 𝖮𝖶𝖭𝖤𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
 },
 ],
 })
 })
 }
 }
}, {})

await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (ntilink) return m.reply('_Sudah Diaktifkan_')
ntilink.push(from)
fs.writeFileSync('./lib/ntilink.json', JSON.stringify(ntilink))
m.reply(`_Sukses aktifkan ${command} di group ini_`)
var groupe = await message.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
message.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirim link apapun di grup ini atau kamu akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!ntilink) return m.reply('_Sudah Dimatikan_')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./lib/ntilink.json', JSON.stringify(ntilink))
m.reply(`_Sukses matikan ${command} di group ini_`)
} 
}
break

case "demote":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di demote')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RainMe.groupParticipantsUpdate(m.chat, [users], 'demote').catch(console.log)
}
break

case 'sendlinkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} ${owner}`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await RainMe.groupInviteCode(from)
RainMe.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
RainMe.groupRevokeInvite(from)
break

case 'editdesk':{
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
if (!isAdmins) return reply(mess.admin)
if (!text) return reply(`Text Nya ?`)
await RainMe.groupUpdateDescription(from, text).then((res)).catch((err) => reply(jsonformat(err)))
}
break

case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
 reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
RainMe.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break

case "opentime": {
if (!m?.isGroup) return reply("Khusus Dalam Group")
if (!isAdmins && !isCreator) return reply("Khusus Admin Group")
if (!isBotAdmins) return reply("Jadikan Bot Sebagai Admin Terlebih Dahulu Jika Ingin Menggunakan Fitur Ini")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')
}
reply(`Open Time ${q} Dimulai Dari Sekarang`)
setTimeout(() => {
const nomor = m.participant
const open = `*Tepat Waktu* Grup Dibuka Oleh Admin\nSekarang Member Dapat Mengirim Pesan`
RainMe.groupSettingUpdate(m.chat, 'not_announcement')
reply(open)
}, timer)
}
break

//SEARCH MENU

case  'yts': case 'ytsearch': {
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Example : ${prefix + command} Drunk Text`)
if (limitnya < 1) return reply(mess.limit)
reply(mess.wait)
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
RainMe.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: kalgans })
uselimit()}
break

case "google":{
if (limitnya < 1) return reply(mess.limit)
if (!text) return reply(`Example : ${prefix + command} ${botname}`);
let google = require("google-it");
google({ query: text }).then((res) => {
let teks = `Google Search From : ${text}\n\n`;
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`;
teks += `⭔ *Description* : ${g.snippet}\n`;
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`;
}
reply(teks);
});
uselimit()}
break

case 'owner': {
await RainMe.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = `${thumbnail}`
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: RainMe.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *𝖧𝖺𝗂 𝖪𝖺𝗄 ${pushname}, 𝖳𝖾𝗄𝖺𝗇 𝖳𝗈𝗆𝖻𝗈𝗅 𝖸𝖺𝗇𝗀 𝖻𝖾𝗋𝗍𝗎𝗅𝗂𝗌𝗄𝖺𝗇 𝖢𝗁𝖺𝗍 𝖮𝗐𝗇𝖾𝗋 𝖴𝗇𝗍𝗎𝗄 𝖬𝖾𝗇𝗀𝗁𝗎𝖻𝗎𝗇𝗀𝗂 𝖭𝗈𝗆𝗈𝗋 𝖮𝗐𝗇𝖾𝗋 𝗄𝗎*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*𝖩𝖠𝖭𝖦𝖠𝖭 𝖣𝖨 𝖲𝖯𝖠𝖬 𝖸𝖠 𝖪𝖠𝖪, 𝖩𝖨𝖪𝖠 𝖲𝖫𝖮𝖶 𝖱𝖤𝖲 𝖪𝖤𝖬𝖴𝖭𝖦𝖪𝖨𝖭𝖠𝖭 𝖫𝖠𝖦𝖨 𝖲𝖨𝖡𝖴𝖪*` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"👤 𝗖𝗛𝗔𝗧 𝗢𝗪𝗡𝗘𝗥","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *𝖧𝖺𝗅𝗈 𝖪??𝗄 ${pushname}, 𝖳𝖾𝗄𝖺𝗇 𝖳𝗈𝗆𝖻𝗈𝗅 𝖸𝖺𝗇𝗀 𝖻𝖾𝗋𝗍𝗎𝗅𝗂𝗌𝗄𝖺𝗇 𝖢𝗁𝖺𝗍 𝖡𝗈𝗍 𝖴𝗇𝗍𝗎𝗄 𝖡𝖾𝗋𝗆𝖺𝗂𝗇 ${namebot}*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*TERIMAKASIH JIKA SUDAH MEMBACA SAMPAI SELESAIKAN*` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"💬  𝗖𝗛𝗔𝗧 𝗕𝗢𝗧","url":"https://wa.me/${nobot}","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break

case 'ai': case 'openai': {
	await RainMe.sendMessage(m.chat, { react: { text: "🕛",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕒",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕕",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
})
await RainMe.sendMessage(m.chat, { react: { text: "✅️",key: m.key,}
})
if (!text) return reply(`>${command} Apa itu Coding`)
            reply(mess.search)
            let yanz = await fetchJson(`https://aemt.me/v2/gpt4?text=${text}`)
RainMe.sendMessage(m.chat, {
text: `${tTeks2}${yanz.result}`,
contextInfo: {
externalAdReply: {
showAdAttribution: false,
title: `O P E N - A I`,
body: '',
thumbnailUrl: `${aithumb}`,
sourceUrl: hariini,
mediaType: 1,
renderLargerThumbnail: true
}}
})
            }
break

case "add":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor yang ingin di tambahkan')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RainMe.groupParticipantsUpdate(m?.chat, [users], 'add').catch(console.log)
}
break

case "kick":{
if (m.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return
if (!text && !m?.quoted) reply('masukkan nomor / tag yang ingin di kick')
let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await RainMe.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
}
break

case 'linkgroup': case 'linkgc': {
if (!isCreator) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.badm)
let response = await RainMe.groupInviteCode(from)
RainMe.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'tagall': {
if (!isAdmins) return reply(mess.admin)
if (!m.isGroup) return
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
RainMe.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: kalgans })
}
break

case 'biochange':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'enable') {
autobio = true
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
} else if (q == 'disable') {
autobio = false
reply(`Berhasil Mengubah AutoBio Ke ${q}`)
}
break   

case 'autobio': {
if (!isCreator) return reply(mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "[ *${botname} – ${versionbot}* ]"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: Styles(`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: "rorr",
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".biochange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".biochange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'RainMechat': {
if (!isCreator) return (mess.owner)
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ''
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: "Simpel WhatsApp Bot"
}),
header: proto.Message.InteractiveMessage.Header.create({
title: (`click button *enable* to enable autobio\nclick button *disable* to disable autobio`),
subtitle: `${ownername}`,
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Enable\",\"id\":\".RainMechatchange enable\"}"
},
{
"name": "quick_reply",
"buttonParamsJson": "{\"display_text\":\"Disable\",\"id\":\".RainMechatchange disable\"}"
},
 ],
 })
 })
 }
 }
}, {})

await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'Rainchatchange':{
if (args[0] === "enable") {
if (db.data.chats[m.chat].RainMe) return reply(`activated`)
db.data.chats[m.chat].RainMe = true
reply('Successfully Activate Auto Chat')
} else if (args[0] === "disable") {
if (!db.data.chats[m.chat].RainMe) return reply(`it's deactivated`)
db.data.chats[m.chat].RainMe = false
reply('Successfully Disabling Auto Chat ')
} else {
reply(`${prefix+command} enable -- _mengaktifkan_\n${prefix+command} disable -- _Menonaktifkan_`)
}}
break

case'bard':{
if (limitnya < 1) return reply(mess.limit)
if (!text) return m.reply(`*Example*: ${prefix + command} siapa kamu`)
let res = await bard(text)
RainMe.sendMessage(m.chat, {
text: res,
contextInfo: {
externalAdReply:{
title: `Bard-Ai`,
body: `Bard-Ai`,
thumbnailUrl: `https://telegra.ph/file/e93bdeb0ad6e6d22d57c4.jpg`,
sourceUrl: `https://google.com`,
mediaType: 1,
renderLargerThumbnail: true
}}},{quoted: kalgans})
uselimit()}
break

case 'delsesi':
case 'clearsession':{
fs.readdir("./session", async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return reply('Unable to scan directory: ' + err);
}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
)
console.log(filteredArray.length);
let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
if (filteredArray.length == 0) return reply(teks)
filteredArray.map(function(e, i) {
teks += (i + 1) + `. ${e}\n`
})
reply(teks)
await sleep(2000)
reply("Menghapus file sampah...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply("Berhasil menghapus semua sampah di folder session")
});
}
break

case 'setname': case 'setsubject': {
if (!text) return reply(`Text ?`)
await RainMe.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break

case 'sc': {
await RainMe.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = `${thumbnail}`
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: RainMe.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *𝖧𝖠𝖨 𝖪𝖠𝖪 ${pushname}, ${tesksc}*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*${tesksesudahsc}*` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                           name: "cta_url",
  buttonParamsJson: `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> *𝖧𝖺𝗅𝗈 𝖪𝖺𝗄 ${pushname}, 𝖳𝖾𝗄𝖺𝗇 𝖳𝗈𝗆𝖻𝗈𝗅 𝖸𝖺??𝗀 𝖻𝖾𝗋𝗍𝗎𝗅𝗂𝗌𝗄𝖺𝗇 𝖢𝗁𝖺𝗍 𝖡𝗈𝗍 𝖴𝗇𝗍𝗎𝗄 𝖡𝖾𝗋𝗆𝖺𝗂𝗇 ${namebot}*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*𝖳𝖤𝖱𝖨𝖬𝖠𝖪𝖠𝖲𝖨𝖧 𝖩𝖨𝖪𝖠 𝖲𝖴𝖣𝖠𝖧 𝖬𝖤𝖬𝖡𝖠𝖢𝖠 𝖲𝖠𝖬𝖯𝖠𝖨 𝖲𝖤𝖫𝖤𝖲𝖠𝖨𝖪𝖠𝖭*` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"💬  𝗖𝗛𝗔𝗧 𝗕𝗢𝗧","url":"https://wa.me/${nobot}","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break

case "done": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
if (!text.split(",")) return m.reply("barang,harga\n\n*Contoh :* Panel Unlimited,2")
const [barang, harga] = text.split(",")
if (isNaN(harga)) return m.reply("Format Harga Tidak Valid")
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*TRANSAKSI DONE BY ${ownername} ✅*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*⏰ Waktu :* ${time}

_*Terimakasih Sudah Mempercayai & Menggunakan Jasa Saya 🥳*_`
 RainMe.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break

case 'tunda':
text_trxpending = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚 」

𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗣𝗘𝗡𝗗𝗜𝗡𝗚
𝗛𝗔𝗥𝗔𝗣 𝗕𝗘𝗥𝗦𝗔𝗕𝗔𝗥`
await RainMe.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxpending,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case 'batal':
text_trxbatal = `「 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗕𝗔𝗧𝗔𝗟 」

📆 𝗧𝗮𝗻𝗴𝗴𝗮𝗹: ${tanggal2}
🕰️ 𝗪𝗮𝗸𝘁𝘂: ${time}
✨ 𝗦𝘁𝗮𝘁𝘂𝘀: Batal

𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝗧𝗿𝗮𝗻𝘀𝗮𝗸𝘀𝗶 𝗕𝗮𝘁𝗮𝗹`
await RainMe.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: text_trxbatal,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
break

case "reqpanel":{
if (!isCreator) return;
ewe = `*بِسۡـــــــــمِ ٱللهِ ٱلرَّحۡـمَـٰنِ ٱلرَّحِـــــــيم*

Ram : 
Username :
Nomor Wa : 
▰▰▰▰▰▰▰▰
*Garansi 14 Day*
*Create ${tanggal2}*
*Hari Ini ${hariini}*`
await RainMe.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: ewe,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case 'payment': {
await RainMe.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
const url = `${qris}`
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: RainMe.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {},
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰[𝗣𝗔𝗬𝗠𝗘𝗡𝗧]▰▰▰▰▰▰▰▰
> 𝗗𝗔𝗡𝗔 : ${dana}
> 𝗢𝗩𝗢 : ${ovo}
> 𝗚𝗢𝗣𝗔𝗬 : ${gopay} 
> 𝗤𝗥𝗜𝗦𝗦 : 𝗦𝗖𝗔𝗡 𝗕𝗔𝗥𝗖𝗢𝗗𝗘 𝗬𝗔𝗡𝗚 𝗔𝗗𝗔 𝗗𝗜 𝗚𝗔𝗠𝗕𝗔𝗥 𝗜𝗡𝗜 𝗬𝗔 𝗞𝗔𝗞
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

𝗝𝗔𝗡𝗚𝗔𝗡 𝗟𝗨𝗣𝗔 𝗕𝗨𝗞𝗧𝗜 𝗧𝗥𝗔𝗡𝗦𝗔𝗞𝗦𝗜 𝗬𝗔 𝗞𝗔??` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"𝖢𝖱𝖤𝖠𝖳𝖮𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: `▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
> 𝖩𝖨𝖪𝖠 𝖲𝖴𝖣𝖠𝖧 𝖣𝖨 𝖳𝖥 𝖲𝖨𝖫𝖠𝖧𝖪𝖠𝖭 𝖢𝖧𝖠𝖳 𝖮𝖶𝖭𝖤𝖱 𝖲𝖠𝖸𝖠 𝖸𝖠 𝖪𝖠𝖪, 𝖣𝖤𝖭𝖦𝖠𝖭 𝖬𝖤𝖭𝖦𝖪𝖫𝖨𝖪 𝖢𝖧𝖠𝖳 𝖮𝖶𝖭𝖤𝖱 𝖸𝖠𝖭𝖦 𝖣𝖨 𝖡𝖠𝖶𝖠𝖧
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*TERIMAKASIH JIKA SUDAH MEMBACA SAMPAI SELESAIKAN*` },
                    nativeFlowMessage: {
                      buttons: [
                        {
                          name: "cta_url",
  buttonParamsJson: `{"display_text":"💬  𝖢𝖧𝖠𝖳 𝖮𝖶𝖭𝖤𝖱","url":"https://wa.me/${owner}","merchant_url":"https://www.google.com"}`,
                        },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    );

    await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
}
break

case'zanz':{
if (!text) return reply(`Ya Kamu Kah Panggil Aku? Kenapa Panggil Zanz Bang`)
function checkText(text) {
const lowerCaseText = text.toLowerCase();
if (lowerCaseText.includes('cariin') || lowerCaseText.includes('carikan') || lowerCaseText.includes('putarin') || lowerCaseText.includes('putarkan')) {
return 'ok';
} else {
return 'no';
}
}
 if (text.includes('grup') && text.includes('tutup')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
    
await RainMe.groupSettingUpdate(m.chat, 'announcement')
reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
} else if (text.includes('grup') && text.includes('buka')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
 
await RainMe.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
} else if (text.includes('kick') || text.includes('kik')) {
if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
        if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
 
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await RainMe.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`)
} else if (checkText(text) === 'ok') {
async function findSong(text) {
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const tokens = tokenizer.tokenize(text.toLowerCase());

const keywords = ['putar', 'putarkan', 'putarlagu', 'lagu', 'cariin', 'carikan', 'mainkan', 'mainkanlagu', 'play', 'playmusic', 'playasong'];
const songKeywords = tokens.filter(token => keywords.includes(token));

if (songKeywords.length === 0) {
return "Maaf, tidak dapat menemukan permintaan lagu dalam teks tersebut.";}
let songTitle = tokens.slice(tokens.indexOf(songKeywords[0]) + 1).join(' ');
return songTitle}
const songName = await findSong(text)
reply(`Oke, tunggu sebentar ya~ Aku sedang mencari "${songName}" untukmu! 😉`);
await sleep(6000)
let res = await yts(text)
let vid = res.videos[0]
await RainMe.sendMessage(m.chat, { react: { text: "🧢",key: m.key,}
})  
if (!vid) return reply('Tidak di temukan, coba untuk membalikkan judul dan author nya')
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
reply(`Berikut adalah lagu yang kamu pilih: ${title}`)
const url = 'https://www.youtube.com/watch?v=' + videoId
const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
try {
let doc = { 
audio: 
{ 
url: link 
}, 
mimetype: 'audio/mp4', 
fileName: `${title}`,
contextInfo: { 
externalAdReply: { 
showAdAttribution: true, 
renderLargerThumbnail: false,
mediaType:  1,
mediaUrl: url,
title: foter1,
body: foter1,
sourceUrl: "",
thumbnail: await(await RainMe.getFile(thumbnail)).data}}}
return RainMe.sendMessage(m.chat, doc, { quoted: kalgans })
     
} catch (e) {
console.error(e);
reply(`Maaf, terjadi kesalahan dalam mencari lagu. 😔`);
}
} else {
}}
break

case 'totalfitur': {
reply(`${totalFitur()} Features`)
}
break

break

// game menu
case "tebakbomb": case "bomb": {
if (!m.isGroup) return reply(mess.group)
if (m.chat in RainMe.bomb) return RainMe.sendText(m.chat, "Masih ada game yang belum terselsaikan!", RainMe.bomb[m.chat][0]);
RainMe.bomb = RainMe.bomb ? RainMe.bomb : {};
let id = m.chat,
timeout = 180000;
const bom = ['💥', '✅', '✅', '✅', '✅', '✅', '✅', '✅', '✅'].sort(() => Math.random() - 0.5);
const number = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣'];
const array = bom.map((v, i) => ({
emot: v,
number: number[i],
position: i + 1,
state: false
}));
let teks = `*🎮 GAME TEBAK BOM 🎮*\n\nKirim angka *1* - *9* untuk membuka *9* kotak nomor di bawah ini :\n\n`;
for (let i = 0; i < array.length; i += 3) teks += array.slice(i, i + 3).map(v => v.state ? v.emot : v.number).join('') + '\n';
teks += `\nWaktu : *${((timeout / 1000) / 60)} menit*\nHadiah : *Random Balance*\n\nApabila mendapat kotak yang berisi bom maka *Hadiah* tidak di berikan`;
let msg = await RainMe.sendText(m.chat, teks, RainMe.bomb[id] ? RainMe.bomb[id][0] : m);
let { key } = msg

let v;
RainMe.bomb[id] = [
msg,
array,
setTimeout(() => {
v = array.find(v => v.emot == '💥');
if (RainMe.bomb[id]) RainMe.sendText(m.chat, `*Waktu habis*\n\nKotak yang berisi bom ${v.number} tidak terbuka\nGame dihentikan!`, RainMe.bomb[id][0]);
delete RainMe.bomb[id];
}, timeout),
key
];
}
break

case 'casino': {
if (!m.isGroup) return reply(mess.group)
let buatall = 1
RainMe.casino = RainMe.casino ? RainMe.casino : {}
if (m.chat in RainMe.casino) return reply('Masih Ada Yang Melakukan Casino Disini, Tunggu Sampai Selesai!!')
else RainMe.casino[m.chat] = true
try {
let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
let Aku = (randomaku * 1)
let Kamu = (randomkamu * 1)
let count = args[0]
count = count ? /all/i.test(count) ? Math.floor(db.data.users[m.sender].balance / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (args.length < 1) return reply(`${prefix}casino <jumlah>\n${prefix}casino 1000`)
if (db.data.users[m.sender].balance >= count * 1) {
db.data.users[m.sender].balance -= count * 1
if (Aku > Kamu) {
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Kehilangan ${count} Balance`)
} else if (Aku < Kamu) {
db.data.users[m.sender].balance += count * 2
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Kamu Kalah*\nKamu Mendapatkan ${count * 2} Balance`)
} else {
ldb.data.users[m.sender].balance += count * 1
reply(`💰 Casino 💰\n*${pushname}:* ${Kamu} Point\n*${botname}:* ${Aku} Point\n\n*Seri*\nKamu Mendapatkan ${count * 1} Balance`)
}
} else reply(`Balance Kamu Tidak Mencukupi Untuk Casino Silahkan *bermain game* Terlebih Dahulu!`)
} catch (e) {
console.log(e)
reply(mess.error)
} finally {
delete RainMe.casino[m.chat]
}
}
break

case "suit": {
if (!m.isGroup) return reply(mess.group)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(m.sender))) return reply(`Selesaikan dulu suit mu yang sebelumnya`)
if (m.quoted || text) {
if (froms === botNumber) return reply(`Tidak bisa bermain suit dengan bot!`)
if (froms === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri!`)
if (Object.values(suit).find(v => v.id.startsWith('suit') && [v.penantang, v.ditantang].includes(froms))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain`)
let hadiah = randomNumber(2000, 3000)
let timeout = 60 * 1000
let id = 'suit_' + Date.now()

suit[id] = {
id: id,
penantang: m.sender,
ditantang: froms,
status: 'WAIT',
hadiah: hadiah,
chat: await RainMe.sendMessage(m.chat, {text: `*🎮 GAME SUIT 🎮*\n\n@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKetik *Y atau N* untuk bermain\nY = menerima suit\nN = menolak suit\n\nHadiah : *$${hadiah}* balance`, contextInfo: {mentionedJid: [froms, m.sender]}}, {quoted: kalgans}),
timeout: timeout,
waktu: setTimeout(() => {
if (suit[id]) RainMe.sendMessage(m.chat, {text: `Waktu habis! @${froms.split("@")[0]} tidak merespon suit\nGame dibatalkan!`, contextInfo: {mentionedJid: [froms]}}, {quoted: suit[id].chat})
delete suit[id]
}, timeout)
}
} else reply('@tagtarget')
}
break

case 'slot': {
if (!m.isGroup) return reply(mess.group)
let hadiah = randomNumber(2000, 3000)
let emojis = ["😹", "🧢", "🗿"]
let a = Math.floor(Math.random() * emojis.length)
let b = Math.floor(Math.random() * emojis.length)
let c = Math.floor(Math.random() * emojis.length)
let x = [],
y = [],
z = []
for (let i = 0; i < 3; i++) {
x[i] = emojis[a]
a++
if (a == emojis.length) a = 0
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b]
b++
if (b == emojis.length) b = 0
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c]
c++
if (c == emojis.length) c = 0
}
let end
if (a == b && b == c) {
end = `JACKPOT! *$${hadiah} point*`
db.data.users[m.sender].balance += hadiah
} else if (a == b || a == c || b == c) {
end = `Hampir Beruntung! *+1 Limits*`
db.data.users[m.sender].limit += 1
} else {
end = `LOSE! *-$${hadiah}*`
if (hadiah > db.data.users[m.sender].balance) {
ldb.data.users[m.sender].balance = 0
} else {
db.data.users[m.sender].balance -= hadiah
}
}
let teks = `乂  *S L O T S*\n\n`
teks += `	[ ${x[0]} ${y[0]} ${z[0]} ]\n`
teks += `	[ ${x[1]} ${y[1]} ${z[1]} ]\n`
teks += `	[ ${x[2]} ${y[2]} ${z[2]} ]\n`
teks += `\n${end}`
reply(teks)
}
break
case 'tictactoe': case 'ttt': case 'ttc': case 'xox':
if (!m.isGroup) return reply(mess.group)
if (from in tictactoe) return reply(`Masih ada game yang blum selesai`)
if (!froms) return reply(`Kirim perintah *${command}* @tag atau reply pesan orangnya!`)
if (froms === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (froms === sender) return reply(`Sad amat main ama diri sendiri`)
var hadiah = randomNumber(10, 20)
await reply(`@${sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain TicTacToe\n\n*Kirim (Y/N)* untuk bermain\n\nHadiah : ${hadiah} balance`)
tictactoe[from] = {
id: from,
status: null,
hadiah: hadiah,
penantang: sender,
ditantang: froms,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
}
break
case 'delttt': case 'delttc':
if (!m.isGroup) return reply(mess.group)
if (!(from in tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
if (isAdmins || isOwner) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].penantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else if (tictactoe[from].ditantang.includes(sender)) {
delete tictactoe[from];
reply(`Berhasil menghapus sesi tictactoe di grup ini\n\n-$500`)
} else {
reply(`Anda tidak bisa menghapus sesi tictactoe karena bukan pemain!`)
}
break

//===PANEL MENU====//

case "ramlist": {
lrm = `RAM YANG TERSEDIA:\n
1GB ✅
2GB ✅
3GB ✅
4GB ✅
5GB ✅
6GB ✅
7GB ✅
8GB ✅
9GB ✅
10GB ✅
UNLI ✅`
reply(lrm)
}
break

case "1gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "2gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2024"
let cpu = "30"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "3gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3024"
let cpu = "80"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "4gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4024"
let cpu = "90"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "5gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5024"
let cpu = "100"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "6gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6000"
let cpu = "150"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "7gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7000"
let cpu = "150"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "8gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8000"
let cpu = "150"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "9gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "9000"
let cpu = "150"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "10gb": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "10000"
let cpu = "150"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break


case "unli": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@s.id"
akunlo = "https://telegra.ph/file/24b24857cf823991a2c5f.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`*Sedang Membuat Server, Tunggu Sebentar ☕*`)
ctf = `┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○
└──────────⁠─────────`
RainMe.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = reply(`*SUKSES MEMBUAT SERVER✅*

Silahkan Cek Akun Pannel Anda
Yang Telah Dikirim Oleh Saya!

*ID SERVER : ${server.id}*

Untuk Delete Server Silahkan Ketik
_.delsrv id server_
`)

}
break

case "delpanel": case "hapuspanel": {
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply("idservernya")
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan")
reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break

case "delusr": {
if (!isCreator) return reply(mess.owner)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
break

case "delsrv": {
if (!isCreator) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break

case "listpanel1": case "listp": case "listserver": {
if (!isCreator) return m.reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "*🌐 LIST SERVER PANEL BOT*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `*┌ ◦* ID Server *${s.id}*\n`;
messageText += `*│ ◦* Nama Server *${s.name}*\n`
messageText += `*│ ◦* Ram *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*\n`
messageText += `*│ ◦* CPU *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*\n`;
messageText += `*└ ◦* Storage *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await RainMe.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break

case "listadmin": {
if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list admin:\n\n";

for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
}

messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

await RainMe.sendMessage(m.chat, { text: messageText }, { quoted: kalgans });

if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break

case "addadmin": {
if (!isCreator) return reply(mess.owner)
if (!text) return reply("username")
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(5).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID :* ${user.id}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: kalgans}) 
await RainMe.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "listsrv": {
if (!isCreator) return reply(`Maaf, Anda tidak dapat melihat daftar server.`);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
  
for (let server of servers) {
let s = server.attributes;
    
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
    
let data = await f3.json();
var status = data.attributes ? data.attributes.current_state : s.status;  

}
  
RainMe.sendList(m.chat, `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`, "Powered By LeXcZ", {
title: `Total Server: ${res.meta.pagination.count}`, sections: [{
title: "List Servers Panel",
rows: servers.map(a => ({
title: `ID: ${a.attributes.id} - Status: ${status}`,
description: a.attributes.name,
id: `.delsrv ${a.attributes.id}`
}))
}]
})
                
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break;

case "listusr": {
if (!isCreator) return reply(mess.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
  
messageText = `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
totalUsr = `Total Users: ${res.meta.pagination.count}`;
  
RainMe.sendList(m.chat, messageText, "Powered By LeXcZ", {
title: totalUsr, sections: [{
title: "List Users Panel",
rows: users.map(a => ({
title: `ID: ${a.attributes.id} - Status: ${a.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}`,
description: a.attributes.username,
id: `.delusr ${a.attributes.id}`
}))
}]
})
  
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
}
}
break

case "addpanel": case "buatpanel": {
if (!isPremium) return reply(mess.premium)
if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply("nama")
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: "© "+global.botname 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "List Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"Powered By ${ownername}\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".cpunli" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".cp1gb" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".cp2gb" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".cp3gb" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".cp4gb" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".cp5gb" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".cp6gb" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".cp7gb" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".cp8gb" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".cp9gb" }, 
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 220%", "id": ".cp10gb" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: kalgans}) 
await RainMe.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
            
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cpunli": {
if (!isPremium) return reply(mess.premium)
if (global.panel == null) return reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "cp2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "cp3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "cp4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "cp6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "cp7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "cp8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "cp9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "cp10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!isPremium) return reply(mess.premium)
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username+crypto.randomBytes(5).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await reply("*Berhasil Membuat Akun Panel ✅*\nData Akun Sudah Dikirim Ke Private Chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID :* ${server.id}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}
* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}
* *Created :* ${desc}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
},
]
})
})} 
}}, {userJid: m.sender, quoted: kalgans}) 
await RainMe.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break

case "unli": {
if (!isPremium) return reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/83d917fb60cac781bbb06.jpg" 
if (!u) return
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
let ctf = `*===[ BERIKUT DATA AKUN PANEL ANDA ]===*

⎙─➤ *USER ID* :  ${user.id}
⎙─➤ *USERNAME* :  ${user.username}
⎙─➤ *PASSWORD* :  ${password}
⎙─➤ *LOGIN* : ${domain}
=====================================
*📝 NOTE :*
*SAYA HANYA MENGIRIM DATA 1 KALI*
*AKUN ANDA MOHON DI SIMPAN BAIK BAIK*
*KALAU DATA AKUN ANDA HILANG SAYA*
*TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
`
RainMe.sendMessage(u,{text: ctf })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
`)
}
break

case "addusr": {
if (!isCreator) return reply(mess.owner)
let s = text.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let u = m.quoted ? m.quoted.sender : s[1] ? s[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await RainMe.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : s[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = `
*SUCCESSFULLY ADD USER*

╭─❏ *『 USER INFO 』*
┣❐ ➤ *ID* : ${user.id}
┣❏ ➤ *USERNAME* : ${user.username}
┣❏ ➤ *EMAIL* : ${user.email}
┣❏ ➤ *NAME* : ${user.first_name} ${user.last_name}
┣❏ ➤ *CREATED AT* :  ${tanggal2}
┗⬣ *PASSWORD BERHASIL DI KIRIM KE @${u.split`@`[0]}*`

let sections = [{
title: 'Paket Server Panel',
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,0/0,0`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,1200/1200,50`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,2200/2200,70`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,3200/3200,100`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,4200/4200,125`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,5200/5200,150`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,6200/6200,175`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,7200/7200,175`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.addsrv ${user.first_name},${tanggal2},${user.id},${egg},1,8200/8200,200`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: '120363267533195844@newsletter',
 newsletterName: 'Powered By Izanami', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: RainMe.decodeJid(RainMe.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ''
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `${foter2}`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: Styles(`Please choose the size you want to buy`),
 subtitle: "dcdXdino",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/2396b22796cc175c80f28.jpg" } }, { upload: RainMe.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await RainMe.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
RainMe.sendMessage(u, { text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
╭─❏ *『 USER INFO 』*
┣❏ ➤ *📧EMAIL* : ${email}
┣❏ ➤ *👤USERNAME* : ${username}
┣❏ ➤ *🔐PASSWORD* : ${password.toString()}
┣❏ ➤ *🌐LOGIN* : ${domain}
┗⬣`,
})
}
break

case "addsrv": {
if (!isCreator) return reply(mess.owner)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${server.created_at}`)
}
break

case 'subdomain':{
let list =`Hai Kak ${pushname}

.domain1 celiaofficial.my.id
.domain2 celiastore.my.id
.domain3 panellofficial.site
.domain4 panellofficial.my.id
.domain5 celiapanellstore.my.id
.domain6 celiaofficial.tech
.domain7 vinzzxofficial.xyz
.domain8 vinnzofficial.biz.id
.domain9 vinzzxofficial.xyz
.domain10 celiaofficial.me
.domain11 celiaofficial.live
.domain12 celiaofficial.email
.domain13 celiaoffcial.me
.domain14 panellkuofficial.tech
.domain15 sellerpanel-vvip.my.id
.domain16 shopwebsite.my.id
.domain17 mypanell-store.com(Special Domen)
.domain18 dewapanel.my.id
.domain19 celiaofficial.xyz
-------------------------------------------------------
*Contoh Membuat Subdomain :*
Ketik *.domain1* hostname|ipvps

Nb:
Mau Di Akses Subdomain Di Grup Anda?
Chat .owner

*© ${ownername}*`
await RainMe.relayMessage(m.chat,  {
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
amount1000: 1000000000,
requestFrom: m.sender,
noteMessage: {
extendedTextMessage: {
text: list,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
}}}}}}, {})
}
break

case 'domain1': {
 
    if (!jangan) return reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ec4430e647897d90930cbb9085dbba06";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
case 'domain2': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0eb97a28633fbb51b17a32d6fe52dcaf";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiastore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain2 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
case 'domain3': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5ac16dadc6a80d53657786f70c509a92";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "panellofficial.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain4': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f2bc5ee0d4471aa74dd689c297c7aa43";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "panellofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain4 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain5': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "57671edad3d50d309860d91d25385e05";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiapanellstore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain6': {
    if (!jangan) return reply("Fitur Ini Khusus Untuk Reseller ${ownername}\nMau Join?  \n\n Hubungi Wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "46fc44dcb0af3809e8d05f9784aaa348";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
                          if (e[mess.success]) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By ${ownername}⚡_*`);
else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
}); }
break

case 'domain7': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b464a9d67be6bea2b877fff0cee8577";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "vinzzxofficial.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain7 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain8': { 
  if (!jangan) return reply("Fitur Ini Khusus Untuk Reseller Subdomain ${ownername}\nMau Join? \n\n Hubungi Wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9d41b086735604b2c87aa3fcc1fb9068";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "vinnzofficial.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain8 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain9': {
 
    if (!jangan) return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3b464a9d67be6bea2b877fff0cee8577";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "vinzzxofficial.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain9 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain10': { 
  if (!jangan) return reply("Fitur Ini Khusus Untuk Reseller ${ownername}\nMau Join?\n\nHubugi wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "862d95f370e76ac2cca10fd8d5db5968";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain10 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`✅berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain11': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a066b96a88912ed621e851c0a9fe0b08";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.live";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain11 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain12': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "1d6eb54f8c7e50870b1458c21816df4b";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.email";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain12 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain13': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "3241645f1ad864d3ee03ba26cc55d880";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaoffcial.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain13 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain14': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ea22354b939b4b6ee6d9525130741a95";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "panellkuofficial.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain14 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain15': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "946d5f35d0657cb8bfa442675b37ec42";
               let apitoken = "9IJl3ihBj_McQT6aG0D5MBFQH3YmB1PO7Z34XLr1";
               let tld = "sellerpanel-vvip.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain15 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain16': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d28c394ba64bf4ecfec1917829d8bced";
               let apitoken = "86ZA4NPGG6ijzlhuRKqc3X3qbH8mgvlzOPsrBApB";
               let tld = "shopwebsite.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain16 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain17': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "95a92e2d61881587d97147504adae179";
               let apitoken = "Gh2ZG8DO7MoD7behXJc9NilacIdSv9o1BnMxiY-S";
               let tld = "mypanell-store.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain17 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain18': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "5024bc4a02924cf69ddf4dfa6ee96069";
               let apitoken = "OajJ0jtCB0FTFwfdiTB_ktzNKFWAmsENFdlE4Hvd";
               let tld = "dewapanel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain18 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           
           case 'domain19': {
 
    if (!jangan) return reply("Fitur Khusus Resseler Subdo Join Chat Chat ${ownername} wa.me/${owner}")
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f22b76756f00ec227c2007ac8ebbeb88";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "celiaofficial.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return reply("PENGGUNAAN .domain19 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) reply(`*_Berhasil Menambah Subdomain✅_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain ${ownername}⚡_*`);
             else reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return false
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return reply(bang)}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return false
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))}}
if (budy.startsWith('$')) {
if(!isCreator) return false
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
RainMe.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
console.log(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
