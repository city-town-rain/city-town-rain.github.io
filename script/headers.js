document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/webs/component/header.html", true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById("header-container").innerHTML = xhr.responseText;
          var surbscribe = document.createElement('script');  
          surbscribe.src = '/script/surbscribe.js';  
          document.body.appendChild(surbscribe);  
      
          var buttons = document.createElement('script');  
          buttons .src = '/script/buttons.js';  
          document.body.appendChild(buttons);  
          // var htmlHerf = document.createElement('script');  
          // htmlHerf.src = '/script/htmlHerf.js';  
          // document.head.appendChild(htmlHerf);  
      }
  };
  xhr.send();
});