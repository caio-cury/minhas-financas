async function getTransactions() {
    const response = await fetch('http://localhost:3334/transactions');
    const data = await response.json();

    return data;
}

export default getTransactions;