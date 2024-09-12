
//done 2
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


