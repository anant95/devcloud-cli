const conf = new (require('conf'))()
const chalk = require('chalk')
var jwt = {
    'jwt': 'Bearer '}
function jwtToken (jwt_token) {
jwt.jwt = jwt.jwt + jwt_token
console.log("jwt token is "+ Object(jwt.jwt))
fs = require('fs');
fs.writeFile('./jwt.txt', Object(jwt.jwt), function (err) {
  if (err) return console.log(err);
});
}

module.exports = jwtToken

