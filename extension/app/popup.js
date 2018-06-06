import {getOne, setOne} from './lib/storage'

(async () => {
    let friends = await getOne('friends');
    if(friends == null)
        $("#action").click(getFriends)
    else {
        $("#description").html("Download your facebook archive.<p>Your friends list will be applied when opened.</p>")
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
}

const fbRegex = /(http|https):\/\/.*\.facebook\.com(\/)?$/;

async function getArchive() {
    await browser.tabs.create({
        url: "https://www.facebook.com/settings?tab=your_facebook_information"
    })
}