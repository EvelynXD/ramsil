import axios from 'axios'
import FormData from 'form-data'
import fetch from 'node-fetch'
import fs from 'fs'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, isPrems, isOwner, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let imgr = flaaa.getRandom()

let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
let template = (args[0] || '').toLowerCase()
if (!args[0]) {
let caption = `*Contoh Penggunaan Single*
${usedPrefix + command} cecan

*Contoh Penggunaan Multi*
${usedPrefix + command} pinterest |wibu

*List:*
• ${usedPrefix + command} alkitabsearch
• ${usedPrefix + command} animeidsearch
• ${usedPrefix + command} asupanloli
• ${usedPrefix + command} asupan
• ${usedPrefix + command} china
• ${usedPrefix + command} hijab
• ${usedPrefix + command} indon
• ${usedPrefix + command} japan
• ${usedPrefix + command} korea
• ${usedPrefix + command} ahegao
• ${usedPrefix + command} anal
• ${usedPrefix + command} ass
• ${usedPrefix + command} bdsm
• ${usedPrefix + command} blowjob
• ${usedPrefix + command} cuckold
• ${usedPrefix + command} cum
• ${usedPrefix + command} ecchi
• ${usedPrefix + command} ero
• ${usedPrefix + command} eroyuri
• ${usedPrefix + command} feet
• ${usedPrefix + command} femdom
• ${usedPrefix + command} foot
• ${usedPrefix + command} futanari
• ${usedPrefix + command} gangbang
• ${usedPrefix + command} glasses
• ${usedPrefix + command} hentai
• ${usedPrefix + command} hntgifs
• ${usedPrefix + command} holo
• ${usedPrefix + command} holoero
• ${usedPrefix + command} jahy
• ${usedPrefix + command} kuni
• ${usedPrefix + command} loli2
• ${usedPrefix + command} loli
• ${usedPrefix + command} manga
• ${usedPrefix + command} masturbation
• ${usedPrefix + command} milf
• ${usedPrefix + command} neko
• ${usedPrefix + command} orgy
• ${usedPrefix + command} panties
• ${usedPrefix + command} pussy
• ${usedPrefix + command} tentacles
• ${usedPrefix + command} thighs
• ${usedPrefix + command} tits
• ${usedPrefix + command} trap
• ${usedPrefix + command} waifu
• ${usedPrefix + command} yaoi
• ${usedPrefix + command} yuri
• ${usedPrefix + command} zettairyouiki
• ${usedPrefix + command} asupan
• ${usedPrefix + command} pinterest
• ${usedPrefix + command} pinterests
• ${usedPrefix + command} black
• ${usedPrefix + command} bp
• ${usedPrefix + command} breakwall
• ${usedPrefix + command} circuit
• ${usedPrefix + command} fiction
• ${usedPrefix + command} glitch
• ${usedPrefix + command} matrix
• ${usedPrefix + command} neon
• ${usedPrefix + command} neonlight
• ${usedPrefix + command} neonpl
• ${usedPrefix + command} toxic
• ${usedPrefix + command} wanted
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sgc
     }}
  })
            }
            
if (command) {
try {
switch (template) {
        
            case 'alkitabsearch':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let ab = await fetch(`https://restapi.frteam.xyz/alkitabsearch?q=${one}&apikey=Hrbot`)
        let ac = await ab.json()
    let ad = ac.data
	let ae = Object.values(ad).map((v, index) => ({
		title: '📌 ' + v.ayat,
		description: '\nISI: ' + v.isi + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let af = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, af, ae, m)
            break
            case 'animeidsearch':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let bb = await fetch(`https://restapi.frteam.xyz/animeidsearch?query=${one}&apikey=Hrbot`)
        let bc = await bb.json()
    let bd = bc.data
	let be = Object.values(bd).map((v, index) => ({
		title: '📌 ' + v.ayat,
		description: '\nISI: ' + v.isi + '\nLink: ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let bf = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, bf, be, m)
            break
            case 'asupanloli':
        let cb = await fetch(`https://restapi.frteam.xyz/asupanloli?&apikey=Hrbot`)
        let cc = await cb.json()
        conn.sendButtonVid(m.chat, cc.url, wm, 'Nih.mp4', 'To Sticker', '.s', fakes, adReply)
            break
            case 'asupan':
            case 'china':
            case 'hijab':
            case 'indon':
            case 'japan':
            case 'korea':
        let asu = `https://restapi.frteam.xyz/asupan?&apikey=Hrbot`
        conn.sendButtonVid(m.chat, asu, wm, 'Nih.mp4', 'To Sticker', '.s', fakes, adReply)
            break
            case 'ahegao':
case 'anal':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ecchi':
case 'ero':
case 'eroyuri':
case 'feet':
case 'femdom':
case 'foot':
case 'futanari':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'hntgifs':
case 'holo':
case 'holoero':
case 'jahy':
case 'kuni':
case 'loli2':
case 'loli':
case 'manga':
case 'masturbation':
case 'milf':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'tits':
case 'trap':
case 'waifu':
case 'yaoi':
case 'yuri':
case 'zettairyouiki':
case 'asupan':
        let nsf = `https://restapi.frteam.xyz/nsfw${args[0]}?&apikey=Hrbot`
        conn.sendButtonImg(m.chat, nsf, wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            case 'pinterest':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let db = await fetch(`https://restapi.frteam.xyz/pinterest?url=${one}&apikey=Hrbot`)
        let dc = await db.json()
    let dd = dc.data
	let de = Object.values(dd).map((v, index) => ({
		title: `Data ke ${1 + index}`,
		description: 'By ' + wm,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let df = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, df, de, m)
            break
            case 'pinterests':
            if (!one) throw `Contoh penggunaan ${usedPrefix + command} ${args[0]} |query`
        let eb = await fetch(`https://restapi.frteam.xyz/pinterestSearch?q=${one}&apikey=Hrbot`)
        let ec = await eb.json()
    let ed = ec.data
	let ee = Object.keys(ed).map((v, index) => ({
		title: `Data ke ${1 + index}`,
		description: 'By ' + wm,
		rowId: usedPrefix + 'get ' + ed[v]
	}))
	let ef = {
		buttonText: `☂️ ${args[0]} Search Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${args[0]} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, ef, ee, m)
            break
            case 'black':
case 'bp':
case 'breakwall':
case 'circuit':
case 'fiction':
case 'glitch':
case 'matrix':
case 'neon':
case 'neonlight':
case 'neonpl':
case 'toxic':
        let tpr = `https://restapi.frteam.xyz/textpro/${args[0]}?text=${one}&apikey=Hrbot`
        conn.sendButtonImg(m.chat, tpr, wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            case 'wanted':
            let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
        let wnt = `https://restapi.frteam.xyz/wanted?url=${link}&apikey=Hrbot`
        conn.sendButtonImg(m.chat, wnt, wm, 'Nih.jpg', 'To Sticker', '.s', fakes, adReply)
            break
            
}
} catch {
throw eror
}
}
}
handler.help = ['frt <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^frt$/i
export default handler

