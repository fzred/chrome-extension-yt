const apiBase = localStorage.apiBase
document.getElementById('apiBase').value = apiBase
document.getElementById('save').onclick = function () {
  localStorage.apiBase = document.getElementById('apiBase').value
  alert('保存成功。')
}
