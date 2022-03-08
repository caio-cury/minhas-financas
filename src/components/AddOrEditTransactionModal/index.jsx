import globalStyles from '../../global.module.css';
import styles from './styles.module.css';
import { useState } from 'react';
import closeIcon from '../../assets/close-icon.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function AddOrEditTransactionModal({ title, closeModal }) {
    const [entry, setEntry] = useState(true);
    const closeModalRef = useOnClickOutside(() => closeModal())
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
            <div
                ref={closeModalRef}
                className={globalStyles.modal_container}
            >
                <div className={styles.title_close_container}>
                    <h2>{title}</h2>
                    <img className={styles.close_icon} onClick={() => closeModal()} src={closeIcon} alt="" />
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