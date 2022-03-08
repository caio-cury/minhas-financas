async function registerNewTransaction(body) {
    const response = await fetch(' http://localhost:3334/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })

    return response;
}

export default registerNewTransaction;