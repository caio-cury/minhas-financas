import styles from './styles.module.css';
import globalStyles from '../../global.module.css';
import { useContext } from 'react';
import { TransactionsListContext } from '../../contexts/transactionsList';

export default function ResumeCard() {

    const { transactionsList } = useContext(TransactionsListContext);

    const entries = transactionsList.filter(transaction => transaction.type === 'credit');
    const exits = transactionsList.filter(transaction => transaction.type === 'debit');
    const entriesAmount = entries.reduce((acc, cur) => {
        return acc + Number(cur.value);
    }, 0);
    const exitsAmount = exits.reduce((acc, cur) => {
        return acc + Number(cur.value);
    }, 0);
    const balanceAmount = entriesAmount - exitsAmount;
    return (

        <div className={`${styles.resume_card} ${globalStyles.containers}`}>
            <h2>Resumo</h2>
            <div className={styles.resume_line}>
                <span className={styles.type}>Entradas</span>
                <span className={styles.entry}>{entriesAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>

            </div>
            <div className={styles.resume_line}>
                <span className={styles.type}>Saídas</span>
                <span className={styles.exit}>{exitsAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className={styles.balance}>
                <span className={styles.type}>Saldo</span>
                <span className={styles.balance_value}>{balanceAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
        </div>


    );
}