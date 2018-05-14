import $ from 'jquery'
import {getOne, setOne} from './lib/storage'

// setOne("friends", null)

(async () => {
    let friends = await getOne('friends');
    if(friends == null)
        $("#action").click(getFriends)
    else {
        $("#description").text("Your friend data been downloaded.\nDownload your archive then open index.htm in this browser.")
        $("#action").text("Get Archive")
        $("#action").click(getArchive)
        $("#title").text("Information Archive");
    }
})()

const friendsRegex = /(http|https):\/\/.*\.facebook\.com\/\w+\/friends.*/;
const friendsUrl = "https://www.facebook.com/me/friends";

let curTabID = null;

async function getFriends() {
    let tab = await browser.tabs.create({ url: friendsUrl })
    curTabID = tab.id

    // if logged out, wait for login
    // if(! tab.url.match(friendsRegex)) {
    //     browser.tabs.onUpdated.addListener(loginListener)
    // }
}

const fbRegex = /(http|https):\/\/.*\.facebook\.com(\/)?$/;

function loginListener(tabID, info, tab) {
    console.log(tab.url)
    if(tabID == curTabID){
        console.log("inside")
        browser.tabs.update(tabID, {url: friendsUrl})
        browser.tabs.onUpdated.removeListener(loginListener)
    }
}

async function getArchive() {
    await browser.tabs.create({
        url: "https://www.facebook.com/settings?tab=your_facebook_information"
    })
    browser.tabs.insertCSS({
        file: "main.css"
    })
    await browser.tabs.executeScript({
        file: "getArchive.js"
    })
}