import {getOne} from './lib/storage'
import $ from 'jquery'
import Friend from './lib/friend'

console.log('archive.js')

const html = `<div class="robinbook-information">
<h1>Your friends.csv has not been loaded on this computer. Either:</h1>
<ul>
    <input type="file" id="fileIn" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
    <li><a>Download your friend metadata through Robinbook</a></li>
    <li><a href="#" id="loadFile">Upload your backed up friends.csv</a></li>
</ul>
</div>`

async function applyFriends(){
    /** @type {'Friend'[]} */
    let friends = await getOne('friends');

    if(friends == null){
        console.log('friends none')
        let oldElm = $(".robinbook-information");
        if(0 < oldElm.length)
            oldElm.remove()
        
        let elm = $(document.body).append(html)
        elm.find('#loadFile').click(e => {
            browser.browserAction.openPopup()
        })
    } else
        console.log(friends)
}
applyFriends();