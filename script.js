const text_output = document.getElementById('outputdata');
let account = 0;
let cash = 0;

const setbalance = (e) => {
    e.preventDefault();
    const accountBalance = Number(document.getElementById("account-balance").value) || 0;
    const cashBalance = Number(document.getElementById("cash-balance").value) || 0;

    account = accountBalance;
    cash = cashBalance;

    const dateTime = new Date().toLocaleString();
    text_output.value += `[${dateTime}] Current account balance: ${account}, Current cash balance: ${cash}\n`;
    document.getElementById("account-balance").value = '';
    document.getElementById("cash-balance").value = '';
}

const proceed = () => {
    const money = Number(document.getElementById("money").value) || 0;
    const paymen = document.getElementById("paymen");
    const selectedText = paymen.options[paymen.selectedIndex].text.toLowerCase();

    const dateTime = new Date().toLocaleString();

    if (selectedText === "deposit" && money <= cash) {
        cash -= money;
        account += money;
    } else if (selectedText === "withdraw" && money <= account) {
        account -= money;
        cash += money;
    } else {
        alert("Transaction not possible! Check your balances.");
    }

    text_output.value += `[${dateTime}] Current account balance: ${account}, Current cash balance: ${cash}\n`;
    text_output.scrollTop = text_output.scrollHeight;
    document.getElementById("money").value = '';
}