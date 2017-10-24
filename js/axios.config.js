axios.defaults.baseURL = localStorage.apiBase || 'http://127.0.0.1:4000/api/'
axios.defaults.headers['Request-With'] = 'xhr'
axios.interceptors.request.use(function (config) {
  if (config.params) {
    // 将 object 的参数移到encode参数，然后在后台解析
    var encodeParam = {}
    Object.keys(config.params).forEach(function (key) {
      var p = config.params[key]
      if (typeof p === 'object') {
        encodeParam[key] = p
        delete config.params[key] // eslint-disable-line no-param-reassign
      }
    })
    config.params.encode = encodeParam // eslint-disable-line no-param-reassign
  }
  return config
})
