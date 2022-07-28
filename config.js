/**
   * Create By MHEG AND ZUKATO
   * Contact Me on wa.me/+31620000112
   * Follow mheg on insta
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['31620000112','4797575757','447935699967']
global.premium = ['']
global.packname = '𖡝ŞƤ͢σƤ𖡝Ƀ͢σͲ𖡝'
global.author = 'Hunoter Bot'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Besondere Funktionen der Gruppenverwaltung!',
    botAdmin: 'Bots sollte zuerst Administratoren sein!',
    owner: 'Spezielle Funktionen des Besitzer-Bots',
    group: 'Funktion wird nur für Gruppen verwendet!',
    private: 'Funktionen, die nur für den privaten Chat verwendet werden!',
    bot: 'Spezielle Funktionen des Bot-Nummernbenutzers',
    wait: 'Wird geladen...',
    endLimit: 'Ihr Tageslimit ist abgelaufen, das Limit wird alle 12 Stunden zurückgesetzt',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
