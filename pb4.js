
// done 4
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
getInfo=calculateFinalScore(details);
console.log(getInfo);

