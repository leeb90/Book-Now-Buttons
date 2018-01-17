// login.page.js
var Page = require('./Page')
var WebPage = Object.create(Page, {
    /**
     * define elements
     */
   
//Sandals
   	SandalsMenu:      { get: function () { return browser.element('.mm-rsv'); } },
   	SandalsButtonMenu:      { get: function () { return browser.element('button.submit'); } },
    SandalsButtonQQ:      { get: function () { return browser.element('div#fullQQ .submit'); } },
 

//Beaches

	BeachesMenu:      { get: function () { return browser.element('#book-now'); } },
   	BeachesButtonMenu:      { get: function () { return browser.element('div.qq-centerer .btn'); } },
    BeachesButtonQQ:      { get: function () { return browser.element('div.qqFooter .btn'); } },

 //PopUp
    PopUp:      { get: function () { return browser.element('div[id^="fsrOverlay"]'); } },
    ClosePopUp:      { get: function () { return browser.element('a[class^="fsrCloseBtn"]'); } },
    
});
module.exports = WebPage;
