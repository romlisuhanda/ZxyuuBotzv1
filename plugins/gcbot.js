// Tambahin Link Kalian Sendiri
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
━━━━━━━━━━━━━━━
_*Grup Official*_
━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━ꕥ
┃ *_Grup Utama_*  : https://chat.whatsapp.com/ItgtoArOdVD46P7S9cA179 => Ramein
┃ *_Grup Kedua_*  : https://chat.whatsapp.com/E5l0ofPuMxG3H8ZhMRyI7e
┃ *_Grup Ketiga_* : https://chat.whatsapp.com/FixE3mOuuxUBT8XHrjXMc6
┃ *_Grup Keempat_* : https://chat.whatsapp.com/GNtNJnaavQ6EA3dPV2ytKH
┗━━━━━━━━━━━━━ꕥ
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Zxyuu Groups')).buffer(), ext, 'Zxyuu', 'SIAP BANG🗿', 'Iya', 'Owner', '.owner', m)

}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
