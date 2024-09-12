//done 3
function checkDigitsInName(name) {
    if(typeof name !=='string'){
        return 'Invalid Input';
    }
    let char=name.split('');
    for(let i=0; i<char.length; i++){
      if (!isNaN(char[i])) {
            return true;
        } 
    }
    return false; 

}
getName=checkDigitsInName(8);
console.log(getName);
