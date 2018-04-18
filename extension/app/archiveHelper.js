import $ from 'jquery'

console.log($(document.body))

const html = `<div class="robinbook-information">
<h1>Robinbook</h1>
<p>
This is your facebook information archive panel.<br>
Select to download at least your Friends data then
press Create File and wait for download to complete.<br>
</p>
</div>`;

$(document.body).append(html)