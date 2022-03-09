async function deleteTransaction(id) {
    const response = await fetch(`http://localhost:3333/transactions/${id}`, {
        method: 'DELETE'
    });

    return response;
}

export default deleteTransaction;