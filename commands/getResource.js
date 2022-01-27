
const conf = new (require('conf'))()
const chalk = require('chalk')

function getProject() {
    const https = require('https');

const options = {
  hostname: 'byoc-devcloud-prod.apps.cfa.devcloud.intel.com',
  path: '/api/v1/resources/',
  method: 'GET',
 headers:{Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJha3VtYXI3MmJAZ21haWwuY29tIiwiYWNjZXNzIjpbeyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1CYXNpYyIsInByaXZpbGVnZXMiOlsiUmVhZCJdfSx7InJvbGUiOiJEZXZDbG91ZC1vbmVBUEktQmFzaWMiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX0seyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1BY2FkZW1pYSIsInByaXZpbGVnZXMiOlsiUmVhZCJdfV0sImFjY291bnRFeHBpcnkiOiIyMDIyLTAyLTExIiwiZGF5c0xlZnQiOjE5LCJ1c2VyTmFtZSI6ImFrdW1hcjcyYkBnbWFpbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImFrdW1hcjcyYjMwMDAwMzU3Nzk1MCIsImV4cCI6MTY0Mjk1MjIwOSwidXNlcklkIjozMDAwMDM1Nzc5NTAsImlhdCI6MTY0MjkzNDIwOX0.mWoKYaVMZewVTRSgCUUh7S0eAa_ScmjFgR-OSZTaqFszaiikDYeseW0JSXCdUSt7TYYjIB-SmKBDYGhYdJTnV9BEKkXGj4XfmtXCvqqFYXrcMeX3gt1VT2lf1Mc8_OFiBh-EQJGLHIIKKHnyK8hGrWKHEWiggv1-zRITL-flzgI', 
 Connection :'keep-alive'}
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  //console.log('headers:', res.headers);

  res.on('data', (d) => {
   // process.stdout.write(d);
      //console.log(Object.keys(d))
      var result = JSON.parse(d)
      var f = d
      //console.log(Object(result).projects[0])
      //console.log(typeof(Object.values(result)))
      len = Object(result).projects.length
      //console.table(proTable)
      var Table = require('cli-table3');

// instantiate
var table = new Table({
    head: ['S.No.','Project Name', 'Description', 'Project ID']
  , colWidths: [10,50, 100, 15]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
//table.push(
  //  [Object(result).projects[0].name, Object(result).projects[0].description,Object(result).projects[0].projectId],
    //[Object(result).projects[1].name, Object(result).projects[1].description,Object(result).projects[1].projectId]
//);

    for(var x = 0; x < len; x++){
    table.push(
        [chalk.red(x+1), chalk.greenBright(Object(result).projects[x].name), Object(result).projects[x].description,chalk.yellowBright(Object(result).projects[x].projectId)]
        );
    var pro = Object(result).projects[x].name
    }
console.log(table.toString());
        
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
}
module.exports = getProject
