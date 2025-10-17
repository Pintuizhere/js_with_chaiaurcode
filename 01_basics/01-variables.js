 const accountId = 41
 let accountEmail = "abc@123"
 var accountPassword = "12345" 
 accountCity = "ranchi"
 let accountState;


//  accountId = 59 // not allowed beacause accountId is a constant variable
accountEmail = "xyz@123"
accountPassword = "98765"
accountCity = "delhi" 

 console.log(accountId)
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

 /* prefer not to use var
 because of issue in block scope and fuction scope
 */