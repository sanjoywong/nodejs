const https = require('https');

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: '/user/sanjoywong',
  method: 'GET',
  headers :'User-Agent',
  auth:'sanjoy.wong@gmail.com:section#menu19'
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
