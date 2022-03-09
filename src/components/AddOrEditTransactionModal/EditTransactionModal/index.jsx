import globalStyles from '../../../global.module.css';
import styles from '../styles.module.css';
import { useEffect, useState } from 'react';
import closeIcon from '../../../assets/close-icon.svg';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import editTransaction from '../../../services/editTransaction';
import { useContext } from 'react';
import { TransactionsListContext } from '../../../contexts/transactionsList';

export default function EditTransactionModal({ id, modalData, closeModal }) {
    const { getTransactionsList } = useContext(TransactionsListContext);
    const [entry, setEntry] = useState(true);
    const formValues = {
        value: modalData.value,
        category: modalData.category,
        date: modalData.date.slice(0, -14),
        description: modalData.description
    }
    const [form, setForm] = useState(formValues);
    const closeModalRef = useOnClickOutside(() => closeModal())
    useEffect(() => {
        modalData.type === 'credit' ? setEntry(true) : setEntry(false);
    }, [modalData])
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

        await editTransaction(id, body);
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
                    <h2>Editar Registro</h2>
                    <img className={styles.close_icon} onClick={() => closeModal()} src={closeIcon} alt="" />
                </div>
                <form className={styles.modal_form} onSubmit={handleSubmit}>
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
                            type="text"
                            value={form.value}
                            name='value'
                            onChange={handleChange}
                        />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Categoria</label>
                        <input
                            type="text"
                            value={form.category}
                            name='category'
                            onChange={handleChange}
                        />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Data</label>
                        <input
                            value={form.date}
                            type="date"
                            name='date'
                            onChange={handleChange}
                        />
                    </div>
                    <div className={globalStyles.input_container}>
                        <label htmlFor="">Descrição</label>
                        <input
                            type="text"
                            value={form.description}
                            name='description'
                            onChange={handleChange}
                        />
                    </div>
                    <button className={styles.confirm_btn} type='submit'>Confirmar</button>
                </form>
            </div>
        </div>
    );
}