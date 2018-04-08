const $ = require('jquery');

$("#start").click(async () => {
    await browser.tabs.create({
        url: "https://www.facebook.com/me/friends"
    })
    browser.tabs.executeScript({
        file: "output/friends.js"
    })
})