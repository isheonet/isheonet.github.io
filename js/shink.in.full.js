function setCookie(cname,cvalue,seconds) {
    var d = new Date();
    d.setTime(d.getTime() + seconds);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

openPage = function() {

	var cookieValue = getCookie('getisheonet');
	if (cookieValue) setCookie('getisheonet', parseInt(cookieValue)+1, 86400);
	else setCookie('getisheonet', 1, 86400);
	
	var url_shortener = '';
	var url = window.location.href;
	if (url.endsWith("=") || url.indexOf("=") == -1) return;
	else url = url.slice(url.indexOf("=") + 1);
	
	if (check) url_shortener = "";
	else if (cookieValue && cookieValue%2==1) url_shortener = 'http://shink.in/s/90719?s=';
	else url_shortener = 'http://shink.in/s/90719?s=';
	
	if (url.indexOf(".") != -1) url = url_shortener + url;
	else if (url.indexOf("google") != -1) url = url_shortener + url.replace("google/", "https://docs.google.com/uc?id=");
	else if (url.indexOf("meganz") != -1) url = url_shortener + url.replace("meganz/", "https://mega.nz/#!");
	else if (url.indexOf("mfcom") != -1) url = url_shortener + url.replace("mfcom/", "http://www.mediafire.com/?");
	else if (url.indexOf("fgames") != -1) {
		reverse = (url.split('/'))[1].split("").reverse().join("");
		url = url_shortener + 'http://get.isheo.net/fgames.html?name=' + reverse;
	}
	else url = url_shortener + "https://mega.nz/#!" + url;
	
	if (check) location.href = url;
	else location.href = url.replace(/#/g, "%23");
}