const conf = new (require('conf'))()
const chalk = require('chalk')

function createProject(name) {
    const https = require('https');
var postData = JSON.stringify({
  description: name,
  name: 'testproject'
})

console.log(postData)
const options = {
  hostname: 'byoc-devcloud-prod.apps.cfa.devcloud.intel.com',
  path: '/api/v1/projects/',
  method: 'POST',
    agentOptions: {
    secureProtocol: 'TLSv1_2_method'
},
credentials: 'include',
 headers:{Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJha3VtYXI3MmJAZ21haWwuY29tIiwiYWNjZXNzIjpbeyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1CYXNpYyIsInByaXZpbGVnZXMiOlsiUmVhZCJdfSx7InJvbGUiOiJEZXZDbG91ZC1vbmVBUEktQmFzaWMiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX0seyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1BY2FkZW1pYSIsInByaXZpbGVnZXMiOlsiUmVhZCJdfV0sImFjY291bnRFeHBpcnkiOiIyMDIyLTAyLTExIiwiZGF5c0xlZnQiOjE5LCJ1c2VyTmFtZSI6ImFrdW1hcjcyYkBnbWFpbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImFrdW1hcjcyYjMwMDAwMzU3Nzk1MCIsImV4cCI6MTY0Mjk1MjIwOSwidXNlcklkIjozMDAwMDM1Nzc5NTAsImlhdCI6MTY0MjkzNDIwOX0.mWoKYaVMZewVTRSgCUUh7S0eAa_ScmjFgR-OSZTaqFszaiikDYeseW0JSXCdUSt7TYYjIB-SmKBDYGhYdJTnV9BEKkXGj4XfmtXCvqqFYXrcMeX3gt1VT2lf1Mc8_OFiBh-EQJGLHIIKKHnyK8hGrWKHEWiggv1-zRITL-flzgI', 
     'X-XSRF-TOKEN': 'b76989df-e4c1-4883-a9fc-bc498087db5f',
     Accept: 'application/json, text/plain, */*',
     'Accept-Encoding': 'gzip, deflate, br',
     Connection :'keep-alive',
     'Content-Type': 'application/json',
     Cookie: 'XSRF-TOKEN: b76989df-e4c1-4883-a9fc-bc498087db5f'
}
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
   // process.stdout.write(d);
      //console.log(Object.keys(d))
      //var result = JSON.parse(d)
      //var f = d
      //console.log(Object(result).projects[0])
      //console.log(typeof(Object.values(result)))
      //len = Object(result).projects.length
      //console.log(`There are total ${len} projects`)
    //for(var x = 0; x < len; x++){
    //var pro = Object(result).projects[x].name
      //  console.log(
        //     chalk.greenBright(`${x+1}. ${pro}` ))
    //}
        
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.write(postData);
req.end();
}
module.exports = createProject
