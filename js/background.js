function show(text) {
  new Notification('hahahahha-yt', {
    icon: 'images/icon.png',
    body: text,
  })
}

(async function(){
  const { data } = await axios.get('user.jhd.userExtends.get.admin.condition', {
    params: {
      condition: {
        pageSize: 20,
        pageIndex: 1,
        role: 1,
        status: "4"
      }
    }
  })
  show(data.data.resultCount)
})()

// var xhr = new XMLHttpRequest();
// xhr.open("GET", `${localStorage.apiBase}user.jhd.userExtends.get.admin.condition?encode=%7B%22condition%22:%7B%22pageSize%22:1,%22pageIndex%22:1,%22role%22:1,%22registerTimeStart%22:%22%22,%22registerTimeEnd%22:%22%22,%22telNum%22:%22%22,%22nickName%22:%22%22,%22status%22:%224%22%7D%7D`, true)
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4) {
//     const { data } = JSON.parse(xhr.responseText)
//     // show(data.resultCount)
//   }
// }
// xhr.send()

// show()
