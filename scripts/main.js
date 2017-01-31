$(document).ready(function() {
  var currentUrl = window.location.href;
  
  if (+currentUrl.split('&').length === 4) {
    var res = currentUrl.indexOf('state=');
    var state = currentUrl.substr(res, 12).split('=')[1];
    
    if (state === '123456') {
      $.ajax({
        method: 'POST',
        url: requestInit(currentUrl),
        success: function data(response) {
          console.log(response);
        }
      })
      requestInit(currentUrl);
    } else {
      alert("ne ok");
    }
  } else {
    window.location.href = "https://oauth.vk.com/authorize?client_id=5850378 &display=page&redirect_uri=https://zer969696.github.io&scope=audio&response_type=token&v=5.62&state=123456";
  }
})

function requestInit(redirectedUrl) {
  var baseUrl = 'https://api.vk.com/method/';
  
  var userId = (redirectedUrl.split('&')[2]).split('=')[1];
  
  var methodName = 'audio.get?';
  
  var accessToken = ((redirectedUrl.split('#')[1]).split('&')[0]).split('=')[1];
  var v = '5.62';
  
  var methodParameters = 'owner_id=' + userId + '&need_user=0&' + 'count=10';
  
  return methodName + methodParameters + '&access_token=' + accessToken + '&' + 'v=' + v;
}