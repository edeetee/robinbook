const $ = require('jquery');
$(() => {
    $("fsl fwb fcb").each(() => {
        var el = $(this)
        console.log('test');
        console.log(el);
    })
})