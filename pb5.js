
// done 5
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

