let elm = $('a[href^="https://www.facebook.com/dyi"')[0]
console.log(elm)
window.location.replace(elm.getAttribute("href"))