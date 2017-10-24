new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    videoNum: localStorage.videoNum,
  },
  methods: {
    openSite() {
      chrome.tabs.create({ url: localStorage.apiBase })
    }
  },
  ready() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.type === 'UPDATE_VIDEO_NUM') {
        this.videoNum = request.data
      }
    })
  },
})
