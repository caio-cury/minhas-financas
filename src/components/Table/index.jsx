import styles from './styles.module.css';
import globalStyles from '../../global.module.css';
import TableLine from '../TableLine';
import { useContext } from 'react';
import { TransactionsListContext } from '../../contexts/transactionsList';

export default function Table() {
    const { transactionsList } = useContext(TransactionsListContext);
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
                            type={transaction.type}
                        />)}
            </div>
        </div>
    );
}