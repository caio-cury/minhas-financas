import styles from './styles.module.css';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import { useState } from 'react';
import EditTransactionModal from '../AddOrEditTransactionModal/EditTransactionModal';
import ConfirmDeleteTransaction from '../ConfirmDeleteTransaction';

export default function TableLine({ id, date, weekDay, description, category, value, type }) {
    const [showEditModal, setShowEditMOdal] = useState(false);
    const [showConfirmDeleteTransaction, setShowConfirmDeleteTransaction] = useState(false);
    return (
        <div className={styles.table_line}>
            <span>{new Date(date).toLocaleString().slice(0, -8)}</span>
            <span>{weekDay.replace('-feira', '')}</span>
            <span>{description}</span>
            <span>{category}</span>
            <span className={`${type === 'credit' ? styles.entry : styles.exit}`}>{value}</span>
            <span className={styles.icons}>
                <img
                    onClick={() => setShowEditMOdal(true)}
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
                closeModal={() => setShowEditMOdal(false)}
            />}
        </div>
    );
}