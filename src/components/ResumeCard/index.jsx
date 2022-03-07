import styles from './styles.module.css';
import globalStyles from '../../global.module.css';

export default function ResumeCard() {
    return (

        <div className={`${styles.resume_card} ${globalStyles.containers}`}>
            <h2>Resumo</h2>
            <div className={styles.resume_line}>
                <span className={styles.type}>Entradas</span>
                <span className={styles.entry}>R$ 200,00</span>
            </div>
            <div className={styles.resume_line}>
                <span className={styles.type}>Saídas</span>
                <span className={styles.exit}>R$ 50,00</span>
            </div>
            <div className={styles.balance}>
                <span className={styles.type}>Saldo</span>
                <span className={styles.balance_value}>R$ 150,00</span>
            </div>
        </div>


    );
}