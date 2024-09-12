
function calculateTax(income, expenses) {
    if(income<expenses || income<0 || expenses<0){
        return 'Invalid Input';       
    }

    const vat=20/100;
    const profit=income-expenses;
    const tax=profit*vat;
    return tax;
}


function sendNotification(email) {    
    if(!email.includes('@')){
           return 'Invalid Email';
       }
   
let divide =email.split('@');
const userName=divide[0];
const domainName=divide[1];
const notification= userName + ' sent you an email from ' + domainName;
return notification;

}


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



function calculateFinalScore(obj) {
   
    if(typeof obj!=="object"){
        return 'Invalid Input';
    }
    const testScore=obj.testScore;
   const schoolGrade=obj.schoolGrade;
    if(obj.isFFamily===true){
        quotaScore=20;
    }else{
        quotaScore=0;
    }
    const finalScore= testScore + schoolGrade + quotaScore;
    if(finalScore>=80){
        return true;
    }else{
        return false;
    }

}



function  waitingTime(waitingTimes  , serialNumber) {
    if(typeof waitingTimes !=="array" && typeof serialNumber !=='number'){
        return 'Invalid Input';
    }
    let sumArr=0;
    for(let i=0; i<waitingTimes.length; i++){
        sumArr+=waitingTimes[i];
    }
    const avgTime= Math.round(sumArr/waitingTimes.length) ;
    remSerial=serialNumber-1-waitingTimes.length;
    haveToWait=avgTime*remSerial;
    return haveToWait;
}

