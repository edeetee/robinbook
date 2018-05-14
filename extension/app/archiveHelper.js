const html = `<div class="robinbook-information">
<h1>Robinbook</h1>
<p>
This is your facebook information archive panel.<br>
Select to download at least your Friends data then
press Create File and wait for download to complete.<br>
</p>
</div>`;

$(document.body).append(html)

setInterval(() => {
	if(document && document.location && document.location.href && !document.location.href.startsWith("https://www.facebook.com/dyi")){
		console.log(document.location.href)
		$(".robinbook-information").remove()
	}
}, 1000)