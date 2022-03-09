import styles from './styles.module.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import deleteTransaction from '../../services/deleteTransaction';
import { useContext } from 'react';
import { TransactionsListContext } from '../../contexts/transactionsList';

export default function ConfirmDeleteTransaction({ id, close }) {
    const { getTransactionsList } = useContext(TransactionsListContext);
    const popUpRef = useOnClickOutside(() => close());
    async function handleDelete(id) {
        await deleteTransaction(id);
        close();
        await getTransactionsList();
    }

    return (
        <div className={styles.popup_container}>
            <div className={styles.arrow} />
            <div ref={popUpRef} className={styles.card}>
                <span className={styles.title}>Apagar item?</span>
                <div className={styles.btns}>
                    <button className={styles.confirm_btn} onClick={() => handleDelete(id)}>Sim</button>
                    <button className={styles.cancel_btn} onClick={() => close()}>Não</button>
                </div>
            </div>
        </div>
    );
}