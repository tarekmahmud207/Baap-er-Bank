
// banking
document.getElementById('deposit-button').addEventListener('click', function(){
    // deposit input
    const depositInput = document.getElementById('add-deposit');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // addition amount concept
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmountText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = parseFloat(previousDepositAmount) + newDepositAmount;
    totalDeposit.innerText = newDepositTotal;
    // update balence
    const balenceTotal = document.getElementById('balence-total');
    const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText);
    const newBalenceTotal = previousBalenceTotal + newDepositAmount;
    balenceTotal.innerText = newBalenceTotal;
    // input clear
    depositInput.value = ''
})


// withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balence
    const balenceTotal = document.getElementById('balence-total');
    const previousBalenceText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(previousBalenceText);
    const newBalenceTotal = previousBalenceTotal - newWithdrawAmount;
    balenceTotal.innerText = newBalenceTotal;

    // withdraw input clear 
    withdrawInput.value = ''
})