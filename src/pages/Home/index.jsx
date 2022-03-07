import styles from './styles.module.css';
import Header from '../../components/Header';
import filterIcon from '../../assets/filter-icon.svg';
import Table from '../../components/Table';
import ResumeCard from '../../components/ResumeCard';
import globalStyles from '../../global.module.css';

export default function Home() {
  return (
    <div className={styles.main_container}>
      <Header />
      <main className={styles.home_content}>
        <button className={`${styles.show_filters} ${globalStyles.containers}`}>
          <img src={filterIcon} alt="" />
          Filtros
        </button>
        <section className={styles.table_resume_container}>
          <Table />
          <div className={styles.resume_btn_container}>
            <ResumeCard />
            <button className={styles.add_register}>
              Adicionar Registro
            </button>
          </div>
        </section>
      </main>
    </div >
  );
}
