const https = require('https')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var apikey = 'e7a29f09d7edbad8b901826795fce479ceb0477cda1a6eaef6a1bccf6284735e66e3cc4b';
const options = {
  hostname: 'bling.com.br',
  port: 443,
  path: 'Api/v2/pedido/'+pedidoid+'/json/'+apikey,
  method: 'GET'
}
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()