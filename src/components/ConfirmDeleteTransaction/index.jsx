import styles from './styles.module.css';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function ConfirmDeleteTransaction({ close }) {
    const popUpRef = useOnClickOutside(() => close());
    return (
        <div className={styles.popup_container}>
            <div className={styles.arrow} />
            <div ref={popUpRef} className={styles.card}>
                <span className={styles.title}>Apagar item?</span>
                <div className={styles.btns}>
                    <button className={styles.confirm_btn}>Sim</button>
                    <button className={styles.cancel_btn} onClick={() => close()}>Não</button>
                </div>
            </div>
        </div>
    );
}