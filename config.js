const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Kolkata,India."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://samuel:samuel@cluster0.ubhyniu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://wa.me/message/K6OVW2JLF6DTI1";
global.gurl  =process.env.GURL  || "https://wa.me/message/K6OVW2JLF6DTI1";
global.website=process.env.GURL || "https://wa.me/message/K6OVW2JLF6DTI1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ebaf2cddaa62349653878.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "`𝖋𝖎𝖑𝖊 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖇𝖞 sammie`" 


global.devs = "919064560840" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349136429929";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349026919988";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_59_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyLFxuICAgICAgICA1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyLFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDg4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN0xaMkVtTXhTK0Zab21yUnRKOEpuU1dKdjN2dWliTkkrUHlHOGQvanVRTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibkdnNElMSVBSNUMteDZSS2JNOUQyUVwiLFxuICBcInBob25lSWRcIjogXCI1NGRiYWQyZS0wOTk1LTQ2NTYtYTNkNi0yM2RiZThmMzE1YzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAyNTAsXG4gICAgICAxNixcbiAgICAgIDIwNCxcbiAgICAgIDUwLFxuICAgICAgMTMsXG4gICAgICAyMTUsXG4gICAgICAxOTYsXG4gICAgICA0OSxcbiAgICAgIDIwNyxcbiAgICAgIDIxMCxcbiAgICAgIDY5LFxuICAgICAgNTUsXG4gICAgICA1OCxcbiAgICAgIDg1LFxuICAgICAgNzUsXG4gICAgICAxOSxcbiAgICAgIDI0MCxcbiAgICAgIDc2LFxuICAgICAgMjI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxNjUsXG4gICAgICAyNDcsXG4gICAgICAxMDksXG4gICAgICA5OCxcbiAgICAgIDEyNixcbiAgICAgIDExMixcbiAgICAgIDIxOSxcbiAgICAgIDIyMixcbiAgICAgIDIzMSxcbiAgICAgIDI5LFxuICAgICAgMjE0LFxuICAgICAgMTIzLFxuICAgICAgMTQ3LFxuICAgICAgMTgwLFxuICAgICAgMjM3LFxuICAgICAgMTM1LFxuICAgICAgMTU2LFxuICAgICAgMTg0LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZGMm80RkVPalYrcllHR0JVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVeFVHK0RMNEFHRkU1aVp6bVl3bkNRUzB1RUxqajlCaW8xMGpWbnd2VFZzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInM4S1JUMVQ4WmlGQUZ0UnZXZFBUTGdaQ1dYekZQN3NHVlZ2TnNPais3Mis5V2laQXBPMnYyU2tQVUErZDJaQ3VDT05vVCtDOTNkS0h0Ui9hK2VEQkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxpY1JEaVpha09JZG04eUlsZGtZeTUwZ2dncUFTNllnd2RuUFdLNldpdGFUYXZrSWVCdXFUT2hlSjNNQVJlcU9LVW9LbllpN2QvZ1FrS2llSDMxNERRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyNjkxOTk4ODo4MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIn5TYW1taWV+XCIsXG4gICAgXCJsaWRcIjogXCIxNDc4MDMwMTE2MDA2MDI6ODBAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDI2OTE5OTg4OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTg2ODc4MlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "S A M M I E",
  ownername:process.env.OWNER_NAME|| "S A M M I E",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SAMMIE"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  