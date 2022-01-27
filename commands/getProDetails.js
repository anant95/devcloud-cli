
const conf = new (require('conf'))()
const chalk = require('chalk')

function getProjectDetails() {
    const https = require('https');

const options = {
  hostname: 'byoc-devcloud-prod.apps.cfa.devcloud.intel.com',
  path: '/api/v1/projects/details',
  method: 'GET',
 headers:{Authorization: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJha3VtYXI3MmJAZ21haWwuY29tIiwiYWNjZXNzIjpbeyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1CYXNpYyIsInByaXZpbGVnZXMiOlsiUmVhZCJdfSx7InJvbGUiOiJEZXZDbG91ZC1vbmVBUEktQmFzaWMiLCJwcml2aWxlZ2VzIjpbIlJlYWQiXX0seyJyb2xlIjoiRGV2Q2xvdWQtRWRnZS1BY2FkZW1pYSIsInByaXZpbGVnZXMiOlsiUmVhZCJdfV0sImFjY291bnRFeHBpcnkiOiIyMDIyLTAyLTExIiwiZGF5c0xlZnQiOjE4LCJ1c2VyTmFtZSI6ImFrdW1hcjcyYkBnbWFpbC5jb20iLCJzZXJ2aWNlTmFtZSI6ImFrdW1hcjcyYjMwMDAwMzU3Nzk1MCIsImV4cCI6MTY0MzAxMTk4NiwidXNlcklkIjozMDAwMDM1Nzc5NTAsImlhdCI6MTY0Mjk5Mzk4Nn0.T9mqCqEJtQgFl0nIFQB_QySsAFYWQAaIjewc_hYjjw3aiv2QSaQMeTSwPOEpaCsXXtElkDvA5HU_HktReDySKR97_pxV03jcQ4jkDe4U46pJ0evruO8rsKppRGJcU2Ho-a0Ee5HTKQil-ht1fLnejNsprF1LV6_Rs2Gxc6PXS2o', 
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
      len = Object(result).projectContainerDTOs.length
      //console.table(proTable)
      var Table = require('cli-table3');

// instantiate
var table = new Table({
    head: ['S.No.','Project Name', 'Description', 'Project ID', 'Container Id']
  , colWidths: [10,50, 100, 15, 15]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
//table.push(
  //  [Object(result).projects[0].name, Object(result).projects[0].description,Object(result).projects[0].projectId],
    //[Object(result).projects[1].name, Object(result).projects[1].description,Object(result).projects[1].projectId]
//);

    for(var x = 0; x < len; x++){
    table.push(
        [chalk.red(x+1), chalk.greenBright(Object(result).projectContainerDTOs[x].name),
         Object(result).projectContainerDTOs[x].description,
         chalk.yellowBright(Object(result).projectContainerDTOs[x].projectId), 
         chalk.yellowBright(Object(Object(result).projectContainerDTOs[x].containers).containerId)] );
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
module.exports = getProjectDetails
