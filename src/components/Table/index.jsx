import styles from './styles.module.css';
import globalStyles from '../../global.module.css';
import TableLine from '../TableLine';
import getTransactions from '../../services/getTransactions';
import { useState, useEffect } from 'react';

export default function Table() {
    const [transactionsList, setTransactionsList] = useState([]);
    async function getTransactionsList() {
        const list = await getTransactions();
        setTransactionsList(list);
    }
    useEffect(() => {
        getTransactionsList();
    }, [])
    console.log(transactionsList);
    return (
        <div className={styles.table}>
            <div className={`${styles.table_head} ${globalStyles.containers}`}>
                <span>Data</span>
                <span>Dia da semana</span>
                <span>Descrição</span>
                <span>Categoria</span>
                <span>Valor</span>
            </div>
            <div className={styles.table_body}>
                {transactionsList &&
                    transactionsList.map(transaction =>
                        <TableLine
                            key={transaction.id}
                            id={transaction.id}
                            date={transaction.date}
                            weekDay={transaction.week_day}
                            description={transaction.description}
                            category={transaction.category}
                            value={transaction.value}
                        />)}
            </div>
        </div>
    );
}