const $ = require('jquery');

const store = browser.storage.local;
getOne = async (name) => {
    return (await store.get(mkObj(name, null)))[name];
}
setOne = async (name, value) => {
    await store.set(mkObj(name,value));
    return value
}
function mkObj(name, value){
    let obj = {};
    obj[name] = value
    return obj;
}

(async () => {
    let stage = await getOne('stage');
    console.log(await browser.storage.local.get())
    if(stage == null)
        stage = await setOne('stage', 1)
    console.log(stage)
})()

$("#start").click(async () => {
    await browser.tabs.create({
        url: "https://www.facebook.com/me/friends"
    })
    browser.tabs.insertCSS({
        file: "main.css"
    })
    await browser.tabs.executeScript({
        file: "output/friends.js"
    })
    await setOne("stage", 1);
})