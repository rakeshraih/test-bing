module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('https://www.bing.com')
        .waitForElementVisible('#bnp_close_link', 10000)
        .click('#bnp_close_link')      
        .waitForElementVisible('#mHamburger', 10000)
        .click('#mHamburger')
        .waitForElementVisible('a[role=menuitem]', 2000)        
        .click('a[role=menuitem]')
        //.wait(3000)
        .waitForElementVisible('input[type="email"]', 10000)
        .setValue('input[type="email"]', 'rakeshraih@hotmail.com')
        .click('#idSIButton9')
        .waitForElementVisible('input[type=password]', 2000)
        .setValue('input[type=password]', 'rai231136')
        .click('input[type=checkbox]')
        .waitForElementVisible('input[type=submit]', 2000)
        .click('input[type=submit]')
        .waitForElementVisible('input[type=search]', 2000)
        .setValue('input[type="search"]', new Date())
        .click('input[type=submit]')
        .pause(1000)
        .end();
    }
  };