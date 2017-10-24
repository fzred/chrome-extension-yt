function show({ title, body }) {
  new Notification(title, {
    icon: 'images/icon.png',
    body,
  })
}

(function () {
  async function listenVideoNum() {
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
    const videoNum = data.data.resultCount
    if ((localStorage.videoNum == undefined && videoNum > 0) || localStorage.videoNum < videoNum) {
      show({ title: `${videoNum}个认证视频未审核` })
    }
    localStorage.videoNum = data.data.resultCount
    chrome.runtime.sendMessage({ type: 'UPDATE_VIDEO_NUM', data: localStorage.videoNum })
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
    chrome.browserAction.setBadgeText({ text: `${videoNum}` })
  }
  listenVideoNum()
  setInterval(listenVideoNum, 5000)
})()
