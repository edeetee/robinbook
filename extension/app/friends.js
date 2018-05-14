import {setOne, getOne} from './lib/storage'
import Friend from './lib/friend'

/** @type Friend[] */
const friends = []

let lastChange = Date.now()
let lastY = 0;

let friendsPanel = $("#pagelet_timeline_medley_friends")

const html = `<div class="robinbook-information">
<h1>Robinbook</h1>
<p>
We are currently generating your metadata.<br>
This data will be stored in your local browser storage and downloaded as a comma separated spreadsheet.<br>
You may continue with the transfer process once your friends.csv has been generated.<br>
</p>
</div>`;
let htmlElm = null;

(async () => {
    if(0 < friendsPanel.length && ! await getOne("friends")){
        console.log('testsss')
        htmlElm = $(document.body).append(html)
        scrollUpdate();
    }
})();

function scrollUpdate() {
    let bot = friendsPanel.position().top + friendsPanel.outerHeight(true);

    //did it move
    if(lastY < window.scrollY){
        lastY = window.scrollY
        lastChange = Date.now()
    }

    //continue or not
    if((Date.now()-lastChange) < 5000 && window.scrollY < bot) {
        window.scrollBy(0,1000);
        setTimeout(scrollUpdate, 100);
    } else {
        $(".fsl.fwb.fcb").each((i, el) => {
            let item = el.children[0];
            let url = item.getAttribute('href')

            let user = urlToUser(url)
            let name = item.innerHTML;
            
            friends.push(new Friend(user, name))
        })

        friends.sort((a,b) => {
            if(a.name < b.name)
                return -1;
            else if(b.name < a.name)
                return 1;
            else
                return 0;
        })

        setOne('friends', friends)

        //make csv blob
        let prefix = "data:text/csv;charset=utf-8,"
        let csv = prefix + friends.map(val => `"${val.name}","${val.user}"`).join('\r\n');
        let encoded = encodeURI(csv)
        
        //download blob
        let link = document.createElement("a");
        link.setAttribute("href", encoded);
        link.setAttribute("download", "friends.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
        link.remove();

        htmlElm.remove();
    }
}

function find(){
    $(".fsl.fwb.fcb").each((i, el) => {
        let item = el.children[0];
        $(item).addClass('.found')
        let url = item.getAttribute('href')
        console.log(url)
        let user = urlToUser(url)
        console.log(user)
        let name = item.innerHTML;
        console.log(name)
    })
}

/** @param {String} url */
function urlToUser(url){
    if(url.includes("id=")){
       url = url.slice(url.indexOf("id=")+3)
       return url.slice(0, url.indexOf("&"))
    } else {
        url = url.slice("https://www.facebook.com/".length);
        return url.slice(0, url.indexOf("?"))
    }
}