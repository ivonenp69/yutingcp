var a = [8,2,3,1,7,6,5]
function bubbleSort(a)
{
  for (var j=0; j <a.length-1; j++){
   for (var i=0; i < a.length-j-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
}
}
}
}
bubbleSort(a);
console.log(a);