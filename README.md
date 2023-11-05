indexhtml

<DOCTYPE html>
<html>
  <head>
    <title>URL Shortener</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="maincontainer">
    <h1>URL Shortener</h1>
    <form>
      <label for="long-url">Enter or Paste Your long URL:</label>
      <input type="text" id="long-url" name="long-url">
      <button type="button" id="shorten-btn">Shorten</button>
    </form>
    <div id="short-url-container" style="display:none">
      <p>Here's your shortened URL:</p>
      <div id="short-url">
        <a href="" target="_blank"></a>
        <button type="button" id="copy-btn">Copy</button>
      </div>
    </div>
    
    <script src="script.js"></script>
  </body>
</html>
style.css

body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  html, body {
    height: 100%;
}
  .maincontainer h1{
    color:#fff;
    text-align: center;
  }
  form label {
    display: block;
    margin-bottom: 20px;
    margin-left: 10px;
    color: #fff;
  }
  
  form input[type="text"] {
    width: 90%;
    padding: 10px;
    margin:auto;
    border-radius: 20px;
    border:2px solid #8f94fb;
    box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.25);
  }
  
  form button {
    background-color: #fff;
    color: #8f94fb;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 10px;
    font-size: 25px;
    margin-top: 20px;
  }
  form button:hover{
    border:2px solid #8f94fb;
  }
  
  #short-url-container {
    margin-top: 20px;
  }
  #short-url-container p{
    text-align: center;
    color: #fff;
  }
  
  #short-url {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #short-url a {
    word-wrap: break-word;
    margin-right: 10px;
    color: #fff;
  }

  .maincontainer
  {
    width:80%;
    height: auto;
    min-height:350px;
    padding:40px;
    border-radius: 30px;
    box-shadow: 0px 0px 11px 4px rgba(0, 0, 0, 0.25);
    background: #4e54c8;
    background: -webkit-linear-gradient(to right, #8f94fb, #4e54c8);  
    background: linear-gradient(to right, #8f94fb, #4e54c8);
    margin: auto;
  }

  #copy-btn{
    background-color: #fff;
    color: #8f94fb;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 10px;
    font-size: 25px;
    margin-top: 20px;
  }
  .credit a {
    text-decoration: none;
    color: #000;
    font-weight: 800;
}

.credit {
    text-align: center;
    margin-top: 10px;
    font-family: Verdana,Geneva,Tahoma,sans-serif;
}

script.js

const shortenUrl = async () => {
    const longUrl = document.getElementById('long-url').value;
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const data = await response.json();
    const shortUrl = data.result.full_short_link;
  
    const shortUrlContainer = document.getElementById('short-url-container');
    const shortUrlLink = document.getElementById('short-url').querySelector('a');
    shortUrlLink.href = shortUrl;
    shortUrlLink.textContent = shortUrl;
    shortUrlContainer.style.display = 'block';
  
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(shortUrl).then(() => {
        alert('Copied to clipboard!');
      });
    });
  };
  
  const shortenBtn = document.getElementById('shorten-btn');
  shortenBtn.addEventListener('click', shortenUrl);
  
