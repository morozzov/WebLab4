function getPlathorm() {
    let str = navigator.userAgent;
    str = str.split('/')[1].split('(')[1].split(')')[0];

    return str;
}
function getBrowser() {
    let str = navigator.userAgent;
    str = str.split('/')[3].split(' ')[1];

    return str;
}
function getBrowserVersion() {
    let str = navigator.userAgent;
    str = str.split('/')[3].split(' ')[0];

    return str;
}
function getLanguage() {
    let str = navigator.language;

    return str;
}
function getLocation() {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
}

function successHandler(position)  {
    var location = document.getElementById("location");
  
    location.innerHTML = "";
    location.innerHTML += "Latitude: " + position.coords.latitude + "; " + "Longitude: " + position.coords.longitude;
  }
function errorHandler(positionError)  {
    if(positionError.code == PositionError.PERMISSION_DENIED) {
        alert("Error: Permission Denied!");
    } else if(positionError.code == PositionError.POSITION_UNAVAILABLE) {
        alert("Error: Position Unavailable!");
    } else if(positionError.code == PositionError.TIMEOUT) {
        alert("Error: Timeout!");
    }
}
function getOnline() {
    let str = navigator.onLine;

    return str;
}

function loadData() {
    var browser = document.getElementById("browser");
    var browserVersion = document.getElementById("browserVersion");
    var plathorm = document.getElementById("plathorm");
    var language = document.getElementById("language");
    var isOnline = document.getElementById("isOnline");

    browser.innerHTML = getBrowser();
    browserVersion.innerHTML = getBrowserVersion();
    plathorm.innerHTML = getPlathorm();
    language.innerHTML = getLanguage();
    getLocation();
    isOnline.innerHTML = getOnline();
}