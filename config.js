/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//                                                                                            // 
//                                         Ｖ：2．5．0                                         // 
//                                                                                            // 
//                                                                                            // 
//          ██████╗ ██╗███████╗████████╗███████╗██████╗     ███╗   ███╗██████╗                // 
//         ██╔════╝ ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗    ████╗ ████║██╔══██╗               // 
//         ██║  ███╗██║█████╗     ██║   █████╗  ██║  ██║    ██╔████╔██║██║  ██║               // 
//         ██║   ██║██║██╔══╝     ██║   ██╔══╝  ██║  ██║    ██║╚██╔╝██║██║  ██║               // 
//         ╚██████╔╝██║██║        ██║   ███████╗██████╔╝    ██║ ╚═╝ ██║██████╔╝               // 
//          ╚═════╝ ╚═╝╚═╝        ╚═╝   ╚══════╝╚═════╝     ╚═╝     ╚═╝╚═════╝                //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//                                                                                            //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Gifted-Md
   * @author : Gifted Tech Info
   * @youtube : https://www.youtube.com/@giftedtechnexus
   * @description : Gifted-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Gifted Tech Info.
   * © 2024 Gifted-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/204481823350f368c1826.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wabots@giftedtechnexus.co.ke"
global.location="Eldoret,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/mouricedevs/Gifted-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/54efddccf41281ad7ec51.jpg"



global.devs = "254728782591,254762016957,254110853827,254728746852,255655147353" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348122618787";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348122618787";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254728782591,254762016957,254110853827,254728746852,255655147353";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254728782591,254762016957,254110853827,254728746852,255655147353";

global.api_smd = "https://api-smd.onrender.com" 
global.scan = "https://session.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkgxRlY5RUFCWTR2UXgwK3pxMjlMU1ZUakFhNGZpM09oOGNuQlV6cGlXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNm01alE3ZXRhSnVsS2dWYXhFRExleGZLZWtRZllYcW8xWU1RWTBZcS9Ccz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQ3VaZUtMUkJ0MGxWU3FJS2xublFEb1JINDFud2FYZUJseSt5SzZYVm1ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJndXU4QWcwb0NvTUlqMkZIdEt3cUZFekp6WWRIUEpJVEZmT09xNzhJZ21JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNdXdYTm1GdWViSi9KbFNJSWRaN0pHVXZJQ0M3V2p5ZmlkVUEyZ2R3RXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp0NTBWcmZtZmtaOVRxME95aTJJcVFUREovTzRkb1RQL1BFS0Z0YTUvMUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0hpNVlNTWs0czNKWTV1eEJHNE5QaU1Ba2dpeURlRmE1K0ZPTlRLOFdGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUSs5K2I0QWZSR3VUUTQ3ZHhTTUxZdWNnR3FjdUVjNnRDTnZkVTJNQVoyZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im54SUpPTkxGb3VlUGdNUnV5WEdzeitqZHNlWkhvWW9UNzEzaDQveGNEZStxMngreWE2NjU4TWdrbkV5YldqOFo5bzNVenlYWnVWRDJkTUxDdGxsWkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJaVDE0S3Q0ZDdKQ3NvRkRtNENkQ01QQ2NJeGN2Y1RURUpGTngrK3RxVFNNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzZFF0V28xZFFKNlN1MTFwckRnSFpRIiwicGhvbmVJZCI6IjI0NTQ5NmRkLTk2ZWMtNDk5Ni1hMDI3LWI0ZTYwZGIzZDliYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFcGhoSmVzZkRQTmllNExUZ1d2azZmdENlQWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFhjaUVxU0tJNExGRmJKOUM1OVFBRmR3NTBzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik42TFJIOFFHIiwibWUiOnsiaWQiOiIyMzQ4MTIyNjE4Nzg3OjQ2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9MQU1ISURFIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV242M0FReTRMUXNRWVlCQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsODBiUi8zSk9Hby8yVGJLZGhTWlpvYzVTR2pIRE10QU1Yd3FkRVR2U0FBPSIsImFjY291bnRTaWduYXR1cmUiOiJkQU8vTUhCQTFlS0daREFjNERlRGNOV3hDL0JTQTMzUmF2NCt5RUhLREZRUE0yZW4zemwvL1B3TUlNSzNrWDM1UEp6d2tKSnNJRXlmZndjL2dVbm5Bdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidThKb0dua3UvbEFEL0ZJQStWUDNOREU2MjFtMy8yTm90Sy9JWThYbDR2MUl2VDhtN08zaTU3WlNnSU5ZVm03V3JRbEkyNXlOTUdiaXJTZmZnNVhkRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTIyNjE4Nzg3OjQ2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpmTkcwZjl5VGhxUDlrMnluWVVtV2FIT1Vob3h3ekxRREY4S25SRTcwZ0EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTQ2ODQyNDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSE4wIn0=" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.1",
  caption : process.env.CAPTION || "*©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs*" , // ```『 ©²⁰²⁴ ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@giftedtechnexus"),
 
  author : process.env.PACK_AUTHER|| "Gifted Tech",
  packname: process.env.PACK_NAME || "Gifted-Md♥️",
  botname : process.env.BOT_NAME  || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Gifted Tech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "Gifted",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "0",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
