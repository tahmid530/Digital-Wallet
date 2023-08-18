document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawAmmount = document.getElementById('withdraw-ammount');
    const newWithdrawAmmountString = withdrawAmmount.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    withdrawAmmount.value = '';

    if (isNaN(newWithdrawAmmount)) {
        alert('Please provide a valid number')
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmmountString = withdrawTotal.innerText;
    const previousWithdrawAmmount = parseFloat(previousWithdrawAmmountString);

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmmount > previousBalanceTotal) {
        alert('Wallet e eto tk nai');
        return;
    }

    const currentWithdrawAmmount = previousWithdrawAmmount + newWithdrawAmmount;
    withdrawTotal.innerText = currentWithdrawAmmount;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotal.innerText = newBalanceTotal;
})