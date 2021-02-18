const https = require('https')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

var apikey = '103dbd1b229ee030a5f3833c68a6bcb7730a5a12';
const options = {
  hostname: 'api.pipedrive.com',
  port: 443,
  path: '/v1/deals?start=0&api_token='+apikey,
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