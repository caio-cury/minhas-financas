import styles from './styles.module.css';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import { useState } from 'react';
import AddOrEditTransactionModal from '../AddOrEditTransactionModal/index';
import ConfirmDeleteTransaction from '../ConfirmDeleteTransaction';

export default function TableLine({ id, date, weekDay, description, category, value }) {
    const [showEditModal, setShowEditMOdal] = useState(false);
    const [showConfirmDeleteTransaction, setShowConfirmDeleteTransaction] = useState(false);
    return (
        <div className={styles.table_line}>
            <span>{date}</span>
            <span>{weekDay}</span>
            <span>{description}</span>
            <span>{category}</span>
            <span>{value}</span>
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
            {showEditModal && <AddOrEditTransactionModal
                id={id}
                title={'Editar Registro'}
                closeModal={() => setShowEditMOdal(false)}
            />}
        </div>
    );
}