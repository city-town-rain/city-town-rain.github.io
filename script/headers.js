// document.addEventListener('DOMContentLoaded', (event) => {
//     const headerContainer = document.getElementById('header-container');
   
//     fetch('/webs/component/header.html')
//       .then(response => response.text())
//       .then(html => {
//         headerContainer.innerHTML = html;
//       })
//       .catch(error => {
//         console.error('Error fetching header.html:', error);
//       });
//   });  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/webs/component/header.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("header-container").innerHTML = xhr.responseText;
            // 加载header.html之后，执行header.html中的脚本
            var surbscribe = document.createElement('script');
            surbscribe .src = '/script/surbscribe.js'; // 假设header.html里的JS被单独放在header.js文件中
            document.head.appendChild(surbscribe);
        }
    };
    xhr.send();