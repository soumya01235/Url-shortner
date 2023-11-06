function shortenUrl() {
  var longUrl = document.getElementById("longUrl").value;
  var request = new XMLHttpRequest();
  request.open("POST", "/shorten", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var shortUrl = document.getElementById("shortUrl");
      shortUrl.innerHTML = "Shortened URL: " + window.location.href + request.responseText;
    }
  };
  request.send(JSON.stringify({ url: longUrl }));
}
