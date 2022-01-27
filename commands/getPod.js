const conf = new (require('conf'))()
const chalk = require('chalk')
//let jwt = require('./readJwt.js')
function getStatus() {
    
    //console.log("jwt "+ Object(jwt).token)
    const https = require('https');

const options = {
  hostname: 'byoc-devcloud-prod.apps.cfa.devcloud.intel.com',
  path: '/api/v1/pod/',
  method: 'GET',
 headers:{Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJha3VtYXI3MmJAZ21haWwuY29tIiwiYWNjZXNzIjpbeyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1CYXNpYyIsInByaXZpbGVnZXMiOlsiUmVhZCJdfSx7InJvbGUiOiJEZXZDbG91ZC1vbmVBUEktQmFzaWMiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX0seyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1BY2FkZW1pYSIsInByaXZpbGVnZXMiOlsiUmVhZCJdfV0sImFjY291bnRFeHBpcnkiOiIyMDIyLTAyLTExIiwiZGF5c0xlZnQiOjE4LCJ1c2VyTmFtZSI6ImFrdW1hcjcyYkBnbWFpbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImFrdW1hcjcyYjMwMDAwMzU3Nzk1MCIsImV4cCI6MTY0MzAxNzQzNCwidXNlcklkIjozMDAwMDM1Nzc5NTAsImlhdCI6MTY0Mjk5OTQzNH0.rovnTK88TatVAIn3RtdfYu3t8Xxs01DCYvlkFhZACBB3uyaydAOeFBqVZtlI5Gd97tz862l3G5AKV_vnduFGTlc5JGj-fp-T01MTwykh9B36ILRmDkz09_QMYfdbSx-8X-cQAB2bMITwiPUOTZizRGSkeCtku_34tlvu98B3bug', 
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
      //console.log(result)
      //console.log(Object(result).projects[0])
      //console.log(typeof(Object.values(result)))
      len = Object(result).listProjects.length
      //console.table(proTable)
      var Table = require('cli-table3');

// instantiate
var table = new Table({
    head: ['S.No.','Project Name', 'Target', 'Status', 'Project ID']
  , colWidths: [10,50, 40, 40, 15]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
//table.push(
  //  [Object(result).projects[0].name, Object(result).projects[0].description,Object(result).projects[0].projectId],
    //[Object(result).projects[1].name, Object(result).projects[1].description,Object(result).projects[1].projectId]
//);

    for(var x = 0; x < len; x++){
    table.push(
        [chalk.red(x+1), chalk.greenBright(Object(result).listProjects[x].projectDTO.name), Object(result).listProjects[x].targets[0].targetName,Object(result).listProjects[x].targets[0].targetStatus,
        Object(result).listProjects[x].projectDTO.projectId]
        );
    //var pro = Object(result).projects[x].name
    }
console.log(table.toString());
        
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
}
module.exports = getStatus
