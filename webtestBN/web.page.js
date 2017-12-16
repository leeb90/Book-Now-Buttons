// login.page.js
var Page = require('./Page')
var WebPage = Object.create(Page, {
    /**
     * define elements
     */
   
    //buttons:      { get: function () { return browser.elements('button[class^="submit"]'); } },
    buttons:      { get: function () { return browser.elements('button.submit'); } },

    
});
module.exports = WebPage;

