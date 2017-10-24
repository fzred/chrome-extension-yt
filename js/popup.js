// var notification = webkitNotifications.createNotification(
//   'images/icon.png',
//   'Notification Demo',
//   'Merry Christmas'
// );
// notification.show();

function show(text) {
  new Notification('hahahahha-yt', {
    icon: 'images/icon.png',
    body: text,
  })
}

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://127.0.0.1:4000/api/jhd.community.picture.audit?encode=%7B%22request%22:%7B%22pageSize%22:20,%22currentPage%22:1,%22condition%22:%7B%22createdAtStart%22:%22%22,%22createdAtEnd%22:%22%22%7D%7D%7D", true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4) {
//     document.querySelector('#app').innerHTML = xhr.responseText
//   }
// }
// xhr.send();

// show()

document.querySelector('#app').innerHTML = Date.now()
