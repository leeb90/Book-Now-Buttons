var expect = require('chai').expect;
var request= require('request');
var WebPage = require('./web.page');

describe('Check Book Now Buttons', function() {

    it('should test Sandals Book Now Button from Menu', function() {
        WebPage.open('http://www.sandals.com/');
        WebPage.pause(2000);
        WebPage.SandalsMenu.click();
        WebPage.pause(2000);
        WebPage.SandalsButtonMenu.click();
        WebPage.pause(2000);
        expect(browser.getUrl()).to.include('obe');
        
    });


 it('should test Sandals Book Now Button from Quick Quote', function() {
        WebPage.open('http://www.sandals.com/');
        browser.refresh()
        WebPage.pause(2000)


         if(WebPage.PopUp.isVisible())
         {
           WebPage.ClosePopUp.click()
         }



        WebPage.pause(2000)
        WebPage.SandalsButtonQQ.click();
        WebPage.pause(2000)

        expect(browser.getUrl()).to.include('obe');
        
    });

  it('should test Beaches Book Now Button from Menu', function() {
        WebPage.open('http://www.beaches.com/');
        WebPage.pause(2000);
        WebPage.BeachesMenu.click();
        WebPage.pause(2000);
        WebPage.BeachesButtonMenu.click();
        WebPage.pause(2000);
        expect(browser.getUrl()).to.include('obe');
        
    });



  it('should test Beaches Book Now Button from Quick Quote', function() {
        WebPage.open('http://www.beaches.com/');
        browser.refresh()
        WebPage.pause(2000)


         if(WebPage.PopUp.isVisible())
         {
           WebPage.ClosePopUp.click()
         }



        WebPage.pause(2000)
        WebPage.BeachesButtonQQ.click();
        WebPage.pause(2000)

        expect(browser.getUrl()).to.include('obe');
        
    });


});







