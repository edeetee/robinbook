import {getOne} from './lib/storage'
import Friend from './lib/friend'

const html = `<div class="robinbook-information">
<h2>Your friends.csv is not available on this computer</h2>
<ul>
    <input type="file" id="fileIn" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
    <li>Click the extension toolbar icon to start</li>
    <li>Or</li>
    <li><a href="#" id="loadFile">Upload your backed up friends.csv</a></li>
</ul>
</div>`

async function applyFriends(){
    /** @type {Friend[]} */
    let friends = await getOne('friends');

    if(friends == null){
        let oldElm = $(".robinbook-information");
        if(0 < oldElm.length)
            oldElm.remove()
        
        let elm = $(document.body).append(html)
        elm.find('#loadFile').click(e => {
            browser.browserAction.openPopup()
        })
    } else{
        $("div").each((i, el) => {
            if(el.children.length !== 0)
                return

            let friend = binarySearch(friends, el.innerText)
            if(friend != null){
                // console.log(friend.user)
                $(el).wrap(`<a href=https://www.facebook.com/${friend.user}></a>`)
            }
        })
    }
}
applyFriends();

/** @param {Friend[]} array 
 * @returns {Friend}
*/
function binarySearch(array, value) {
    value = String(value)
    var guess,
        min = 0,
        max = array.length - 1;	

    while(min <= max){
        guess = Math.floor((min + max) /2);
        if(value.includes(array[guess].name))
            return array[guess];
        else if(array[guess].name < value)
            min = guess + 1;
        else
            max = guess - 1;	
     }
	
     return null;
}