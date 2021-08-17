// handle deposit event

document.getElementById('deposit-button').addEventListener('click',function(){
   
    // get the ammount deposited
    const depositInput = document.getElementById('deposit-input');
   const newDepositText = depositInput.value;
   const newDepositAmmount= parseFloat(newDepositText);
//    console.log(depositAmmount);
    
// upadte total newDepositText


    const depositTotal = document.getElementById('deposit-total');
    const previseDepositText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previseDepositText);
    const newDepositTotal = previousDepositAmmount + newDepositAmmount;
    depositTotal.innerText = newDepositTotal;
//    update total account balance

const balanceTotal = document.getElementById('total-balance');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal + newDepositTotal;
balanceTotal.innerText = newBalanceTotal;





    // clear the deposit input 

    depositInput.value = "";
    
    });


    // handle withdeaw wvent handler
    document.getElementById('Withdraw-button').addEventListener('click',function(){
     
        const withdrawInput = document.getElementById('Withdraw-input');
        const  withdrawAmmountText = withdrawInput.value;
        const newWithdrawAmmount = parseFloat(withdrawAmmountText);
        console.log(newWithdrawAmmount);

        // set withdraw total


        const withdrawTotal = document.getElementById('total-withdraw');
        const previousWithdrawText = withdrawTotal.innerText;
        const previouseWithdrawTotal = parseFloat(previousWithdrawText);


        const newWithdrawTotal = previouseWithdrawTotal + newWithdrawAmmount;
        withdrawTotal.innerText = newWithdrawTotal;

        // update balance
        const balanceTotal = document.getElementById('total-balance');
        const previousBalanceText = balanceTotal.innerText;
        const previousBlanceTotal = parseFloat(previousBalanceText);
        const newBalanceTotal = previousBlanceTotal - newWithdrawAmmount;
        balanceTotal.innerText = newBalanceTotal;


        
    // clear the deposit input 
    withdrawInput.value = "";




    })

