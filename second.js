const data = require('./data.json'); //pulling object from data.json

function myFilter(cat){ //cat as category
let copyData=[].concat(data);//makes a copy just in case

let filtered= copyData.filter(function(user){
return user.job===cat; //returns users with category like argument cat
})
return filtered;

}
module.exports = myFilter; //making a module.exports object into a function