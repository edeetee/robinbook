import $ from 'jquery/dist/jquery.slim'
import {getOne, setOne} from './lib/storage'

(async () => {
    let friends = getOne('friends');
    if(friends == null)
        $("#start").click(getFriends)
    else {
        $("#description").text("Your friends been downloaded. Now download your official archive.")
        $("#start").click(getArchive)
    }
        
})()

async function getFriends() {
    await browser.tabs.create({
        url: "https://www.facebook.com/me/friends"
    })
    browser.tabs.insertCSS({
        file: "main.css"
    })
    await browser.tabs.executeScript({
        file: "friends.js"
    })
    await setOne("stage", 1);
}

async function getArchive() {
    await browser.tabs.create({
        url: "https://www.facebook.com/settings"
    })
    browser.tabs.insertCSS({
        file: "main.css"
    })
    await browser.tabs.executeScript({
        file: "getArchive.js"
    })
    await setOne("stage", 1);
}