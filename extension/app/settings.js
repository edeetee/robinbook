import $ from 'jquery'

$("a").each((i, elm) => {
    // console.log(elm)
    if(elm.getAttribute("href").match(/(http|https):\/\/.*\.facebook\.com\/dyi\/.*/)){
        window.location.replace(elm.getAttribute("href"))
    }
})