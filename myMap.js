// For myMap, you'll need to create a new array, loop through 
// each element, apply the callback function to each element, 
// and push the result into the new array.

Array.prototype.myMap=function(callback){
  let result=[];
  for(let i=0; i < this.length; i++){
      result.push(callback(this[i],i,this))
    
  }
  console.log(result);
}

let array=[1,2,3,4,5];
array.myMap((a)=> a*2);