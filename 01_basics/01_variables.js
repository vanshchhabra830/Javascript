const accountId = 30806
let accountEmail = "vansh@tannu.com"
var accountPassword = "Vanshi"
accountCity= "Rudrapur"
let accountState;

// accountId = 128280 (wrong)
 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

accountEmail = "vansh@google.com"
accountPassword = "vansh69"
accountCity = "Noida"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
Prefer not to use var because it creates issues in block scope and functional scope. Instead use let
*/
