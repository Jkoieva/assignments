
function reverse (str){
    let newString = ''
   
    for(let i=str.length - 1; i>=0; i--) {
    newString = newString + str[i];
   }
   
  return newString;

}

str = 'abn'
console.log(str)
newString = reverse('abn')
console.log(newString)

if (str == newString){
    console.log('This is the polindrom')
    
}
else {

    console.log('This is not the polindrom')
}
