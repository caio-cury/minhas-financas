import globalStyles from '../../../global.module.css';
import styles from '../styles.module.css';
import { useState } from 'react';
import closeIcon from '../../../assets/close-icon.svg';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import registerNewTransaction from '../../../services/registerNewTransaction';
import { useContext } from 'react';
import { TransactionsListContext } from '../../../contexts/transactionsList';

export default function AddTransactionModal({ closeModal }) {
    const { getTransactionsList } = useContext(TransactionsListContext);
    const [entry, setEntry] = useState(true);
    const formValues = {
        date: "",
        description: "",
        value: "",
        category: ""
    }
    const [form, setForm] = useState(formValues);
    const closeModalRef = useOnClickOutside(() => closeModal())
    function handleTransactionTypeEntry(event) {
        event.preventDefault();
        setEntry(true);
    }
    function handleTransactionTypeExit(event) {
        event.preventDefault();
        setEntry(false);
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const body = {
            date: new Date(form.date),
            week_day: new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date(form.date)),
            description: form.description,
            value: form.value,
            category: form.category,
            type: entry ? 'credit' : 'debit'
        }

        await registerNewTransaction(body);
        await getTransactionsList();
        closeModal();
    }
    return (
        <div className={globalStyles.modal}>
            <div
                ref={closeModalRef}
                className={globalStyles.modal_container}
            >
                <div className={styles.title_close_container}>
                    <h2>Adicionar Registro</h2>
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
                        <input
                            name='value'
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Categoria</label>
                        <input
                            name='category'
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Data</label>
                        <input
                            name='date'
                            type="date"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Descrição</label>
                        <input
                            name='description'
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <button onClick={handleSubmit} className={styles.confirm_btn} type='submit'>Confirmar</button>
                </form>
            </div>
        </div>
    );
}