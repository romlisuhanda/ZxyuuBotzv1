let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'SCRIPT')).buffer(), `
SCRIPT BOT
`.trim(), 'https://github.com/romlisuhanda/ZxyuuBotzv1', 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
