const accountId = 14453 
let accountEmail = "shreyassingh1216@gmail.com"
var accountPassword = "12345"

accountCity = "jaipur"

// accountId = 2 // not allowed 
console.log(accountId);

/*
Prefer not to use var 
because of its issue in block scope and fucntional scope
*/

accountEmail = "hello@gmail.com"
accountPassword = "121212"
accountCity = "Indore"
let accountState ;
console.table ([accountId , accountEmail , accountPassword , accountCity , accountState])