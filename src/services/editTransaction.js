async function editTransaction(id, body) {
    try {
        const response = await fetch(`http://localhost:3333/transactions/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        return response;
    } catch (error) {
        console.log(error);
    }

}

export default editTransaction;