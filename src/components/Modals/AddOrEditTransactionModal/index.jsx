import globalStyles from '../../../global.module.css';
import styles from './styles.module.css';
import { useState } from 'react';
import closeIcon from '../../../assets/close-icon.svg';

export default function AddOrEditTransactionModal() {
    const [entry, setEntry] = useState(true);
    function handleTransactionTypeEntry(event) {
        event.preventDefault();
        setEntry(true);
    }
    function handleTransactionTypeExit(event) {
        event.preventDefault();
        setEntry(false);
    }
    return (
        <div className={globalStyles.modal}>
            <div className={globalStyles.modal_container}>
                <div className={styles.title_close_container}>
                    <h2>Editar Transação</h2>
                    <img src={closeIcon} alt="" />
                </div>
                <form className={styles.modal_form} action="">
                    <div className={styles.transaction_type_btn}>
                        <button
                            className={`${styles.entry_btn} ${entry ? styles.selected : ''}`}
                            onClick={handleTransactionTypeEntry}
                        >Entrada</button>
                        <button
                            className={`${styles.exit_btn} ${!entry ? styles.selected : ''}`}
                            onClick={handleTransactionTypeExit}
                        >Saída</button>
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Valor</label>
                        <input type="text" />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Categoria</label>
                        <input type="text" />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Data</label>
                        <input type="text" />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Descrição</label>
                        <input type="text" />
                    </div>
                    <button className={styles.confirm_btn} type='submit'>Confirmar</button>
                </form>
            </div>
        </div>
    );
}