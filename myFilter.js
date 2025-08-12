
// For myFilter, you'll need to create a new array, loop through each element, 
// apply the callback function to test if the element passes the condition, and 
// push the element into the new array if it passes the test.

Array.prototype.myFilter=function(callback){
  let newArr=[];

  for(let i=0; i < this.length; i++){
    if(callback(this[i],i,this)){
      newArr.push(this[i])
    }
  }
  console.log(newArr);
}
let arr = [1,2,3,4,5,6,7];

arr.myFilter((a,b)=> a <4);