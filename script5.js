
function reverse (str){
    let newString = ''
   
    for(let i=str.length - 1; i>=0; i--) {
    newString = newString + str[i];
   }
   
  return newString;

}
reverse('Ihor');
console.log(reverse('Ihor'))