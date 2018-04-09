const $ = require('jquery');

/** @type Friend[] */
const friends = []

let lastChange = Date.now()
let lastY = 0;

let friendsPanel = $("#pagelet_timeline_medley_friends")

class Friend{
    /** @param {string} user 
     *  @param {string} name
    */
    constructor(user, name){
        this.name = name;
        this.user = user;
    }
}

$(document.body).append(`<span class="information">We are scrolling through your facebook list then exporting the list of names and usernames to a csv spreadsheet</span>`)

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
    }
}
scrollUpdate();

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