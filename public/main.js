function smallestCommons(arr) {
    if(arr[0]> arr[1]){
      [arr[0],arr[1]] = [arr[1],arr[0]];
    }
    let multi=[];
    for(let i=arr[0]; i<= arr[1]; i++){
      
    }
    return multi;
  }
  // smallestCommons([5,1]);
console.log(smallestCommons([5,1]));