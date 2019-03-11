function merge(array1, array2){
  let result = [];
  let minElem;
  while(array1.length && array2.length){
    if(array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem)
  }
  if(array1.length) result = result.concat(array1);
  else result = result.concat(array2);
  return result;
}
function mergeSort(arr){
  if(arr.length <2) return arr;
  const midIndex = Math.floor(arr.length/2)
  const firstHalf = arr.slice(0, midIndex);
  const secondHalf = arr.slice(midIndex);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
console.log(mergeSort([6000,100,-20,40,-30,16,-100,-101,-1000]));
