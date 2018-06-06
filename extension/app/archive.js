import {getOne} from './lib/storage'
import Friend from './lib/friend'

const html = `<div class="robinbook-information">
<h1>Robinbook</h1>
<p>Your friends.csv is not yet available on this computer. Click on the toolbar icon to start.</p>
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
                let element = $(el).css("color", "#07C")
                element.wrap(`<a href=https://www.facebook.com/${friend.user}></a>`)
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