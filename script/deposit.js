document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositAmmount = document.getElementById('deposit-ammount');
    const newDepositAmmountString = depositAmmount.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmmountString = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previousDepositAmmountString);

    const currentDepositAmmount = previousDepositAmmount + newDepositAmmount;
    depositTotal.innerText = currentDepositAmmount;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotal.innerText = currentBalanceTotal;

    depositAmmount.value = '';
})