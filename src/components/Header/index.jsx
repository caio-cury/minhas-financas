import styles from './styles.module.css';
import logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <header className={styles.main_header}>
            <img src={logo} alt="Logotipo" />
        </header>
    );
}