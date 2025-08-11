let array=[1,3,3,4,5,6,6];
let remove=(input)=>{
  let result=[]
  for(let value of input){
  if(!result.includes(value)){
    result.push(value)
  }
}
return result;
}

console.log(remove(array));