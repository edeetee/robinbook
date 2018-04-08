const $ = require('jquery');

$("#start").click(() => {
    browser.tabs.create({
        url: "https://www.facebook.com/me/friends"
    }).executeScript({
        file: "output/friends.js"
    })
})