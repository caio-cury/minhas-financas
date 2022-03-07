import styles from './styles.module.css';
import globalStyles from '../../global.module.css';

export default function ResumeCard() {
    return (

        <div className={`${styles.resume_card} ${globalStyles.containers}`}>
            <h2>Resumo</h2>
            <div className={styles.resume_line}>
                <span>Entradas</span>
                <span>R$ 200,00</span>
            </div>
            <div className={styles.resume_line}>
                <span>Saídas</span>
                <span>R$ 50,00</span>
            </div>
            <div className={styles.balance}>
                <span>Saldo</span>
                <span>R$ 150,00</span>
            </div>
        </div>


    );
}