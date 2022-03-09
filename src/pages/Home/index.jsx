import styles from './styles.module.css';
import Header from '../../components/Header';
import filterIcon from '../../assets/filter-icon.svg';
import Table from '../../components/Table';
import ResumeCard from '../../components/ResumeCard';
import globalStyles from '../../global.module.css';
import Filters from '../../components/Filters';
import { useState, useEffect } from 'react';
import AddTransactionModal from '../../components/AddOrEditTransactionModal/AddTransactionModal';
import getTransactions from '../../services/getTransactions';
import { TransactionsListContext } from '../../contexts/transactionsList';

export default function Home() {
  const [showFilters, setShowFilters] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [transactionsList, setTransactionsList] = useState([]);
  async function getTransactionsList() {
    const list = await getTransactions();
    setTransactionsList(list);
  }
  useEffect(() => {
    getTransactionsList();
  }, []);
  return (
    <div className={styles.main_container}>
      <Header />
      <TransactionsListContext.Provider value={{ getTransactionsList, transactionsList, setTransactionsList }}>
        <main className={styles.home_content}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`${styles.show_filters} ${globalStyles.containers}`}
          >
            <img src={filterIcon} alt="" />
            Filtros
          </button>
          <section className={styles.table_resume_container}>
            <div className={styles.table_filters_container}>
              {showFilters && <Filters />}
              <Table />
            </div>
            <div className={styles.resume_btn_container}>
              <ResumeCard />
              <button
                className={styles.add_register}
                onClick={() => setShowModal(true)}
              >
                Adicionar Registro
              </button>
            </div>
          </section>
        </main>
        {showModal &&
          <AddTransactionModal
            closeModal={() => setShowModal(false)}
          />}
      </TransactionsListContext.Provider>
    </div >
  );
}
