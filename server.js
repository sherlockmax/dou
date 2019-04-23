var express = require('express')
var history = require('connect-history-api-fallback')

var app = express()

require('dotenv').config()

const host = process.env.HTTP_LISTEN_HOST || '0.0.0.0'
const port = process.env.HTTP_LISTEN_PORT || 8080

const guaAddr = process.env.GUA_ADDR || '127.0.0.1'

// NOTE: env log
console.log('---------------- server env -----------------')
console.log('HTTP_LISTEN_HOST:', host)
console.log('HTTP_LISTEN_PORT:', port)
console.log('GUA_ADDR:', 'http://' + guaAddr)
console.log('---------------------------------------------')

var httpProxy = require('http-proxy')
var apiProxy = httpProxy.createProxyServer()

app.use(history())

app.all('/gua*', function(req, res) {
  let newReq = req
  newReq.url = req.url.slice(4)
  apiProxy.web(newReq, res, { target: guaAddr, changeOrigin: true })
})

app.use('/', express.static('dist'))

app.listen(port, host, function() {
  console.log('Serving on http://' + host + ':' + port)
})
