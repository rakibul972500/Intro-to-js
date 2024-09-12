
// done 1
function calculateTax(income, expenses) {
    if(income<expenses || income<0 || expenses<0){
        return 'Invalid Input';       
    }

    const vat=20/100;
    const profit=income-expenses;
    const tax=profit*vat;
    return tax;
}

