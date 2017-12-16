var expect = require('chai').expect;
var request= require('request');
var WebPage = require('./web.page');

describe('Check Book Now Buttons', function() {

    it('should test All Book Now Buttons on Sandals Page', function() {
        WebPage.open('http://www.sandals.com/');
        browser.pause(2000);

        console.log("Matches- " + WebPage.buttons.value.length);


   for(var z=0; z<WebPage.buttons.value.length; z++){


     browser.click('.mm-rsv');

         browser.pause(2000);

        

        browser.click('.' + WebPage.buttons.value[z].getAttribute('class'));

        browser.pause(2000);

        expect(browser.getUrl()).to.include('obe');

        



                    }

   




        
    });


});




