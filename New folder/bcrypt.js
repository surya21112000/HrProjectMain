const bcrypt= require('bcryptjs');

// bcrypt.genSalt().then(salt=>{
//   console.log(salt);
// })
// bcrypt.genSalt().then(salt=>{
//   console.log(salt);
// })
// bcrypt.genSalt().then(salt=>{
//   console.log(salt);
// })

bcrypt.genSalt().then(salt=>{
 bcrypt.hash("Sury",salt).then(hash=>{
  console.log(salt)
  console.log(hash)
     bcrypt.compare("Surya",hash).then(result=>
       console.log(result));
   });
 })
