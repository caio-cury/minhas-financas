import styles from './styles.module.css';
import editIcon from '../../assets/edit-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg'

export default function TableLine() {
    return (
        <div className={styles.table_line}>
            <span>01/09/21</span>
            <span>Quarta</span>
            <span>Venda dos brigadeiros</span>
            <span>Pix</span>
            <span>R$ 200,00</span>
            <span className={styles.icons}>
                <img className={styles.icon} src={editIcon} alt="" />
                <img className={styles.icon} src={deleteIcon} alt="" />
            </span>
        </div>
    );
}