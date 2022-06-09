// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name){
   return array.filter((match) =>
    match.toLowerCase()=== name.toLowerCase())
    
    
}

// console.log(findMatching(drivers,"bobby"));
const fuzzyMatch = (array, names) => {
     let newArray = [];
     for(const name of array){
         if(name.slice(0, 1) === names.slice(0, 1)){
             newArray.push(name)
         }
     }
     return newArray;
 }

 const matchName = (array, str) => {
     const newArray = [];
     for(const user of array){
         if(user.name.toLowerCase() === str.toLowerCase() || user.hometown.toLowerCase() === str.toLowerCase()){
             newArray.push(user)
         }
     }
     return newArray;
 }