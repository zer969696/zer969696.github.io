$(document).ready(function() {
  var currentUrl = window.location.href;
  
  if (+currentUrl.split('&').length === 4) {
    var res = currentUrl.indexOf('state=');
    var state = currentUrl.substr(res, 12).split('=')[1];
    
    if (state === '123456') {
//      var baseUrl = 'https://api.vk.com/method/';
//      
//      var methodName = 'audio.get';
//      
//      
//      var accessToken;
//      var v;
      console.log(requestInit(currentUrl));
      
    } else {
      alert("ne ok");
    }
  } else {
    window.location.href = "https://oauth.vk.com/authorize?client_id=5850378 &display=page&redirect_uri=https://zer969696.github.io&scope=audio&response_type=token&v=5.62&state=123456";
  }
})

function requestInit(redirectedUrl) {
  console.log(redirectedUrl);
}