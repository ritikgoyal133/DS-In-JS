function insertionSort(arr){
  let temp;
  for(let i=1; i<arr.length; i++){
    temp= arr[i]
    for(var j=i-1; arr[j]>temp&&j>-1; j--){
      arr[j+1]= arr[j]
    }
    arr[j+1] = temp
  }
  return arr;
}
insertionSort([2,1,45,66,32,5])
