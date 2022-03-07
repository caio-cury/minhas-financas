import styles from './styles.module.css';
import globalStyles from '../../global.module.css';
import TableLine from '../TableLine';

export default function Table() {
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
                <TableLine />
                <TableLine />
                <TableLine />
            </div>
        </div>
    );
}