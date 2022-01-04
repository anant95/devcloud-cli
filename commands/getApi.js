const conf = new (require('conf'))()
const chalk = require('chalk')

function getApi() {
    const https = require('https');

const options = {
  hostname: 'byoc-devcloud-prod.apps.cfa.devcloud.intel.com',
  path: '/api/v1/projects/',
  method: 'GET',
 headers:{Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJha3VtYXI3MmJAZ21haWwuY29tIiwiYWNjZXNzIjpbeyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1CYXNpYyIsInByaXZpbGVnZXMiOlsiUmVhZCJdfSx7InJvbGUiOiJEZXZDbG91ZC1vbmVBUEktQmFzaWMiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX0seyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1BY2FkZW1pYSIsInByaXZpbGVnZXMiOlsiUmVhZCJdfV0sImFjY291bnRFeHBpcnkiOiIyMDIyLTAyLTExIiwiZGF5c0xlZnQiOjM4LCJ1c2VyTmFtZSI6ImFrdW1hcjcyYkBnbWFpbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImFrdW1hcjcyYjMwMDAwMzU3Nzk1MCIsImV4cCI6MTY0MTI0MjUyNiwidXNlcklkIjozMDAwMDM1Nzc5NTAsImlhdCI6MTY0MTIyNDUyNn0.lIEuj7JL2cT_ZieDkCyl08ZI47qjKAEj4O2lQdmVUGtXcGSF-K8jlOFC1azQtB9iEHcANMUB0q1Pt5OGk1cU3N-w95C5JCW4J1Vdqbf2oejdks9YNx2eeysPaY_5LGz6wjS0S0FJDvlznGtfVaUrZVymelJhFvqhKKpk5AMVyQI'}
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
}
module.exports = getApi
