module.exports = {
    'Bing search' : function (browser) {
      browser
        .url('https://www.bing.com')
        .waitForElementVisible('#id_l', 2000)
        .click('#id_l')
        .waitForElementVisible('a[role=menuitem]', 2000)        
        .click('a[role=menuitem]')
        //.pause(30000)
        .waitForElementVisible('.phholder', 2000)
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