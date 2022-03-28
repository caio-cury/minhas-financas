import styles from './styles.module.css';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import { useState } from 'react';
import EditTransactionModal from '../AddOrEditTransactionModal/EditTransactionModal';
import ConfirmDeleteTransaction from '../ConfirmDeleteTransaction';

export default function TableLine({ id, date, weekDay, description, category, value, type }) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirmDeleteTransaction, setShowConfirmDeleteTransaction] = useState(false);
    function formatWeekDay(weekDay) {
        const shorter = weekDay.trim().replace('-feira', '');
        const capital = shorter.slice(0, 1).toUpperCase();
        const formated = capital + shorter.slice(1);
        return formated;
    }
    return (
        <div className={styles.table_line}>
            <span>{new Date(date).toLocaleString().slice(0, -8)}</span>
            <span>{formatWeekDay(weekDay)}</span>
            <span>{description}</span>
            <span>{category}</span>
            <span className={`${type === 'credit' ? styles.entry : styles.exit}`}>{Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <span className={styles.icons}>
                <img
                    onClick={() => setShowEditModal(true)}
                    className={styles.icon}
                    src={editIcon}
                    alt="Edit Icon"
                />
                <div className={styles.delete_container}>
                    <img onClick={() => setShowConfirmDeleteTransaction(true)}
                        className={styles.icon}
                        src={deleteIcon}
                        alt="Delete Icon"
                    />
                    {showConfirmDeleteTransaction &&
                        <ConfirmDeleteTransaction
                            id={id}
                            close={() => setShowConfirmDeleteTransaction(false)}
                        />
                    }
                </div>
            </span>
            {showEditModal && <EditTransactionModal
                id={id}
                modalData={{
                    value,
                    category,
                    date,
                    description,
                    type
                }}
                closeModal={() => setShowEditModal(false)}
            />}
        </div>
    );
}