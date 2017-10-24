new Vue({
  el: '#app',
  data: {
    apiBase: localStorage.apiBase,
  },
  methods: {
    save() {
      chrome.runtime.sendMessage({ type: 'UPDATE_API_BASE', data: this.apiBase })
      alert('保持成功')
    }
  },
})
